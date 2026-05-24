from pydantic import BaseModel, Field
from typing import Optional


class CreateFollowUp(BaseModel):
    delay_minutes: int = Field(
        ...,
        gt=0,
        le=10080,
        description="Delay after which follow-up should be scheduled, in minutes.",
        examples=[30]
    )
    message_template: Optional[str] = Field(
        default=None,
        max_length=500,
        description="Optional outbound follow-up message template.",
        examples=["Checking in on your enquiry."]
    )
