# Molt Company

An AI-powered workforce platform landing page and web app built with React, TypeScript, and Vite. Integrates Google Gemini AI for demo features, Supabase for authentication, and Stripe for payments.

## Tech Stack

- **Language:** TypeScript
- **Framework:** React 19 with React Router v7
- **Build Tool:** Vite 6
- **AI:** Google Gemini (`@google/genai`)
- **Auth/DB:** Supabase
- **Payments:** Stripe
- **Icons:** Lucide React

## Setup

```bash
npm install
```

Create a `.env.local` file with the following keys:

```env
GEMINI_API_KEY=your-gemini-api-key
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
```

## Build / Run / Test

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

No test framework is configured.

## Project Structure

```
Molt-Company/
├── App.tsx               # Root component with routing
├── index.tsx             # Entry point
├── index.html            # HTML shell
├── components/           # Reusable UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── DemoSection.tsx   # Gemini AI demo
│   ├── ChatWidget.tsx
│   ├── Footer.tsx
│   ├── pages/            # Page-level components
│   ├── sections/         # Landing page sections
│   └── ui/               # Base UI primitives
├── context/
│   └── AuthContext.tsx   # Supabase auth context provider
├── lib/
│   ├── supabase.ts       # Supabase client init
│   └── stripe.ts         # Stripe client init
├── public/               # Static assets
├── vite.config.ts        # Vite config
└── tsconfig.json         # TypeScript config
```

## Architecture & Key Files

- `context/AuthContext.tsx` — wraps the app with Supabase auth state; use `useAuth()` hook for user/session access
- `lib/supabase.ts` — Supabase client; import from here, do not instantiate elsewhere
- `lib/stripe.ts` — Stripe.js client loader
- `components/DemoSection.tsx` — integrates Google Gemini API; `GEMINI_API_KEY` must be set (server-side only — do not expose in `VITE_` prefixed vars)

## Conventions & Notes for Agents

- All `VITE_` prefixed env vars are exposed to the browser bundle; do not put secret keys in `VITE_` vars.
- `GEMINI_API_KEY` is not prefixed with `VITE_`, implying it is intended for a server context or proxy — verify usage before exposing client-side.
- No ESLint or Prettier config is present; maintain consistent TypeScript + React patterns.
- React Router v7 is used for client-side navigation; add routes in `App.tsx`.
- No test suite configured.
