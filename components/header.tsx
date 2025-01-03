'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Header() {
    const { theme, systemTheme } = useTheme()

    const currentTheme = theme === "system" ? systemTheme : theme

    const [mounted, setMounted] = useState(false)
    const [scrolled, setScrolled] = useState(false)


    useEffect(() => {
        setMounted(true)

        const handleScroll = () => {
            // Check if page is scrolled
            const offset = window.scrollY
            if (offset > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll)

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    if (!mounted) return null

    return (
        <div className={cn(scrolled && currentTheme === 'dark' ? "border border-zinc-900 shadow-sm bg-background" : "border border-transparent", currentTheme === 'light' && !scrolled && "bg-zinc-50", currentTheme === 'light' && scrolled && "bg-background", "fixed flex right-8 h-16 p-2 pl-4 pr-4 left-8 top-6 items-center rounded-xl justify-between z-[50]", "transition-all duration-500 ease-in-out")}>
            <div className="flex items-center">
                {currentTheme === 'light' && <Image src="/logo-violet.svg" alt="InfraStack Logo" width={40} height={40} className="h-10" />}
                {currentTheme === 'dark' && <Image src="/logo-dark-theme.svg" alt="InfraStack Logo" width={40} height={40} className="h-10" />}
                <p className="text-3xl font-bold ml-1 font-[family-name:var(--font-geist-sans)]">InfraStack</p>
            </div>
            <div className="w-12"></div>
            <div className="flex-grow flex space-x-6 font-[family-name:var(--font-geist-mono)]">
                {/* <p>FEATURES</p> */}
                {/* <a href="http://localhost:3004/docs" target="_blank">DOCS</a> */}
                {/* <a href="/blog" target="_blank">BLOG</a> */}
                <a href="https://infrastackai.notion.site/Careers-at-InfraStack-AI-2f07b3b32b0740c9b16aafa09d7bd864" target="_blank">CAREERS</a>
                {/* <p>PRICING</p> */}
                {/* <p>CAREERS</p> */}
                {/* <p>ABOUT US</p> */}
            </div>
            {false &&<div>
                <Button variant="outline" className="h-12 bg-violet-500 hover:bg-violet-500/90 text-white">
                    SIGN IN
                    {/* <ChevronRight className="h-6 w-6" /> */}
                </Button>
            </div>}
        </div>
    )
}