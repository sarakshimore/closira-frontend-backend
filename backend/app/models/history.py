from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from datetime import datetime
from app.database import Base


class History(Base):
    __tablename__ = "history"

    id = Column(Integer, primary_key=True, index=True)

    enquiry_id = Column(Integer, ForeignKey("enquiries.id"))

    event_type = Column(String)

    description = Column(String)

    created_at = Column(DateTime, default=datetime.utcnow)