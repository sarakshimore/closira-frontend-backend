# Closira Mobile Dashboard

React Native + Expo + TypeScript product-style prototype for Closira, an AI-powered customer communication platform for SMBs.

## Overview

This app provides a mobile dashboard for business owners to monitor:
- Inbound customer conversations
- Escalation alerts
- Follow-up tasks
- Conversation-level detail with thread, SOP match, AI summary, and timeline

No authentication, no backend, and no live API integration are used. All data comes from realistic mock JSON-style TypeScript datasets.

## Tech Stack

- React Native
- Expo
- TypeScript (strict mode)
- React Navigation (Bottom Tabs + Native Stack)
- NativeWind
- lucide-react-native
- react-native-safe-area-context
- react-native-screens
- react-native-svg
- class-variance-authority (installed for optional scaling of variants)

## Why NativeWind

NativeWind was selected to keep styling consistent and reusable while shipping quickly:
- Better design consistency through utility classes
- Faster visual iteration for SaaS-style polish
- Reduced inline style duplication across components

Shared design tokens still live in `src/theme` and color mappings for badges/statuses live in `src/utils/constants.ts`.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start Expo:

```bash
npm run start
```

3. Run on platform:

```bash
npm run android
npm run ios
npm run web
```

4. Optional type-check:

```bash
npm run typecheck
```

## Architecture

Navigation architecture:

Root Stack  
└── Tabs  
&nbsp;&nbsp;&nbsp;&nbsp;├── Home  
&nbsp;&nbsp;&nbsp;&nbsp;├── Leads  
&nbsp;&nbsp;&nbsp;&nbsp;├── Escalations  
&nbsp;&nbsp;&nbsp;&nbsp;└── FollowUps  
└── ConversationDetail

Highlights:
- Strictly typed domain models and navigation params
- Reusable component-first screen composition
- Centralized constants for channel/status/urgency visual consistency
- Stateful mock interactions for:
  - Escalation resolve flow
  - Follow-up completion flow
- Graceful empty states for all major list screens

## Folder Structure

```txt
frontend/
  App.tsx
  app.json
  babel.config.js
  metro.config.js
  tailwind.config.js
  global.css
  src/
    components/
      cards/
      badges/
      timeline/
      common/
    screens/
    navigation/
    mock/
    types/
    utils/
    theme/
```

## Mock Data Coverage

- Leads: 10 entries
- Escalations: 5 entries
- Follow-ups: 8 entries
- Detailed conversations: 5 entries
- Dashboard stats: included
- Timeline events: included per conversation

## Known Limitations

- No backend persistence (actions are in-memory state only)
- No auth or role-based access
- No push notifications/background tasks
- Sample data only in a single locale/time formatting style

## Screenshots

### Home: 
<img width="480" height="960" alt="image" src="https://github.com/user-attachments/assets/dfff247d-78b8-41cb-86fd-78cadd1b5369" />
<img width="480" height="960" alt="image" src="https://github.com/user-attachments/assets/4823bd4e-1296-409c-ab71-f519d120a110" />

### Leads: 
<img width="480" height="960" alt="image" src="https://github.com/user-attachments/assets/1f800a5e-72ce-48e1-a01b-6a991522b5e3" />

### Escalations: 
<img width="480" height="960" alt="image" src="https://github.com/user-attachments/assets/681c6f2f-4d67-4a60-8517-26b55615223f" />

### Follow-ups:
<img width="480" height="960" alt="image" src="https://github.com/user-attachments/assets/639cff07-b373-44da-aace-e1f49047c9e8" />

### Conversation Detail:
<img width="480" height="960" alt="image" src="https://github.com/user-attachments/assets/5e45083f-96e1-4330-be47-a50f49176a84" />
<img width="480" height="960" alt="image" src="https://github.com/user-attachments/assets/a89b7c54-0ea8-49c5-9add-520c5707132d" />

## Walkthrough Video Link

A 2-min recording covering full app navigation:
- Recording link: https://drive.google.com/file/d/1OuV8z5oE-elf90NOXrDkMbXHyyLOLDPh/view?usp=sharing
