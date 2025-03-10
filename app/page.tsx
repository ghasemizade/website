import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Send, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"
import MobileNav from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Hosein Ghasemizade</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <Link href="#about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
              <Link href="#experience" className="text-sm font-medium hover:text-primary">
                Experience
              </Link>
              <Link href="#skills" className="text-sm font-medium hover:text-primary">
                Skills
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-primary">
                Contact
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <Link href="https://github.com/ghasemizade" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/hosein" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Hero Section */}
        <section className="py-12 md:py-20 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Front-End Developer</h1>
            <p className="text-xl text-muted-foreground">
              Building high-performance, scalable, and visually appealing web applications
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#experience">View my work</Link>
              </Button>
            </div>
          </div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="/avatar-2025.jpg"
              alt="Hosein Ghasemizade"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-lg">
                I'm a passionate front-end developer with expertise in building high-performance, scalable, and visually
                appealing web applications. My focus is on creating exceptional user experiences through clean,
                efficient code.
              </p>
              <p className="text-lg">
                With a strong foundation in React, Next.js, and TypeScript, I specialize in developing responsive
                interfaces that are both beautiful and functional. I'm committed to staying current with the latest web
                technologies and best practices.
              </p>
              <p className="text-lg">
                My problem-solving skills and attention to detail allow me to tackle complex challenges efficiently,
                while my collaborative approach ensures smooth integration with cross-functional teams.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">Available for remote work worldwide</p>
                </div>
                <div>
                  <h3 className="font-medium">Core Expertise</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>React.js</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium">Professional Focus</h3>
                  <p className="text-muted-foreground">
                    Performance optimization, responsive design, and user experience
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Frontend Developer</CardTitle>
                    <CardDescription>Eatsmarty</CardDescription>
                  </div>
                  <Link
                    href="https://eatsmarty.github.io/eatsmarty-website/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-primary"
                  >
                    Visit <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Spearheaded a UI revamp using Atomic Design, leading to a 30% faster page load speed and 25% lower
                    bounce rate.
                  </li>
                  <li>
                    Improved testing efficiency by 40% by refactoring E2E tests and leveraging Cypress with Storybook.
                  </li>
                  <li>
                    Built a mobile-friendly seat picker booking system, boosting mobile bookings by 40% and cutting
                    booking time by 50%.
                  </li>
                  <li>
                    Developed barcode scanning functionality, increasing user engagement by 35% and app usage by 20%.
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Cypress</Badge>
                  <Badge variant="outline">Storybook</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Freelance Frontend Developer</CardTitle>
                    <CardDescription>Awning.london</CardDescription>
                  </div>
                  <Link
                    href="https://awning.london"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-primary"
                  >
                    Visit <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Developed a high-performance website for a UK-based awning business, focusing on SEO optimization
                    and user-friendly UI.
                  </li>
                  <li>Utilized Next.js, React, and Tailwind CSS to create a modern, responsive design.</li>
                  <li>Enhanced site performance and visibility, increasing organic traffic and user retention.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Next.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">SEO</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Frontend Developer</CardTitle>
                    <CardDescription>Jibres</CardDescription>
                  </div>
                  <Link
                    href="https://jibres.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm hover:text-primary"
                  >
                    Visit <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Optimized responsive design across devices, increasing user engagement by 25%.</li>
                  <li>Implemented Tailwind CSS, improving styling efficiency and reducing development time by 20%.</li>
                  <li>Diagnosed and resolved front-end issues, reducing user-reported bugs by 30%.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Responsive Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Internship</CardTitle>
                    <CardDescription>Ermile</CardDescription>
                  </div>
                  <Link
                      href="https://ermile.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm hover:text-primary"
                  >
                    Visit <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Gained hands-on experience with Linux, HTML, CSS, JavaScript, and ICDL.</li>
                  <li>
                    Assisted in front-end development tasks and debugging, enhancing understanding of web technologies.
                  </li>
                  <li>Worked in a collaborative environment, following best practices in software development.</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">Linux</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
          <Tabs defaultValue="languages" className="w-full">
            <TabsList className="flex justify-between items-center h-full flex-col mb-6 md:flex-row">
              <TabsTrigger value="languages">Languages & Frameworks</TabsTrigger>
              <TabsTrigger value="styling">Styling & UI</TabsTrigger>
              <TabsTrigger value="testing">Testing & DevOps</TabsTrigger>
              <TabsTrigger value="workflow">Development & Workflow</TabsTrigger>
            </TabsList>
            <TabsContent value="languages" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard name="JavaScript" level="Expert" />
                <SkillCard name="TypeScript" level="Expert" />
                <SkillCard name="React.js" level="Expert" />
                <SkillCard name="Next.js" level="Expert" />
                <SkillCard name="Express.js" level="Intermediate" />
                <SkillCard name="HTML5" level="Expert" />
                <SkillCard name="CSS3" level="Expert" />
              </div>
            </TabsContent>
            <TabsContent value="styling" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard name="Tailwind CSS" level="Expert" />
                <SkillCard name="Storybook" level="Advanced" />
                <SkillCard name="CSS Modules" level="Advanced" />
                <SkillCard name="Styled Components" level="Intermediate" />
                <SkillCard name="Material UI" level="Intermediate" />
                <SkillCard name="Framer Motion" level="Intermediate" />
              </div>
            </TabsContent>
            <TabsContent value="testing" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard name="Cypress" level="Advanced" />
                <SkillCard name="Jest" level="Intermediate" />
                <SkillCard name="Docker" level="Intermediate" />
                <SkillCard name="GitHub Actions" level="Intermediate" />
                <SkillCard name="Vercel" level="Advanced" />
              </div>
            </TabsContent>
            <TabsContent value="workflow" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <SkillCard name="REST API" level="Expert" />
                <SkillCard name="Scrum" level="Advanced" />
                <SkillCard name="Jira" level="Advanced" />
                <SkillCard name="CI/CD" level="Intermediate" />
                <SkillCard name="Git" level="Expert" />
                <SkillCard name="Figma" level="Intermediate" />
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out for collaboration opportunities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:ghasemizade.hosein@gmail.com" className="hover:text-primary">
                    ghasemizade.hosein@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <a
                    href="https://www.linkedin.com/in/hosein-ghasemizade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    linkedin.com/in/hosein-ghasemizade
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <a
                    href="https://github.com/ghasemizade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary"
                  >
                    github.com/ghasemizade
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Let's Work Together</CardTitle>
                <CardDescription>
                  I'm currently available for freelance projects and full-time opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  I'm passionate about creating exceptional web experiences and am always looking for new challenges.
                  Whether you need a complete website, a specific feature, or want to discuss potential collaboration,
                  I'd love to hear from you.
                </p>
                <Button asChild className="w-full">
                  <a href="mailto:ghasemizade.hosein@gmail.com">Send me an email</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hosein Ghasemizade. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
          <Link href="https://t.me/HoseinGhasemizade" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Send className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </Button>
            </Link>
            <Link href="https://github.com/hosein" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/hosein" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:ghasemizade.hosein@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function SkillCard({ name, level }: { name: string; level: string }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="text-center">
          <h3 className="font-medium">{name}</h3>
          <p className="text-xs text-muted-foreground mt-1">{level}</p>
        </div>
      </CardContent>
    </Card>
  )
}

