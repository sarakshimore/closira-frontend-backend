# Closira Backend Assignment

FastAPI + Celery backend that simulates Closira's enquiry-handling pipeline for inbound customer messages across WhatsApp, email, and call channels.

## What This Project Does

This service implements a lightweight version of Closira's backend workflow:

1. Receives a new enquiry via REST API.
2. Stores the enquiry and immediately returns a job ID without blocking.
3. Triggers async background processing using Celery.
4. Matches the message to hardcoded SOP categories using keyword logic.
5. Updates the enquiry with:
   - matched SOP + suggested response (resolved path), or
   - escalated status if no SOP matches.
6. Stores timeline events for auditability (`history` table).
7. Exposes endpoints for follow-up scheduling, escalation, history lookup, and health checks.

## Assignment Scope Coverage

Implemented endpoints:
- `POST /enquiry`
- `POST /enquiry/{id}/follow-up`
- `POST /enquiry/{id}/escalate`
- `GET /enquiry/{id}/history`
- `GET /health`

Async processing:
- Celery worker + Redis broker/backend.
- 4 hardcoded SOP categories (`pricing`, `booking`, `complaint`, `after_hours`).

Persistence:
- SQLite via SQLAlchemy ORM.

Observability:
- Structured JSON logs for core events.

## Tech Stack

- Python 3.10+
- FastAPI
- Uvicorn
- SQLAlchemy
- Celery
- Redis
- SQLite
- Pydantic
- python-json-logger

## Project Structure

```text
backend/
├─ app/
│  ├─ main.py                  # FastAPI app setup, global exception handlers
│  ├─ config.py                # Environment configuration
│  ├─ database.py              # SQLAlchemy engine/session/base
│  ├─ dependencies.py          # DI helpers (DB session)
│  ├─ models/
│  │  ├─ enquiry.py            # Enquiry table
│  │  ├─ followup.py           # Follow-up table
│  │  └─ history.py            # Event timeline table
│  ├─ schemas/
│  │  ├─ enquiry.py            # Request/response contracts
│  │  ├─ followup.py
│  │  └─ escalation.py
│  ├─ routes/
│  │  ├─ enquiry.py            # Enquiry, follow-up, escalation, history APIs
│  │  └─ health.py             # Health + connectivity endpoint
│  ├─ services/
│  │  ├─ sop_matcher.py        # Keyword SOP matching logic
│  │  └─ logger.py             # Structured JSON logger setup
│  ├─ utils/
│  │  └─ constants.py          # Hardcoded SOP definitions
│  └─ workers/
│     ├─ celery_worker.py      # Celery app config
│     └─ tasks.py              # Async enquiry processing task
├─ api_tests.http              # HTTP test artifact for evaluator
├─ requirements.txt
└─ README.md
```

## Data Model Summary

### `enquiries`
- inbound request payload fields (`customer_name`, `channel`, `message`)
- lifecycle status (`open`, `resolved`, `escalated`)
- SOP output (`matched_sop`, `suggested_response`)

### `followups`
- follow-up scheduling data (`delay_minutes`, `message_template`, `scheduled_at`)

### `history`
- append-only event timeline per enquiry (`event_type`, `description`, `created_at`)

## API Behavior Notes

### `POST /enquiry`
- Validates `channel` enum (`whatsapp`, `email`, `call`).
- Returns HTTP `202 Accepted` with:
  - `job_id` (Celery task ID)
  - `enquiry_id`
  - current status

### `POST /enquiry/{id}/follow-up`
- Only allowed when enquiry status is `open`.
- Returns `409` for invalid transitions.

### `POST /enquiry/{id}/escalate`
- Requires escalation reason.
- Returns `409` if already escalated or already resolved.

### `GET /enquiry/{id}/history`
- Returns enquiry snapshot + full ordered timeline.

### `GET /health`
- Returns API state with DB and Redis connectivity status.

## Structured Logging

JSON logs are emitted for key events:
- `enquiry_created`
- `task_processing_started`
- `task_processed`
- `sop_matched`
- `escalation_triggered`
- `manual_escalation_triggered`
- validation and unhandled exception events

## Error Handling

- Input validation errors return HTTP `422`.
- Missing resources return HTTP `404`.
- Invalid state transitions return HTTP `409`.
- Global exception handler prevents unhandled exceptions from leaking raw stack traces to clients.

## Setup Instructions

### Prerequisites
- Python 3.10+
- Docker Desktop (recommended for Redis on all OS)

### Environment Variables
Create `.env` in project root:

```env
DATABASE_URL=sqlite:///./closira.db
REDIS_URL=redis://localhost:6379/0
```

### Installation - Windows (PowerShell)
```powershell
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

### Installation - macOS/Linux (bash/zsh)
```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### Setup/Run - Windows (PowerShell)
Run in separate terminals:

1. Redis (Docker)
```powershell
docker run --name closira-redis -p 6379:6379 -d redis:7
# If already created:
# docker start closira-redis
```

2. API
```powershell
uvicorn app.main:app --reload
```

3. Celery worker (Windows-safe)
```powershell
celery -A app.workers.celery_worker.celery worker --pool=solo --loglevel=info
```

### Setup/Run - macOS/Linux (bash/zsh)
Run in separate terminals:

1. Redis (Docker)
```bash
docker run --name closira-redis -p 6379:6379 -d redis:7
# If already created:
# docker start closira-redis
```

2. API
```bash
uvicorn app.main:app --reload
```

3. Celery worker
```bash
celery -A app.workers.celery_worker.celery worker --loglevel=info
```

## API Docs

- Swagger/OpenAPI: `http://127.0.0.1:8000/docs`

## Test Artifact

Use:
- [api_tests.http](/C:/Users/sarak/Projects/backend/api_tests.http)

It includes:
- happy path calls for all required endpoints
- validation/error-path samples (`422`, transition checks)

## Stop Services / Cleanup

### Windows (PowerShell)
1. Stop API/Celery terminals with `Ctrl + C`.
2. Stop Redis container:
```powershell
docker stop closira-redis
```
3. Optional cleanup:
```powershell
docker rm closira-redis
```

### macOS/Linux (bash/zsh)
1. Stop API/Celery terminals with `Ctrl + C`.
2. Stop Redis container:
```bash
docker stop closira-redis
```
3. Optional cleanup:
```bash
docker rm closira-redis
```

## Architecture Decisions

### Why SQLite
- Lightweight local setup aligns with assignment scope.
- No external DB provisioning required for evaluators.
- Easy migration path to PostgreSQL due to ORM abstraction.

### Why Celery over FastAPI BackgroundTasks
- Out-of-process worker execution.
- Better resiliency if API process restarts.
- Closer to real queue-driven backend architecture.

## Trade-offs / Known Limitations

- Follow-up scheduling is persisted but does not dispatch outbound messages.
- SOP matching is intentionally basic keyword logic (no ML/NLP layer).
- Status model is intentionally minimal for assignment scope.
- Windows multiprocessing pool for Celery can be unstable; `--pool=solo` is used for local reliability.

## Deliverables Checklist

- Backend code repository: this project
- README with setup, decisions, trade-offs: included
- API test artifact: `api_tests.http` included
- Video walkthrough (2-5 min): add link below before submission

### Video Walkthrough Link
- `VIDEO_LINK_HERE`
