# Internship Assignment

This repository contains my submission for the Closira internship assignment, consisting of:

- **Backend:** FastAPI-based enquiry workflow simulation
- **Frontend:** React Native mobile dashboard prototype

---

## Project Structure

```bash
closira-frontend-backend/
│
├── backend/     # FastAPI backend
├── frontend/    # React Native Expo frontend
└── README.md
```

---

## Backend Overview

The backend simulates Closira’s enquiry-handling workflow.

### Tech Stack
- FastAPI
- Python
- SQLite / PostgreSQL
- Background task processing
- Structured logging

### Features
- Create enquiries
- Schedule follow-ups
- Escalate enquiries
- Conversation history
- Health check endpoint
- SOP keyword matching
- Suggested automated responses
- Escalation fallback handling

### Run Backend

Go to backend folder:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv .venv
```

Activate:

Windows:

```bash
.venv\Scripts\activate
```

Mac/Linux:

```bash
source .venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run server:

```bash
uvicorn app.main:app --reload
```

API docs:

```bash
http://localhost:8000/docs
```

---

## Frontend Overview

The frontend is a mobile dashboard prototype for SMB owners to monitor customer communication workflows.

### Tech Stack
- React Native
- Expo
- TypeScript
- React Navigation
- NativeWind

### Features
- Home dashboard
- Leads list
- Escalations monitoring
- Follow-up task management
- Conversation detail view
- AI summary UI
- SOP match indicators
- Timeline tracking
- Mock API-style JSON data

---

## Run Frontend

Go to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start Expo:

```bash
npx expo start
```

Scan QR code using Expo Go.

---

## Design Notes

Frontend uses:
- reusable component architecture
- consistent badge/status color system
- scalable folder structure
- mock data shaped like backend API responses

Backend uses:
- modular FastAPI structure
- async processing
- clean API design
- persistence layer for enquiry tracking

---

## Trade-offs

### Frontend
- Mock data used instead of live backend integration
- No authentication flow
- Prototype focused on dashboard UX

### Backend
- SOP matching uses keyword rules instead of AI
- Simplified workflow logic for assignment scope
- Lightweight persistence choice for quick setup

---

## Submission Notes

This project was built as an internship assignment prototype focused on:
- clean engineering structure
- realistic product thinking
- backend-ready frontend architecture
- scalable implementation choices
