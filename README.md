# CommuniNest — FlyRank Frontend AI Capstone

CommuniNest is a community-focused AI web application that helps people report and understand local community issues. Users can describe a problem in their neighborhood, and CommuniNest uses an AI-powered analysis flow to identify the likely issue type, assess its urgency, explain what may be happening, and suggest practical next steps. The project was built as the final capstone for the FlyRank AI Engineering Frontend track, with a focus on accessibility, resilience, testing, performance, and production deployment.

## Live Application

**Production:** `https://communinest-flyrank-capstone.netlify.app/`

The application is deployed on Netlify and connected to the GitHub repository for continuous production deployments from the `main` branch.

## Repository

**GitHub:** `https://github.com/abdullahcodes-dev/FlyrankFrontendCapstone`

## What CommuniNest Does

CommuniNest is designed around a simple community problem: people often notice local issues but may not know how to describe them, how urgent they are, or what they can practically do next.

The application provides:

* A community-focused homepage and navigation experience
* Information about CommuniNest and its purpose
* Community features and initiatives
* Volunteer and community event sections
* An issue-reporting workflow
* AI-powered analysis of reported issues
* Structured guidance based on the submitted issue
* Clear loading, success, and error states
* Responsive layouts for mobile and desktop users

## AI-Powered Issue Analysis

The main AI capability is integrated into the **Report an Issue** workflow.

A user describes a community problem, and the frontend sends the report to the application's server-side API endpoint:

`POST /api/analyze`

The server-side route validates the request and uses the Google Gemini API to analyze the reported issue.

The AI response is structured into four useful categories:

* **Issue Type** — identifies the likely category of the reported problem
* **Urgency** — estimates how urgently the issue should be addressed
* **What May Be Happening** — provides a plain-language explanation
* **Recommended Next Steps** — suggests practical actions the user can take

This makes the AI capability part of the actual product workflow rather than a standalone chatbot or text-generation demo.

## Architecture Overview

CommuniNest uses the Next.js App Router architecture.

### Frontend

The application UI is built with:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Custom global styling
* Responsive components

The `/app` directory contains the application's routes and UI logic. Next.js uses file-system routing, with route segments represented by folders containing `page.tsx` files.

### Shared Layout

`app/layout.tsx`

The root layout provides shared application configuration, including:

* Global fonts
* Global CSS
* Metadata
* Shared navigation

### Navigation

`app/components/Navbar.tsx`

The navigation component provides:

* Desktop navigation
* Responsive mobile navigation
* Accessible menu controls
* Links to the main application sections

### AI API Route

`app/api/analyze/route.ts`

This server-side route handles AI analysis requests.

The route:

1. Receives the submitted issue
2. Validates the input
3. Sends the issue to the configured AI model
4. Requests structured analysis
5. Returns the structured result to the frontend
6. Returns an appropriate error response when the analysis fails

Keeping the AI request on the server prevents the API credential from being exposed to the browser.

### Report Page

`app/report/page.tsx`

The report page provides the main user-facing AI workflow.

It handles:

* User input
* Minimum input validation
* Loading state
* API requests
* Successful AI results
* Error states
* Structured presentation of the AI response

## Application Routes

| Route          | Purpose                          |
| -------------- | -------------------------------- |
| `/`            | Main CommuniNest homepage        |
| `/about`       | About CommuniNest                |
| `/features`    | Application features             |
| `/report`      | AI-powered issue reporting       |
| `/events`      | Community events                 |
| `/volunteers`  | Volunteer opportunities          |
| `/health`      | Application health-check route   |
| `/api/analyze` | Server-side AI analysis endpoint |

## Tech Stack

* **Next.js 16**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Google Gemini API**
* **Vitest**
* **Testing Library**
* **Netlify**
* **GitHub**

## Accessibility

Accessibility was treated as part of the implementation rather than as a final cosmetic check.

The application was tested using axe DevTools against WCAG 2.1 AA rules.

Initial automated testing identified four serious color-contrast issues. These were addressed by updating the affected text and UI colors.

A subsequent axe DevTools scan reported:

* **Automatic issues: 0**
* **Critical: 0**
* **Serious: 0**
* **Moderate: 0**
* **Minor: 0**

Additional accessibility considerations include:

* Semantic HTML elements
* Accessible navigation landmarks
* Accessible mobile menu controls
* Descriptive ARIA labels where required
* Keyboard-visible focus states
* Responsive layouts
* Sufficient color contrast
* Form validation and user feedback

## Testing

The project uses Vitest and Testing Library.

The current test suite covers the critical issue-reporting workflow.

### Tests

The report page currently has three passing tests:

1. The Analyze button remains disabled until the issue reaches the required minimum length.
2. A successful AI request displays the returned analysis.
3. A failed AI request displays an appropriate error message.

### Latest Test Result

```text
Test Files  1 passed (1)
Tests       3 passed (3)
```

