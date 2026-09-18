# Shubham Madane - Personal Portfolio Website

A responsive Next.js portfolio with Better Auth, a protected dashboard, contact form storage, and a Turso/libSQL database. It is ready to deploy as a standard Vercel project.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with dark/light theme toggle
- **Authentication System**: Complete sign-up and sign-in functionality with Better Auth
- **Protected Dashboard**: Access project portfolio after authentication
- **30+ Projects**: Showcase of GitHub repositories
- **Profile Management**: View user profile and account information
- **Responsive Design**: Mobile-first approach, works on all devices
- **Smooth Animations**: Framer Motion animations throughout

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Shadcn/UI** - UI components
- **Framer Motion** - Animations
- **Lucide React** - Icons

### Backend & Authentication
- **Better Auth** - Email/password authentication and sessions
- **Turso/libSQL** - Serverless SQLite-compatible database
- **Next.js API Routes** - Server-side API endpoints

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ or Bun installed
- A Turso database (the free tier is sufficient for development)
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Dependencies

```bash
npm install
# or
bun install
```

### 3. Environment Variables

Copy `.env.local.example` to `.env.local` and set:

```bash
TURSO_CONNECTION_URL=libsql://your-database.turso.io
TURSO_AUTH_TOKEN=your_turso_auth_token
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=replace_with_a_random_32_character_secret
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Replace the values with your actual Supabase credentials from step 3.

Generate a secret with `openssl rand -base64 32` or any password manager. Never commit `.env.local`.

### 4. Run the Development Server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

1. Push the repository to GitHub and import it into [Vercel](https://vercel.com/new).
2. Keep the framework preset as **Next.js**. The default build command is `npm run build`.
3. Add `TURSO_CONNECTION_URL`, `TURSO_AUTH_TOKEN`, `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, and `NEXT_PUBLIC_SITE_URL` in Vercel project settings.
4. Set the URL variables to the deployed HTTPS URL, then redeploy.
5. Run `npm run db:push` with the production Turso variables before using sign-up or the contact form.

The Vercel runtime provides the API routes automatically; no custom server or `vercel.json` is required.

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/           # API routes
│   │   │   ├── profile/   # User profile endpoint
│   │   │   └── projects/  # Projects list endpoint
│   │   ├── dashboard/     # Protected dashboard page
│   │   ├── signin/        # Sign in page
│   │   ├── signup/        # Sign up page
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   └── globals.css    # Global styles
│   ├── components/
│   │   ├── ui/            # Shadcn UI components
│   │   └── ThemeToggle.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx # Authentication context
│   ├── hooks/
│   │   └── useTheme.tsx   # Theme hook
│   ├── lib/
│   │   ├── data/
│   │   │   └── projects.ts # Projects data
│   │   └── supabase/
│   │       ├── client.ts   # Client-side Supabase
│   │       ├── server.ts   # Server-side Supabase
│   │       └── middleware.ts
│   └── middleware.ts       # Auth middleware
├── .env.local             # Environment variables
└── package.json
```

## 🔐 Authentication Flow

1. **Sign Up**: User creates account with email, password, and full name
2. **Email Verification**: Supabase sends verification email (configurable)
3. **Sign In**: User logs in with email and password
4. **Protected Routes**: Middleware protects `/dashboard` route
5. **Session Management**: Automatic session refresh via middleware
6. **Sign Out**: Clear session and redirect to home

## 📄 Pages

### Home Page (`/`)
- Hero section with profile photo
- Skills showcase
- Call-to-action buttons (Sign In / Sign Up)
- Dark/light theme toggle

### Sign Up Page (`/signup`)
- Full name field
- Email field
- Password field
- Confirm password field
- Form validation
- Redirect to dashboard after successful signup

### Sign In Page (`/signin`)
- Email field
- Password field
- Form validation
- Redirect to dashboard after successful login

### Dashboard Page (`/dashboard`) - Protected
- User profile display (name, email, join date)
- Profile overview tab
- Projects tab with all 30+ GitHub projects
- Each project card links to GitHub repository
- Sign out functionality

## 🔒 Security Features

- **Protected Routes**: Middleware-based route protection
- **Password Hashing**: Automatic via Supabase
- **Session Management**: Secure session cookies
- **CSRF Protection**: Built into Next.js
- **Environment Variables**: Sensitive data in env files

## 🎨 UI Features

- **Responsive Design**: Mobile-first, works on all screen sizes
- **Dark/Light Theme**: Toggle with persistence in localStorage
- **Smooth Animations**: Framer Motion for page transitions
- **Modern Components**: Shadcn/UI component library
- **Loading States**: Skeleton loaders during data fetch
- **Error Handling**: User-friendly error messages

## 🔧 Customization

### Adding More Projects

Edit `src/lib/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 31,
    name: "New Project",
    url: "https://github.com/username/new-project",
    description: "Project description"
  },
  // ... more projects
]
```

### Updating Personal Information

Edit the homepage content in `src/app/page.tsx`:

```typescript
// Update name, role, university, skills, etc.
```

### Customizing Theme Colors

Edit `src/app/globals.css` to change color scheme.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🐛 Troubleshooting

### Authentication Issues

1. **Check environment variables** are set correctly
2. **Verify Supabase project** is active
3. **Check email provider** is enabled in Supabase
4. **Clear browser cache** and cookies

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install
```

### Supabase Connection Issues

- Verify your Supabase project is not paused
- Check network connectivity
- Ensure API keys are correct
- Check Supabase dashboard for service status

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Deploy to Netlify

1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables
5. Deploy

### Update Supabase URLs for Production

In Supabase dashboard:
- Go to **Authentication** → **URL Configuration**
- Add your production URL
- Add production redirect URLs

## 📝 API Endpoints

### GET `/api/profile`
Returns authenticated user's profile information.

**Response:**
```json
{
  "user": {
    "id": "uuid",
    "email": "user@example.com",
    "fullName": "John Doe",
    "createdAt": "2024-01-01T00:00:00Z"
  }
}
```

### GET `/api/projects`
Returns list of all projects.

**Response:**
```json
{
  "projects": [
    {
      "id": 1,
      "name": "Project Name",
      "url": "https://github.com/...",
      "description": "Project description"
    }
  ]
}
```

## 👤 Developer Information

- **Name**: Shubham Madane
- **University**: SPPU (Savitribai Phule Pune University)
- **Role**: Web Developer
- **GitHub**: [@shubham5177](https://github.com/shubham5177)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For any questions or support, please reach out through GitHub issues or email.

---

**Built with ❤️ using Next.js and Supabase**