from app.workers.celery_worker import celery
from app.database import SessionLocal

from app.models.enquiry import Enquiry
from app.models.history import History

from app.services.sop_matcher import match_sop
from app.services.logger import logger

@celery.task(name="app.workers.tasks.process_enquiry")
def process_enquiry(enquiry_id: int):
    db = SessionLocal()
    logger.info({
        "event": "task_processing_started",
        "enquiry_id": enquiry_id
    })

    enquiry = db.query(Enquiry).filter(
        Enquiry.id == enquiry_id
    ).first()

    if not enquiry:
        logger.error({
            "event": "enquiry_not_found",
            "enquiry_id": enquiry_id
        })
        return

    result = match_sop(enquiry.message)

    if result:
        enquiry.matched_sop = result["matched_sop"]
        enquiry.suggested_response = result["response"]
        enquiry.status = "resolved"

        history = History(
            enquiry_id=enquiry.id,
            event_type="sop_matched",
            description=f"Matched SOP: {result['matched_sop']}"
        )

        db.add(history)

        logger.info({
            "event": "sop_matched",
            "enquiry_id": enquiry.id,
            "sop": result["matched_sop"]
        })

    else:
        enquiry.status = "escalated"

        history = History(
            enquiry_id=enquiry.id,
            event_type="escalated",
            description="No SOP matched. Escalated to human agent"
        )

        db.add(history)

        logger.warning({
            "event": "escalation_triggered",
            "enquiry_id": enquiry.id
        })

    db.commit()
    logger.info({
        "event": "task_processed",
        "enquiry_id": enquiry.id,
        "final_status": enquiry.status
    })
    db.close()
