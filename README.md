# Little Sunshine Daycare

A warm, personal, and professional frontend website for a local daycare center. Built as a compact 4-page application focusing on clear information hierarchy, responsive design, and accessible early childhood program presentation.

## Tech Stack
- **Framework:** React 19
- **Build Tool / Bundler:** Vite
- **Routing:** React Router v7
- **Styling:** Vanilla CSS (8px spacing grid, CSS custom properties, responsive breakpoints)
- **Code Quality / Linter:** Oxlint

## Active Routes
- `/` — **Home:** Hero banner, trust pillars, 3-program preview, environment highlights, visit CTA.
- `/about` — **About:** Center story & mission, 4 core values, 2-person care team, environment preview.
- `/programs` — **Programs:** 3 age-tailored program groups, integrated activity highlights, sample daily routine timeline, room placement guidance.
- `/contact` — **Contact:** Facility contact details, operating hours, frontend-only visit/inquiry form, 5 Parent FAQs accordion.
- `/*` — **Custom 404:** Accessible page-not-found screen with return to homepage action.

## Setup & CLI Commands
- **Install Dependencies:** `npm install`
- **Development Server:** `npm run dev`
- **Production Build:** `npm run build`
- **Lint Codebase:** `npm run lint`
- **Preview Production Build:** `npm run preview`

## Prototype & Demonstration Limitations
- **Frontend-Only Form:** Form submissions on `/contact` operate in frontend demonstration mode with client-side validation and visual confirmation. No network request, database storage, localStorage persistence, or email transmission takes place.
- **Centralized Data Placeholders:** Business details, contact info, staff profiles (Elena Rostova & Marcus Vance), program age groups, and daily schedules are centralized in `src/data/` for easy replacement with live client content.
