## Project Summary
A premium, interactive personal portfolio website for Shubham Madane, a Full-Stack Developer and student at Savitribai Phule Pune University (SPPU). The site features a modern, high-performance design with a dashboard for project management and a functional contact system.

## Tech Stack
- **Frontend**: Next.js 15+, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, Shadcn UI
- **Backend**: Next.js API Routes, Better Auth
- **Database**: PostgreSQL (Drizzle ORM)
- **Deployment**: Vercel

## Architecture
- `src/app`: Next.js App Router for pages and API routes
- `src/components`: Reusable UI components (including custom premium Navbar)
- `src/lib`: Utility functions, hooks, and auth configuration
- `src/db`: Database schema and connection logic

## User Preferences
- **Email**: madaneshubham853@gmail.com
- **Theme**: Premium dark-themed aesthetic with bold typography and high-impact animations.
- **Navigation**: Dashboard link is permanently visible in the Navbar.
- **Mobile View**: 3-dash (hamburger) menu for mobile navigation.

## Project Guidelines
- Use `framer-motion` for smooth, high-impact page transitions and micro-interactions.
- Maintain a consistent "premium" look with custom gradients and glassmorphism.
- No comments in code unless explicitly requested.
- Ensure full responsiveness across all devices.

## Common Patterns
- **API Responses**: Standardized JSON responses for all backend endpoints.
- **Form Validation**: Using Zod and React Hook Form for robust client-side validation.
- **Premium UI**: Utilizing `Badge`, `Card`, and `Button` components from Shadcn UI with custom styling.
