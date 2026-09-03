"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Database, 
  GitBranch, 
  ArrowRight, 
  ExternalLink,
  Sparkles,
  Zap,
  Globe,
  Layers,
  Terminal,
  Cpu,
  Rocket,
  ChevronRight
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const services = [
  {
    title: "Full-Stack Development",
    description: "Architecting end-to-end solutions using Next.js, React, and Node.js with a focus on scalability.",
    icon: Globe,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Database Architecture",
    description: "Designing efficient schemas and optimizing queries for PostgreSQL, MySQL, and NoSQL databases.",
    icon: Database,
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    title: "System Integration",
    description: "Seamlessly connecting third-party APIs, payment gateways, and authentication providers.",
    icon: Layers,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  }
]



export default function Home() {
  const scrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30" ref={scrollRef}>
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-[40%] right-[20%] w-[20%] h-[20%] rounded-full bg-blue-500/5 blur-[80px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20">
        <div className="container mx-auto px-4">
          <motion.div 
            style={{ opacity, scale }}
            className="flex flex-col lg:flex-row items-center justify-between gap-16"
          >
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-all cursor-default">
                  <Sparkles className="h-4 w-4 mr-2 inline animate-spin-slow" />
                  Building the Future of Web
                </Badge>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60"
              >
                Full-Stack <br />
                <span className="text-primary italic">Architect.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
              >
                I'm <span className="text-foreground font-semibold underline decoration-primary/50 underline-offset-4">Shubham Madane</span>, 
                a developer passionate about crafting high-performance, visually stunning digital solutions.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start"
              >
                <Button asChild size="lg" className="text-lg px-10 h-16 rounded-2xl shadow-2xl shadow-primary/25 hover:shadow-primary/40 transition-all group">
                  <Link href="/contact" className="gap-2">
                    Let's Connect <Rocket className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-10 h-16 rounded-2xl border-2 hover:bg-muted transition-all">
                  <Link href="/about" className="gap-2">
                    Who am I? <ChevronRight className="h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-muted-foreground"
              >
                {[
                  { icon: Github, href: "https://github.com/shubham5177", label: "GitHub" },
                  { icon: Mail, href: "mailto:madaneshubham853@gmail.com", label: "Email" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-primary transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="hidden sm:inline">{social.label}</span>
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right: Visual Element */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex-1 relative"
            >
              <div className="relative z-10">
                <div className="absolute -inset-10 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="relative group perspective-1000">
                  <motion.div
                    whileHover={{ rotateY: 10, rotateX: -5 }}
                    className="relative rounded-[2.5rem] overflow-hidden border-8 border-background shadow-[0_0_50px_rgba(0,0,0,0.3)] bg-muted"
                  >
                    <Image
                        src="https://image2url.com/r2/default/images/1771961889031-d293b0a4-7b03-46ca-a483-6e80b6da22d9.png"
                      alt="Shubham Madane"
                      width={500}
                      height={500}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-white text-sm font-medium">Pune, Maharashtra, India</p>
                    </div>
                  </motion.div>

                  {/* Floating Stats */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="absolute -bottom-8 -left-8 p-6 bg-background/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 hidden xl:block"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Terminal className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">20+</p>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Live Apps</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                    className="absolute -top-8 -right-8 p-6 bg-background/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 hidden xl:block"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">100%</p>
                        <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">Commitment</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mb-20">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary uppercase tracking-[0.2em] px-4">Expertise</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Technical Mastery.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I combine deep technical knowledge with aesthetic sense to build products that not only work perfectly but also look world-class.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="group p-10 h-full bg-muted/30 border-none hover:bg-primary transition-all duration-500 cursor-default shadow-none relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <service.icon className="h-32 w-32 group-hover:scale-125 transition-transform duration-700 text-white" />
                  </div>
                  <div className={`p-5 rounded-2xl w-fit mb-8 bg-background shadow-lg transition-transform group-hover:-translate-y-2 group-hover:shadow-primary/20 ${service.color}`}>
                    <service.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black mb-4 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground group-hover:text-white/80 leading-relaxed text-lg transition-colors">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-32 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.15),transparent_50%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1">
              <Badge variant="outline" className="mb-6 border-white/20 text-white/60 px-4">The Stack</Badge>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">My Digital <br /><span className="text-primary">Toolbox.</span></h2>
              <p className="text-xl text-white/60 mb-12 leading-relaxed">
                I believe in using the best tools for each unique problem. My stack is modern, robust, and chosen for maximum performance.
              </p>
              
              <div className="space-y-8">
                {[
                  { label: "Frontend Architecture", value: 98 },
                  { label: "Backend Scalability", value: 92 },
                  { label: "Cloud & DevOps", value: 85 }
                ].map((skill, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-sm font-black uppercase tracking-widest text-white/80">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-6 w-full">
              {[
                { icon: Code2, label: "React & Next.js", level: "Expert" },
                { icon: Database, label: "PostgreSQL & Prisma", level: "Advanced" },
                { icon: Zap, label: "Tailwind & Framer", level: "Expert" },
                { icon: GitBranch, label: "Git & CI/CD", level: "Advanced" },
                { icon: Terminal, label: "TypeScript", level: "Expert" },
                { icon: Globe, label: "SEO & Optimization", level: "Advanced" }
              ].map((tool, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group"
                >
                  <tool.icon className="h-10 w-10 mb-6 text-primary group-hover:scale-110 transition-transform" />
                  <h4 className="text-lg font-black mb-1">{tool.label}</h4>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-widest">{tool.level}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden p-16 md:p-28 bg-primary border-none shadow-[0_30px_100px_rgba(var(--primary),0.3)] text-primary-foreground text-center rounded-[3rem]">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
              
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                  Ready to Build <br /> Something Iconic?
                </h2>
                <p className="text-xl md:text-2xl opacity-90 mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
                  Let's collaborate to transform your vision into a digital masterpiece. High performance, zero compromise.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button asChild size="lg" variant="secondary" className="h-20 px-12 rounded-2xl text-xl font-black shadow-2xl group transition-all hover:scale-105">
                    <Link href="/contact" className="gap-3">
                      Start Your Project <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="h-20 px-12 rounded-2xl text-xl font-black border-4 bg-transparent text-primary-foreground hover:bg-white hover:text-primary transition-all">
                    <Link href="/signup">
                      Try Dashboard
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="p-2 bg-primary rounded-xl">
                  <Code2 className="h-8 w-8 text-primary-foreground" />
                </div>
                <span className="font-black text-3xl tracking-tighter">SM.</span>
              </Link>
              <p className="text-muted-foreground font-medium text-center md:text-left max-w-xs">
                Designing and developing premium digital experiences for forward-thinking brands.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-10 text-sm font-black uppercase tracking-widest text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link href="/signin" className="hover:text-primary transition-colors">Sign In</Link>
              <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-4">
                {[Github, Linkedin, Mail].map((Icon, i) => (
                  <Button key={i} variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary">
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
              <p className="text-sm font-bold text-muted-foreground">
                &copy; {new Date().getFullYear()} SHUBHAM MADANE. <br className="md:hidden" />
                ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
