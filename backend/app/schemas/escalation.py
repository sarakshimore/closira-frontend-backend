from pydantic import BaseModel, Field


class EscalationRequest(BaseModel):
    reason: str = Field(
        ...,
        min_length=3,
        max_length=500,
        description="Reason for human-agent escalation.",
        examples=["Customer requested to speak to a live agent."]
    )
