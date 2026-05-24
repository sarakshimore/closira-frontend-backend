from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from datetime import datetime
from app.database import Base


class FollowUp(Base):
    __tablename__ = "followups"

    id = Column(Integer, primary_key=True, index=True)

    enquiry_id = Column(Integer, ForeignKey("enquiries.id"))

    delay_minutes = Column(Integer)

    message_template = Column(String, nullable=True)

    scheduled_at = Column(DateTime)

    status = Column(String, default="pending")

    created_at = Column(DateTime, default=datetime.utcnow)