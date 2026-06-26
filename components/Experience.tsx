import { ExternalLink } from 'lucide-react'
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './ui/card'

export default function Experience() {
    return (
        <section id="experience" className="py-12 scroll-mt-20">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="space-y-8">
                <Card>
                    <CardHeader>
                        <div className="flex justify-between items-start">
                            <div>
                                <CardTitle>Full Stack Developer</CardTitle>
                                <CardDescription>StoneCode</CardDescription>
                            </div>
                            <Link
                                href="https://stone-code.vercel.app"
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
                                Designed and developed a full-stack application with a scalable and maintainable architecture.
                            </li>
                            <li>
                                Implemented secure authentication, API integrations, and efficient state management to deliver a seamless user experience.
                            </li>
                            <li>
                                Optimized application performance through code splitting, lazy loading, and reusable component design.
                            </li>
                            <li>
                                Built responsive, accessible interfaces with modern frontend technologies while integrating a robust backend and database.
                            </li>
                        </ul>

                        <div className="flex flex-wrap gap-2 mt-4">
                            <Badge variant="outline">React</Badge>
                            <Badge variant="outline">Next.js</Badge>
                            <Badge variant="outline">TypeScript</Badge>
                            <Badge variant="outline">Tailwind CSS</Badge>
                            <Badge variant="outline">Supabase</Badge>
                        </div>
                    </CardContent>
                </Card>

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
    )
}
