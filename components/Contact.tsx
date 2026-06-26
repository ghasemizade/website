import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Mail, Linkedin, Github } from 'lucide-react'
import { Button } from './ui/button'

export default function Contact() {
    return (
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
    )
}