### Coverage

The latest coverage report:

```text
Statements: 81.25%
Branches:   85.00%
Functions:  83.33%
Lines:      83.87%
```

The capstone requires at least 50% component coverage, and the current tested report workflow is comfortably above that threshold.

Run the tests with:

```bash
npm test -- --run
```

Generate the coverage report with:

```bash
npm test -- --run --coverage
```

## Performance Audit

The application was tested using Lighthouse in a mobile-style environment.

Latest Lighthouse results:

| Category       |   Score |
| -------------- | ------: |
| Performance    |  **87** |
| Accessibility  |  **95** |
| Best Practices | **100** |
| SEO            | **100** |

The capstone target requires a Lighthouse score of at least 85, so the current Performance score meets the requirement.

The project also received performance-related diagnostics from Lighthouse. These included JavaScript execution and main-thread work. These diagnostics were reviewed, but no unnecessary optimization work was introduced at the expense of shipping the completed product.

The most important production requirement at this stage is that the application remains functional, accessible, tested, and deployed.

## Production Build

The production build has been verified successfully using:

```bash
npm run build
```

The build completes successfully and generates all expected application routes.

The application can also be tested locally using the production server:

```bash
npm start
```

## Getting Started

### Prerequisites

* Node.js
* npm
* A configured AI API key for local AI functionality

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Run tests

```bash
npm test -- --run
```

### Run tests with coverage

```bash
npm test -- --run --coverage
```

### Run the production build

```bash
npm run build
```

### Start the production server

```bash
npm start
```

## Environment Variables

Secrets are kept outside the repository.

The project uses an environment file for local configuration, while `.env.example` documents the required environment-variable structure without exposing secret values.

Never commit API keys or other credentials to the repository.

## Resilience & Error Handling

The AI workflow is designed to fail safely rather than leaving the user with an unexplained broken interface.

The report workflow handles:

* Empty or insufficient input
* Requests that fail at the API layer
* AI request failures
* Loading states while analysis is running
* Successful structured responses
* User-facing error messages

The AI analysis endpoint also validates incoming requests before attempting the AI operation.

If the AI service is unavailable, the user receives an error state instead of a misleading or incomplete analysis.

## Deployment

CommuniNest is deployed to Netlify.

The project is connected to the GitHub repository, with the `main` branch used for production deployments.

The production deployment has been verified after the latest changes, including:

* Accessibility improvements
* Test coverage additions
* Performance improvements
* AI workflow updates

Production deployment history is retained in Netlify, allowing a previous successful deployment to be restored if a future release introduces a regression.

### Rollback Plan

If a production deployment introduces a critical regression:

1. Identify the last known-good production deployment in Netlify.
2. Restore that deployment as the active production version.
3. Investigate and fix the issue locally.
4. Run tests and a production build.
5. Push the corrected changes to `main`.
6. Verify the new production deployment.

For this project, rollback is intentionally simple: restore a known-good deployment rather than attempting an emergency production fix directly.

## Known Limitations

CommuniNest is intentionally scoped as a small capstone application rather than a full production community platform.

Current limitations include:

* No user authentication system
* No persistent database for submitted reports
* Reports are analyzed but are not currently submitted to a municipal authority
* AI-generated guidance should be treated as informational rather than official civic advice
* The application does not independently verify the real-world condition described by a user
* Community events and volunteer content are currently application-level content rather than a full user-generated platform
* The AI workflow depends on availability of the configured external AI service

These limitations are deliberate scope decisions for the capstone rather than unfinished core functionality.

## Future Improvements

Potential future development could include:

* User accounts and authentication
* Persistent issue reporting
* Issue status tracking
* Location-based issue reporting
* Image uploads for reported problems
* Community voting and verification
* Municipal or organization integrations
* Notifications for issue updates
* A moderation workflow
* AI-assisted duplicate issue detection
* More extensive automated end-to-end testing
* Expanded performance optimization as the application grows

## Production Checklist Summary

Before considering the capstone complete, the following areas were verified:

* [x] Application is deployed
* [x] Main user flows are functional
* [x] AI capability is meaningfully integrated
* [x] AI error handling is implemented
* [x] Tests exist and pass
* [x] Test coverage exceeds 50%
* [x] Production build succeeds
* [x] Lighthouse Performance score is at least 85
* [x] Accessibility audit completed
* [x] axe DevTools reports zero automatic accessibility issues
* [x] Environment secrets are kept outside the repository
* [x] Deployment and rollback approach is documented
* [x] Known limitations are documented

## Capstone Reflection

A separate reflection documents the main challenges encountered during development, the decisions that required the most thought, what could be improved in a future iteration, and the most important lessons learned while taking CommuniNest from an initial scaffold to a tested and deployed AI application.

---

**Built as part of the FlyRank AI Engineering Frontend Capstone — 2026.**
