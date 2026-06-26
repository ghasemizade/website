import { Button } from "@/components/ui/button"
import { Send, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>
      <Header />

      <main className="container py-10 relative z-20">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t py-6 md:py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hosein Ghasemizade. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://t.me/HOSGZ" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Send className="h-5 w-5" />
                <span className="sr-only">Telegram</span>
              </Button>
            </Link>
            <Link href="https://github.com/ghasemizade" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/hosein-ghasemizade/" target="_blank" rel="noopener noreferrer">
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



