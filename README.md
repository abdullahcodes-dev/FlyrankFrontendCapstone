# CommuniNest — FlyRank Frontend Capstone

CommuniNest is a community-focused web application scaffold built as part of the FlyRank AI Engineering Frontend track.

The current version establishes the application's core structure, responsive layout, navigation, health-check route, environment variable structure, and production deployment setup.

## Live Preview

**Production:** `communinest-flyrank-capstone.netlify.app`

## Repository

**GitHub:** `github.com/abdullahcodes-dev/FlyrankFrontendCapstone`

## Routes

- `/` — Homepage
- `/features` — Features
- `/volunteers` — Volunteers
- `/events` — Events
- `/about` — About
- `/health` — Health check

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Netlify
- GitHub

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production Build

To verify the production build:

```bash
npm run build
```

## Environment Variables

Environment variables are kept outside the repository. A `.env.example` file documents the required structure without exposing secret values.

## Deployment

The project is connected to Netlify through the GitHub repository. Changes pushed to the production branch are automatically built and deployed.

The project uses Next.js's App Router and is deployed using Netlify's Next.js runtime.
