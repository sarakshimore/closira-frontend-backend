from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import datetime, timedelta

from app.dependencies import get_db

from app.models.enquiry import Enquiry
from app.models.followup import FollowUp
from app.models.history import History

from app.schemas.enquiry import (
    CreateEnquiry,
    EnquiryResponse,
    HistoryResponse,
    MessageResponse,
)
from app.schemas.followup import CreateFollowUp
from app.schemas.escalation import EscalationRequest

from app.workers.tasks import process_enquiry
from app.services.logger import logger


router = APIRouter(
    prefix="/enquiry",
    tags=["Enquiry"]
)


# CREATE ENQUIRY
@router.post(
    "",
    summary="Create a new customer enquiry",
    description="Creates an enquiry and immediately queues async processing. Returns without blocking on SOP matching.",
    status_code=status.HTTP_202_ACCEPTED,
    response_model=EnquiryResponse,
)
def create_enquiry(
    payload: CreateEnquiry,
    db: Session = Depends(get_db)
):

    # Create enquiry
    enquiry = Enquiry(
        customer_name=payload.customer_name,
        channel=payload.channel,
        message=payload.message
    )

    db.add(enquiry)
    db.commit()
    db.refresh(enquiry)

    # Add history event
    history = History(
        enquiry_id=enquiry.id,
        event_type="created",
        description="Enquiry created successfully"
    )

    db.add(history)
    db.commit()

    # Trigger celery background task
    task = process_enquiry.delay(enquiry.id)

    logger.info({
        "event": "enquiry_created",
        "enquiry_id": enquiry.id,
        "channel": payload.channel.value,
        "status": enquiry.status,
        "job_id": task.id
    })

    return {
        "job_id": task.id,
        "enquiry_id": enquiry.id,
        "status": enquiry.status
    }


# FOLLOW UP
@router.post(
    "/{id}/follow-up",
    summary="Schedule a follow-up",
    description="Schedules a follow-up for an open enquiry only.",
    response_model=MessageResponse,
)
def create_followup(
    id: int,
    payload: CreateFollowUp,
    db: Session = Depends(get_db)
):

    enquiry = db.query(Enquiry).filter(
        Enquiry.id == id
    ).first()

    if not enquiry:
        raise HTTPException(
            status_code=404,
            detail="Enquiry not found"
        )

    if enquiry.status != "open":
        raise HTTPException(
            status_code=409,
            detail="Follow-up can only be scheduled for open enquiries"
        )

    scheduled_time = datetime.utcnow() + timedelta(
        minutes=payload.delay_minutes
    )

    followup = FollowUp(
        enquiry_id=id,
        delay_minutes=payload.delay_minutes,
        message_template=payload.message_template,
        scheduled_at=scheduled_time
    )

    db.add(followup)

    # Add history event
    history = History(
        enquiry_id=id,
        event_type="followup_scheduled",
        description="Follow-up scheduled successfully"
    )

    db.add(history)

    db.commit()

    logger.info({
        "event": "followup_scheduled",
        "enquiry_id": id,
        "delay_minutes": payload.delay_minutes,
        "scheduled_at": scheduled_time.isoformat()
    })

    return {
        "message": "Follow-up scheduled successfully"
    }


# ESCALATE ENQUIRY
@router.post(
    "/{id}/escalate",
    summary="Escalate enquiry to human agent",
    description="Marks an enquiry as escalated and records escalation reason.",
    response_model=MessageResponse,
)
def escalate_enquiry(
    id: int,
    payload: EscalationRequest,
    db: Session = Depends(get_db)
):

    enquiry = db.query(Enquiry).filter(
        Enquiry.id == id
    ).first()

    if not enquiry:
        raise HTTPException(
            status_code=404,
            detail="Enquiry not found"
        )

    if enquiry.status == "resolved":
        raise HTTPException(
            status_code=409,
            detail="Resolved enquiries cannot be manually escalated"
        )

    if enquiry.status == "escalated":
        raise HTTPException(
            status_code=409,
            detail="Enquiry is already escalated"
        )

    enquiry.status = "escalated"

    # Add history event
    history = History(
        enquiry_id=id,
        event_type="manual_escalation",
        description=payload.reason
    )

    db.add(history)

    db.commit()

    logger.warning({
        "event": "manual_escalation_triggered",
        "enquiry_id": id,
        "reason": payload.reason
    })

    return {
        "message": "Enquiry escalated successfully"
    }


# GET ENQUIRY HISTORY
@router.get(
    "/{id}/history",
    summary="Get enquiry history and timeline",
    description="Returns enquiry details, full event timeline, and current status.",
    response_model=HistoryResponse,
)
def get_history(
    id: int,
    db: Session = Depends(get_db)
):

    enquiry = db.query(Enquiry).filter(
        Enquiry.id == id
    ).first()

    if not enquiry:
        raise HTTPException(
            status_code=404,
            detail="Enquiry not found"
        )

    history = db.query(History).filter(
        History.enquiry_id == id
    ).order_by(History.created_at.asc()).all()

    return {
        "enquiry": {
            "id": enquiry.id,
            "customer_name": enquiry.customer_name,
            "channel": enquiry.channel,
            "message": enquiry.message,
            "status": enquiry.status,
            "matched_sop": enquiry.matched_sop,
            "suggested_response": enquiry.suggested_response
        },

        "timeline": [
            {
                "event": h.event_type,
                "description": h.description,
                "time": h.created_at
            }
            for h in history
        ]
    }
