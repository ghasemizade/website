import { Button } from "@/components/ui/button"
import { Send, Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import MobileNav from "./mobile-nav"
import ThemeToggle from "./theme-toggle"
import React from 'react'

export default function Header() {
    return (
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
                        <Link href="https://resume.ghasemizade.com" target="_blank" className="text-sm font-medium hover:text-primary">
                            Resume
                        </Link>
                    </nav>
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <Link href="/github" target="_blank" rel="noopener noreferrer">
                            <Button variant="ghost" size="icon">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Button>
                        </Link>
                        <Link href="linkedin" target="_blank" rel="noopener noreferrer">
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
    )
}
