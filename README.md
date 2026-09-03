# Shubham Madane - Personal Portfolio Website

A fully responsive personal portfolio website for Shubham Madane, SPPU Student and Web Developer. Built with Next.js 15, React, TypeScript, and Supabase authentication.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with dark/light theme toggle
- **Authentication System**: Complete sign-up and sign-in functionality with Supabase
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
- **Supabase** - Backend as a Service (BaaS)
- **Supabase Auth** - User authentication
- **Next.js API Routes** - Server-side API endpoints

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ or Bun installed
- A Supabase account (free tier works fine)
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

### 3. Set Up Supabase

1. **Create a Supabase Project**
   - Go to [Supabase](https://supabase.com)
   - Click "New Project"
   - Fill in project details (name, database password, region)
   - Wait for the project to be set up

2. **Get Your Supabase Credentials**
   - In your Supabase project dashboard
   - Go to **Settings** → **API**
   - Copy your:
     - Project URL
     - Anon (public) key

3. **Configure Authentication**
   - In Supabase dashboard, go to **Authentication** → **Providers**
   - Enable **Email** provider (should be enabled by default)
   - Configure your site URL:
     - Go to **Authentication** → **URL Configuration**
     - Add your site URLs (e.g., `http://localhost:3000` for development)
     - Add redirect URLs (e.g., `http://localhost:3000/dashboard`)

### 4. Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace the values with your actual Supabase credentials from step 3.

**Example:**
```bash
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijklmnop.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 5. Run the Development Server

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

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