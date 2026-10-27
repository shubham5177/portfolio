# Shubham Madane – Portfolio (Next.js full-stack)

Pages: Home, About, Projects, Certificates, and Contact.
Backend: Next.js API routes + Turso (libSQL) for contact messages.

## Projects
Project information is maintained in [`src/data/projects.ts`](./src/data/projects.ts). Update an existing project there or add another entry to the `projects` array with a unique URL-safe `slug`, name, summary, languages, technologies, repository URL, problem, solution, features, and outcome. The `/projects` listing and each `/projects/[slug]` detail page are generated from this data at build time.

## Run locally
```bash
npm install
npm run dev
```

Copy `.env.example` to `.env`. To connect to Turso, uncomment and set `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` using a newly generated Turso token. Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` to a Resend API key and a sender address verified with Resend to send confirmation emails for contact submissions. Never commit `.env` or share credentials. Without the Turso variables, local development uses the existing `prisma/dev.db`.

Run [`database/turso-schema.sql`](./database/turso-schema.sql) once in the Turso SQL console to create the required tables.

## API
- POST /api/contact { name, email, subject, message }

The contact API checks the email format, saves the message, then sends a confirmation email using Resend. If confirmation delivery is unavailable, the message remains saved and the form confirms that status.

## Deploy to Vercel
1. In Turso, open the `portfolio-shubham5177` database and run [`database/turso-schema.sql`](./database/turso-schema.sql) in its SQL console. This creates the `Message` table; it does not add sample rows.
2. Revoke any Turso token previously shared in chat or committed, then generate a new database auth token in Turso.
3. Import the repository into Vercel as a Next.js project. If Vercel asks for a Root Directory, select the folder containing this `package.json`.
4. In **Project Settings → Environment Variables**, add these for Production (and Preview too, if you deploy previews):
   - `TURSO_DATABASE_URL` — `libsql://portfolio-shubham5177.aws-ap-south-1.turso.io`
   - `TURSO_AUTH_TOKEN` — the newly generated Turso token (keep it secret)
   - `RESEND_API_KEY` — a Resend API key (keep it secret)
   - `CONTACT_FROM_EMAIL` — a sender address verified with Resend, such as `Shubham Madane <contact@your-domain.com>`
5. Deploy or redeploy so the new environment variables are applied. Vercel uses the standard Next.js build command (`npm run build`).

After the GitHub repository is connected to the Vercel project, each push to `main` triggers a Production deployment. Environment-variable values are managed separately in Vercel Project Settings; changing or pushing code does not update those values. Redeploy after changing a variable.

The app requires Turso credentials in production and will not silently use a temporary local database. Do not put credentials in source code or expose them with a `NEXT_PUBLIC_` prefix.

Put your resume at `public/cv.pdf` so the "Download CV" button works.
