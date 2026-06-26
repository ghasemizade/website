import Link from "next/link"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="py-12 md:py-20 flex flex-col-reverse md:flex-row items-center gap-8">
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
            <div className="flex-1 flex justify-center items-center relative">
                <div className="absolute w-72 h-72 rounded-full blur-3xl bg-blue-500 animate-pulse"></div>
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
                    <Image
                        src="/profile_photov3.png"
                        alt="Hosein Ghasemizade"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </section>
    )
}
