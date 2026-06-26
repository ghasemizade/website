import type React from "react"
// @ts-ignore: CSS module type declarations are not available in this environment
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { GoogleTagManager } from '@next/third-parties/google'
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hosein Ghasemizade | Front-End Developer",
  description:
    "Professional portfolio of Hosein Ghasemizade, a Front-End Developer specializing in React, Next.js, Tailwind CSS, and TypeScript.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId="G-TDG3HNFW9Y" />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MouseMoveEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}