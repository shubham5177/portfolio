"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { toast } from "sonner"
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Github, 
  Linkedin, 
  MapPin, 
  Loader2,
  Sparkles,
  ArrowRight,
  Globe,
  Rocket,
  CheckCircle2
} from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error("Failed to send message")

      toast.success("Message sent successfully!")
      setIsSuccess(true)
      reset()
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-background selection:bg-primary/30 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <main className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm bg-primary/10 text-primary border-primary/20">
              <Sparkles className="h-4 w-4 mr-2 inline" />
              Available for New Opportunities
            </Badge>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
              Let's Build the <br /><span className="text-primary italic">Extraordinary.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Whether you have a groundbreaking idea or need technical expertise, 
              I'm here to transform your vision into a world-class digital product.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-black tracking-tight mb-8">Direct Channels</h2>
                
                {[
                  { 
                    icon: Mail, 
                    label: "Email", 
                    value: "madaneshubham853@gmail.com", 
                    href: "mailto:madaneshubham853@gmail.com",
                    color: "bg-blue-500/10 text-blue-500"
                  },
                  { 
                    icon: MapPin, 
                    label: "Location", 
                    value: "Pune, Maharashtra, India", 
                    href: "#",
                    color: "bg-emerald-500/10 text-emerald-500"
                  },
                  { 
                    icon: Globe, 
                    label: "Availability", 
                    value: "Freelance & Full-time", 
                    href: "#",
                    color: "bg-purple-500/10 text-purple-500"
                  }
                ].map((item, i) => (
                  <Card key={i} className="p-6 bg-muted/30 border-none hover:bg-muted/50 transition-all cursor-default group">
                    <div className="flex items-center gap-5">
                      <div className={`p-4 rounded-2xl ${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                        <a href={item.href} className="text-lg font-bold hover:text-primary transition-colors">{item.value}</a>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-black mb-6 tracking-tight">Social Connection</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/shubham5177" },
                    { icon: Linkedin, href: "https://linkedin.com" },
                    { icon: MessageSquare, href: "#" }
                  ].map((social, i) => (
                    <Button key={i} variant="outline" size="icon" asChild className="h-14 w-14 rounded-2xl border-2 hover:bg-primary hover:text-white transition-all">
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-6 w-6" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <Card className="p-10 md:p-12 shadow-2xl border-none bg-muted/30 backdrop-blur-sm rounded-[2.5rem] relative overflow-hidden">
                <AnimatePresence>
                  {isSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="absolute inset-0 z-20 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center"
                    >
                      <div className="h-20 w-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                        <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                      </div>
                      <h3 className="text-3xl font-black mb-4">Message Received!</h3>
                      <p className="text-lg text-muted-foreground mb-8">
                        Thank you for reaching out. I'll get back to you as soon as possible.
                      </p>
                      <Button onClick={() => setIsSuccess(false)} variant="outline" className="rounded-xl h-12 px-8 font-bold">
                        Send Another Message
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                      <Input 
                        placeholder="John Doe" 
                        {...register("name")}
                        className={`h-14 rounded-xl bg-background border-none focus-visible:ring-2 focus-visible:ring-primary/50 text-lg font-medium shadow-sm transition-all ${errors.name ? "ring-2 ring-destructive/50" : ""}`}
                      />
                      {errors.name && <p className="text-xs text-destructive font-bold ml-1">{errors.name.message}</p>}
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Your Email</label>
                      <Input 
                        type="email" 
                        placeholder="john@example.com" 
                        {...register("email")}
                        className={`h-14 rounded-xl bg-background border-none focus-visible:ring-2 focus-visible:ring-primary/50 text-lg font-medium shadow-sm transition-all ${errors.email ? "ring-2 ring-destructive/50" : ""}`}
                      />
                      {errors.email && <p className="text-xs text-destructive font-bold ml-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Project Subject</label>
                    <Input 
                      placeholder="E-commerce Platform Redesign" 
                      {...register("subject")}
                      className={`h-14 rounded-xl bg-background border-none focus-visible:ring-2 focus-visible:ring-primary/50 text-lg font-medium shadow-sm transition-all ${errors.subject ? "ring-2 ring-destructive/50" : ""}`}
                    />
                    {errors.subject && <p className="text-xs text-destructive font-bold ml-1">{errors.subject.message}</p>}
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Project Details</label>
                    <Textarea 
                      placeholder="Tell me about your vision, goals, and any specific requirements..." 
                      className={`min-h-[180px] rounded-2xl bg-background border-none focus-visible:ring-2 focus-visible:ring-primary/50 text-lg font-medium p-5 shadow-sm transition-all resize-none ${errors.message ? "ring-2 ring-destructive/50" : ""}`}
                      {...register("message")}
                    />
                    {errors.message && <p className="text-xs text-destructive font-bold ml-1">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full gap-3 text-xl h-18 rounded-2xl font-black shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all group" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-6 w-6 animate-spin" />
                        Initiating Transmission...
                      </>
                    ) : (
                      <>
                        Launch Message <Rocket className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer (Simplified) */}
      <footer className="py-20 text-center relative z-10">
        <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
          &copy; {new Date().getFullYear()} SHUBHAM MADANE • ENVISIONING THE FUTURE
        </p>
      </footer>
    </div>
  )
}
