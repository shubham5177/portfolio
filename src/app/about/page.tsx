"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Download,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Zap,
  Globe,
  Database,
  Terminal,
  Cpu
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-background selection:bg-primary/30">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/5 blur-[120px]"></div>
      </div>

      <main className="container mx-auto px-4">
        {/* Profile Section */}
        <section className="relative mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1 relative"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-[2.5rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                <Card className="relative overflow-hidden rounded-[2.5rem] border-8 border-background shadow-2xl bg-muted aspect-square max-w-md mx-auto lg:mx-0">
                  <Image
                    src="https://image2url.com/images/1764330318999-c357397a-189b-442f-b6e8-30b041297dfc.jpg"
                    alt="Shubham Madane"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </Card>
                
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 p-4 bg-background border border-primary/20 rounded-2xl shadow-xl hidden md:flex items-center gap-3"
                >
                  <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-sm font-bold uppercase tracking-wider">Ready for Hire</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-[1.5] text-center lg:text-left"
            >
              <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20">
                <Sparkles className="h-4 w-4 mr-2 inline" />
                The Person Behind the Code
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                Crafting Digital <br /> Excellence from <br /><span className="text-primary italic">Pune.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-10 leading-relaxed max-w-2xl">
                I'm <span className="text-foreground font-bold">Shubham Madane</span>, a student at <span className="underline decoration-primary decoration-2 underline-offset-4 font-semibold text-foreground">Savitribai Phule Pune University</span>. 
                I don't just write code; I build solutions that bridge the gap between imagination and reality.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="h-16 px-8 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 group">
                  Download CV <Download className="h-5 w-5 ml-2 group-hover:translate-y-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="h-16 px-8 rounded-2xl text-lg font-bold border-2" asChild>
                  <Link href="/contact">
                    Work with Me <ChevronRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="flex gap-8 justify-center lg:justify-start">
                {[
                  { icon: Github, label: "20+ Repos", desc: "Open Source" },
                  { icon: Zap, label: "99% Score", desc: "Optimization" },
                  { icon: Heart, label: "UI/UX", desc: "Design Driven" }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-black text-sm">{stat.label}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education & Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary rounded-2xl shadow-lg shadow-primary/20">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-black tracking-tight">Academic Journey</h2>
            </div>
            
            <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-primary before:to-transparent">
              <div className="relative">
                <div className="absolute -left-[37px] top-2 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
                <Card className="p-8 bg-muted/30 border-none hover:bg-muted/50 transition-all cursor-default">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black mb-1">Bachelor of Engineering</h3>
                      <p className="text-primary font-bold">Savitribai Phule Pune University (SPPU)</p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold">2023 - Present</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Focusing on Computer Science with an emphasis on Advanced Web Architecture and Software Engineering. 
                    Actively participating in tech symposiums and hackathons.
                  </p>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-emerald-500 rounded-2xl shadow-lg shadow-emerald-500/20">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-4xl font-black tracking-tight">Professional Path</h2>
            </div>
            
            <div className="relative pl-8 space-y-12 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-gradient-to-b before:from-emerald-500 before:to-transparent">
              <div className="relative">
                <div className="absolute -left-[37px] top-2 h-4 w-4 rounded-full bg-emerald-500 border-4 border-background"></div>
                <Card className="p-8 bg-muted/30 border-none hover:bg-muted/50 transition-all cursor-default">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-black mb-1">Full-Stack Developer</h3>
                      <p className="text-emerald-500 font-bold">Independent Consultant</p>
                    </div>
                    <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-500 border-none font-bold">Ongoing</Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Helping startups and businesses build modern web applications using the Next.js ecosystem. 
                    Delivering high-performance solutions with clean, maintainable codebases.
                  </p>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Stack Section */}
        <section className="py-24 mb-20">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary uppercase tracking-[0.2em] px-4">Expertise</Badge>
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">My Tech <span className="text-primary italic">DNA.</span></h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I specialize in the modern web ecosystem, focusing on performance, scalability, and developer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Frontend", icon: Globe, skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"], color: "text-blue-500" },
              { title: "Backend", icon: Database, skills: ["Node.js", "Express", "Prisma", "PostgreSQL"], color: "text-emerald-500" },
              { title: "Infrastructure", icon: Cpu, skills: ["Docker", "Vercel", "AWS", "CI/CD"], color: "text-purple-500" },
              { title: "Tools", icon: Terminal, skills: ["Git", "Figma", "Linux", "Postman"], color: "text-orange-500" }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="p-10 h-full border-none bg-muted/30 hover:bg-muted/50 transition-all text-center group">
                  <div className={`p-5 rounded-3xl w-fit mx-auto mb-8 bg-background shadow-xl group-hover:-translate-y-2 transition-transform ${cat.color}`}>
                    <cat.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-black mb-6">{cat.title}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {cat.skills.map((skill, j) => (
                      <Badge key={j} variant="outline" className="px-3 py-1 bg-background border-none shadow-sm font-bold text-xs uppercase tracking-widest">{skill}</Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-[4rem] p-16 md:p-32 bg-black text-white text-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_70%)]"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">
              Ready to create something <br /> <span className="text-primary italic underline underline-offset-8">Extraordinary?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 mb-14 max-w-2xl mx-auto font-medium">
              I'm always open to new challenges and collaborations. Whether you have a project in mind or just want to talk tech, my inbox is always open.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="h-20 px-12 rounded-2xl text-xl font-black bg-primary text-white hover:bg-primary/90 transition-all hover:scale-105">
                <Link href="/contact">Let's Connect</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-20 px-12 rounded-2xl text-xl font-black border-4 border-white/20 hover:bg-white hover:text-black transition-all">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer (Simplified) */}
      <footer className="py-20 text-center">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
          &copy; {new Date().getFullYear()} SHUBHAM MADANE • DESIGNED FOR THE FUTURE
        </p>
      </footer>
    </div>
  )
}
