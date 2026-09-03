"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient, useSession } from '@/lib/auth-client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Skeleton } from '@/components/ui/skeleton'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  LayoutDashboard,
  User,
  FolderGit2,
  LogOut,
  ExternalLink,
  Github,
  Mail,
  Calendar,
  Edit
} from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

interface Project {
  id: number
  name: string
  url: string
  description?: string
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function DashboardPage() {
  const router = useRouter()
  const { data: session, isPending, refetch } = useSession()
  const [projects, setProjects] = useState<Project[]>([])
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'projects'>('overview')
  const [loadingProjects, setLoadingProjects] = useState(true)

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push('/signin')
    }
  }, [session, isPending, router])

  useEffect(() => {
    if (session?.user) {
      fetchProjects()
    }
  }, [session])

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("bearer_token")
      const projectsRes = await fetch('/api/projects', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      
      if (projectsRes.ok) {
        const projectsData = await projectsRes.json()
        setProjects(projectsData.projects)
      } else {
        setError('Failed to load projects')
      }
      setLoadingProjects(false)
    } catch (err) {
      setError('Failed to load data')
      setLoadingProjects(false)
    }
  }

  const handleSignOut = async () => {
    const token = localStorage.getItem("bearer_token")

    const { error } = await authClient.signOut({
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    })
    
    if (error?.code) {
      toast.error(error.code)
    } else {
      localStorage.removeItem("bearer_token")
      refetch()
      toast.success('Signed out successfully')
      router.push("/")
    }
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
  }

  if (isPending || !session?.user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
            <div className="lg:col-span-3">
              <Skeleton className="h-96 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const user = session.user

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Dashboard</span>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="h-24 w-24 border-4 border-primary/20">
                    <AvatarImage 
                      src="https://image2url.com/images/1764330318999-c357397a-189b-442f-b6e8-30b041297dfc.jpg" 
                      alt={user.name || 'User'} 
                    />
                    <AvatarFallback className="text-2xl">
                      {getInitials(user.name || 'User')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <CardTitle>{user.name || 'User'}</CardTitle>
                <CardDescription className="flex items-center justify-center gap-2">
                  <Mail className="h-3 w-3" />
                  {user.email}
                </CardDescription>
                <Badge variant="secondary" className="mt-2">
                  SPPU Student
                </Badge>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button 
                  variant={activeTab === 'overview' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab('overview')}
                >
                  <User className="h-4 w-4 mr-2" />
                  Profile Overview
                </Button>
                <Button 
                  variant={activeTab === 'projects' ? 'default' : 'ghost'} 
                  className="w-full justify-start"
                  onClick={() => setActiveTab('projects')}
                >
                  <FolderGit2 className="h-4 w-4 mr-2" />
                  My Projects ({projects.length})
                </Button>
                <Button variant="ghost" className="w-full justify-start" disabled>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Welcome Card */}
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Welcome back, {user.name?.split(' ')[0]}! 👋
                    </CardTitle>
                    <CardDescription>
                      Here's an overview of your portfolio
                    </CardDescription>
                  </CardHeader>
                </Card>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardDescription>Total Projects</CardDescription>
                      <CardTitle className="text-4xl">{projects.length}</CardTitle>
                    </CardHeader>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardDescription>Member Since</CardDescription>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                      </CardTitle>
                    </CardHeader>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardDescription>GitHub Profile</CardDescription>
                      <Button asChild variant="outline" className="mt-2">
                        <a 
                          href="https://github.com/shubham5177" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Profile
                        </a>
                      </Button>
                    </CardHeader>
                  </Card>
                </div>

                {/* About Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>About Me</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">University</h4>
                      <p className="text-muted-foreground">Savitribai Phule Pune University (SPPU)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Role</h4>
                      <p className="text-muted-foreground">Web Developer</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'MySQL', 'Git', 'GitHub'].map(skill => (
                          <Badge key={skill} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeTab === 'projects' && (
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FolderGit2 className="h-6 w-6" />
                      My Projects
                    </CardTitle>
                    <CardDescription>
                      Explore all {projects.length} projects from my GitHub portfolio
                    </CardDescription>
                  </CardHeader>
                </Card>

                {loadingProjects ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...Array(6)].map((_, i) => (
                      <Skeleton key={i} className="h-32 w-full rounded-lg" />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projects.map((project) => (
                      <motion.div key={project.id} variants={item}>
                        <Card className="h-full hover:shadow-lg transition-all hover:scale-[1.02] group">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <CardTitle className="text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                                  <Github className="h-5 w-5" />
                                  {project.name}
                                </CardTitle>
                                <CardDescription className="mt-2">
                                  {project.description || 'View project on GitHub'}
                                </CardDescription>
                              </div>
                              <Button 
                                size="icon" 
                                variant="ghost" 
                                asChild
                                className="shrink-0"
                              >
                                <a 
                                  href={project.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  aria-label={`View ${project.name} on GitHub`}
                                >
                                  <ExternalLink className="h-4 w-4" />
                                </a>
                              </Button>
                            </div>
                          </CardHeader>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}