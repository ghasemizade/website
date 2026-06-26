import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from 'react'
import { Card, CardContent } from "./ui/card";

export default function Skills() {
    return (
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