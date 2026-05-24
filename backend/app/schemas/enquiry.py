from enum import Enum
from datetime import datetime
from typing import Optional

from pydantic import BaseModel, Field


class Channel(str, Enum):
    whatsapp = "whatsapp"
    email = "email"
    call = "call"


class CreateEnquiry(BaseModel):
    customer_name: str = Field(
        ...,
        min_length=1,
        max_length=120,
        description="Customer display name.",
        examples=["John Doe"]
    )
    channel: Channel = Field(
        ...,
        description="Inbound channel for the enquiry.",
        examples=["whatsapp"]
    )
    message: str = Field(
        ...,
        min_length=1,
        max_length=2000,
        description="Raw customer message body.",
        examples=["What is your pricing for small businesses?"]
    )


class EnquiryResponse(BaseModel):
    job_id: str = Field(..., description="Background processing job identifier.")
    enquiry_id: int
    status: str


class TimelineEvent(BaseModel):
    event: str
    description: str
    time: datetime


class EnquiryHistoryItem(BaseModel):
    id: int
    customer_name: str
    channel: Channel
    message: str
    status: str
    matched_sop: Optional[str]
    suggested_response: Optional[str]


class HistoryResponse(BaseModel):
    enquiry: EnquiryHistoryItem
    timeline: list[TimelineEvent]


class MessageResponse(BaseModel):
    message: str
