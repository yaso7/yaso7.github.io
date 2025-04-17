"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Add these imports at the top of the file
import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedList, AnimatedListItem } from "@/components/animated-list"
import { AnimatedText } from "@/components/animated-text"

// Add this import at the top of the file
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-6 w-6" />
            <span>DevPortfolio</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <Button asChild>
            <Link href="#contact">Let's Talk</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <AnimatedText delay={0.1}>
                <Badge className="text-sm" variant="outline">
                  Available for hire
                </Badge>
              </AnimatedText>
              <AnimatedText delay={0.2}>
                <h1 className="text-4xl md:text-6xl font-bold">
                  Hi, I'm <span className="text-primary">Alex</span> <br />
                  Full Stack Developer
                </h1>
              </AnimatedText>
              <AnimatedText delay={0.3}>
                <p className="text-xl text-muted-foreground">
                  I build accessible, user-friendly web applications that solve real-world problems.
                </p>
              </AnimatedText>
              <AnimatedText delay={0.4}>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="#projects">
                      View Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </AnimatedText>
            </div>
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Developer portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-muted/40 py-16">
          <div className="container space-y-6">
            <AnimatedSection>
              <div className="space-y-2 text-center">
                <Badge>About Me</Badge>
                <h2 className="text-3xl font-bold">My Background</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  With over 5 years of experience in web development, I specialize in creating responsive, accessible,
                  and performant web applications.
                </p>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <AnimatedSection delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">My Journey</h3>
                  <p className="text-muted-foreground">
                    I started my journey as a self-taught developer, learning HTML, CSS, and JavaScript. Over the years,
                    I've expanded my skills to include modern frameworks and technologies like React, Next.js, Node.js,
                    and more.
                  </p>
                  <p className="text-muted-foreground">
                    I've worked with startups and established companies, helping them build and scale their web
                    applications. My focus is always on creating intuitive user experiences while maintaining clean,
                    efficient code.
                  </p>
                  <div className="pt-4">
                    <Button variant="outline" asChild>
                      <Link href="/resume.pdf" target="_blank">
                        Download Resume
                      </Link>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Education & Experience</h3>
                  <div className="space-y-4">
                    <div className="border-l-2 border-primary pl-4 space-y-1">
                      <h4 className="font-medium">Senior Frontend Developer</h4>
                      <p className="text-sm text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4 space-y-1">
                      <h4 className="font-medium">Full Stack Developer</h4>
                      <p className="text-sm text-muted-foreground">WebSolutions • 2019 - 2021</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4 space-y-1">
                      <h4 className="font-medium">Junior Developer</h4>
                      <p className="text-sm text-muted-foreground">StartupXYZ • 2018 - 2019</p>
                    </div>
                    <div className="border-l-2 border-primary pl-4 space-y-1">
                      <h4 className="font-medium">B.S. Computer Science</h4>
                      <p className="text-sm text-muted-foreground">Tech University • 2014 - 2018</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 container">
          <div className="space-y-6">
            <AnimatedSection>
              <div className="space-y-2 text-center">
                <Badge>Skills</Badge>
                <h2 className="text-3xl font-bold">My Expertise</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  I've worked with a variety of technologies and frameworks to create modern web applications.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedList className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              <AnimatedListItem>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mx-auto mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Frontend</h3>
                    <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, Tailwind CSS</p>
                  </CardContent>
                </Card>
              </AnimatedListItem>
              <AnimatedListItem>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mx-auto mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Backend</h3>
                    <p className="text-sm text-muted-foreground">Node.js, Express, PostgreSQL, MongoDB</p>
                  </CardContent>
                </Card>
              </AnimatedListItem>
              <AnimatedListItem>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mx-auto mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">DevOps</h3>
                    <p className="text-sm text-muted-foreground">Docker, CI/CD, AWS, Vercel</p>
                  </CardContent>
                </Card>
              </AnimatedListItem>
              <AnimatedListItem>
                <Card className="text-center">
                  <CardContent className="pt-6">
                    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-primary/10 mx-auto mb-4">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">Tools</h3>
                    <p className="text-sm text-muted-foreground">Git, GitHub, VS Code, Figma</p>
                  </CardContent>
                </Card>
              </AnimatedListItem>
            </AnimatedList>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-muted/40">
          <div className="container space-y-6">
            <AnimatedSection>
              <div className="space-y-2 text-center">
                <Badge>Projects</Badge>
                <h2 className="text-3xl font-bold">My Work</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Here are some of the projects I've worked on. Each project showcases different skills and
                  technologies.
                </p>
              </div>
            </AnimatedSection>
            <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="space-y-6">
                <AnimatedList className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
                  {projects.map((project, index) => (
                    <AnimatedListItem key={index}>
                      <ProjectCard project={project} />
                    </AnimatedListItem>
                  ))}
                </AnimatedList>
              </TabsContent>
              <TabsContent value="frontend" className="space-y-6">
                <AnimatedList className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
                  {projects
                    .filter((p) => p.category === "frontend")
                    .map((project, index) => (
                      <AnimatedListItem key={index}>
                        <ProjectCard project={project} />
                      </AnimatedListItem>
                    ))}
                </AnimatedList>
              </TabsContent>
              <TabsContent value="fullstack" className="space-y-6">
                <AnimatedList className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
                  {projects
                    .filter((p) => p.category === "fullstack")
                    .map((project, index) => (
                      <AnimatedListItem key={index}>
                        <ProjectCard project={project} />
                      </AnimatedListItem>
                    ))}
                </AnimatedList>
              </TabsContent>
              <TabsContent value="mobile" className="space-y-6">
                <AnimatedList className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
                  {projects
                    .filter((p) => p.category === "mobile")
                    .map((project, index) => (
                      <AnimatedListItem key={index}>
                        <ProjectCard project={project} />
                      </AnimatedListItem>
                    ))}
                </AnimatedList>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 container">
          <div className="space-y-6">
            <AnimatedSection>
              <div className="space-y-2 text-center">
                <Badge>Contact</Badge>
                <h2 className="text-3xl font-bold">Get In Touch</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
                </p>
              </div>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 pt-8 max-w-4xl mx-auto">
              <AnimatedSection delay={0.2}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Contact Information</h3>
                  <p className="text-muted-foreground">
                    I'm currently available for freelance work and full-time positions. If you have a project that needs
                    some creative touch, I'd love to hear about it!
                  </p>
                  <div className="space-y-3 pt-4">
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <span>alex@example.com</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/alexdev
                      </a>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <Github className="h-5 w-5 text-primary" />
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/alexdev
                      </a>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <Twitter className="h-5 w-5 text-primary" />
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        @alexdev
                      </a>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Send Me a Message</h3>
                  <form className="space-y-4">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Your message"
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 font-semibold">
            <Code className="h-5 w-5" />
            <span>DevPortfolio</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex Developer. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Add this component right before the closing </div> tag at the end of the component */}
      <ScrollToTop />
    </div>
  )
}

// Project data
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment integration and admin dashboard.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website for a photographer showcasing their work.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "GSAP", "Styled Components"],
    demoUrl: "#",
    githubUrl: "#",
    category: "frontend",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Firebase", "Material UI"],
    demoUrl: "#",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    title: "Weather App",
    description: "A mobile app that provides real-time weather forecasts based on location.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React Native", "OpenWeather API"],
    demoUrl: "#",
    githubUrl: "#",
    category: "mobile",
  },
  {
    title: "Blog Platform",
    description: "A content management system for creating and managing blog posts.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
    category: "fullstack",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile application for tracking workouts and fitness progress.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React Native", "Redux", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
    category: "mobile",
  },
]

// Project Card Component
function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-1" /> Code
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
