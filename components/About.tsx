import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import React from 'react'
import { Button } from './ui/button'
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'

export default function About() {
    return (
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
                        <div>
                            <Button asChild>
                                <Link href="https://resume.ghasemizade.com" target="_blank">Get in resume</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
