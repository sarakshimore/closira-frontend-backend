from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from app.database import Base


class Enquiry(Base):
    __tablename__ = "enquiries"

    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String, nullable=False)
    channel = Column(String, nullable=False)
    message = Column(String, nullable=False)

    status = Column(String, default="open")

    matched_sop = Column(String, nullable=True)
    suggested_response = Column(String, nullable=True)

    created_at = Column(DateTime, default=datetime.utcnow)
