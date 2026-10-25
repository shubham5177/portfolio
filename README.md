# Shubham Madane – Portfolio (Next.js full-stack)

Pages: Home, About, Contact, Dashboard (protected), Sign In, Sign Up.
Backend: Next.js API routes + Turso (libSQL) + JWT cookie auth (jose, bcryptjs).

## Run locally
```bash
npm install
npm run dev
```

Copy `.env.example` to `.env`. To connect to Turso, uncomment and set `TURSO_DATABASE_URL` and `TURSO_AUTH_TOKEN` using a newly generated Turso token. Also set a strong `AUTH_SECRET` and your `ADMIN_EMAIL`. Never commit `.env` or share the Turso token. Without the Turso variables, local development uses the existing `prisma/dev.db`.

Run [`database/turso-schema.sql`](./database/turso-schema.sql) once in the Turso SQL console to create the required tables.

## API
- POST /api/signup  { name, email, password }
- POST /api/signin  { email, password }
- POST /api/signout
- POST /api/contact { name, email, subject, message }

## Deploy to Vercel
1. In Turso, open the `portfolio-shubham5177` database and run [`database/turso-schema.sql`](./database/turso-schema.sql) in its SQL console. This creates the `User` and `Message` tables; it does not add sample rows.
2. Revoke any Turso token previously shared in chat or committed, then generate a new database auth token in Turso.
3. Import the repository into Vercel as a Next.js project. If Vercel asks for a Root Directory, select the folder containing this `package.json`.
4. In **Project Settings → Environment Variables**, add these for Production (and Preview too, if you deploy previews):
   - `TURSO_DATABASE_URL` — `libsql://portfolio-shubham5177.aws-ap-south-1.turso.io`
   - `TURSO_AUTH_TOKEN` — the newly generated Turso token (keep it secret)
   - `AUTH_SECRET` — a unique random secret, for example generated with `openssl rand -base64 32`
   - `ADMIN_EMAIL` — the email address that should see all contact messages
5. Deploy or redeploy so the new environment variables are applied. Vercel uses the standard Next.js build command (`npm run build`).

After the GitHub repository is connected to the Vercel project, each push to `main` triggers a Production deployment. Environment-variable values are managed separately in Vercel Project Settings; changing or pushing code does not update those values. Redeploy after changing a variable.

The app requires Turso credentials in production and will not silently use a temporary local database. Do not put credentials in source code or expose them with a `NEXT_PUBLIC_` prefix.

Put your resume at `public/cv.pdf` so the "Download CV" button works.
