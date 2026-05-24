from fastapi import FastAPI, Request
from fastapi.exceptions import RequestValidationError
from fastapi.responses import JSONResponse

from app.database import Base, engine

from app.routes.enquiry import router as enquiry_router
from app.routes.health import router as health_router
from app.services.logger import logger


# Create all database tables
Base.metadata.create_all(bind=engine)


# Initialize FastAPI app
app = FastAPI(
    title="Closira Backend API",
    description="AI-powered enquiry management backend built with FastAPI, Celery, Redis, and SQLite.",
    version="1.0.0"
)


# Include all route files
app.include_router(enquiry_router)
app.include_router(health_router)


@app.exception_handler(RequestValidationError)
async def validation_exception_handler(_: Request, exc: RequestValidationError):
    logger.warning({
        "event": "validation_error",
        "errors": exc.errors()
    })
    return JSONResponse(
        status_code=422,
        content={
            "error": "Validation failed",
            "details": exc.errors()
        }
    )


@app.exception_handler(Exception)
async def unhandled_exception_handler(_: Request, exc: Exception):
    logger.exception({
        "event": "unhandled_exception",
        "message": str(exc)
    })
    return JSONResponse(
        status_code=500,
        content={
            "error": "Internal server error"
        }
    )


# Root endpoint
@app.get("/")
def root():
    return {
        "message": "Closira Backend Running Successfully"
    }
