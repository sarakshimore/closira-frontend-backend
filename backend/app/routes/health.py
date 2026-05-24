from fastapi import APIRouter
from sqlalchemy import text
from app.database import SessionLocal
import redis
from app.config import REDIS_URL

router = APIRouter(tags=["Health"])

@router.get(
    "/health",
    summary="Service health check",
    description="Returns API heartbeat plus database and Redis connectivity checks."
)
def health_check():
    db = SessionLocal()

    try:
        db.execute(text("SELECT 1"))
        db_status = "connected"
    except Exception:
        db_status = "disconnected"

    try:
        r = redis.Redis.from_url(REDIS_URL)
        r.ping()
        redis_status = "connected"
    except Exception:
        redis_status = "disconnected"
    finally:
        db.close()

    return {
        "api": "healthy",
        "database": db_status,
        "redis": redis_status
    }
