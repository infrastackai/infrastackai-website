'use client'

import { ArrowUp, ArrowUpRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Footer() {
    return (
        <div className="relative bg-background  w-full h-fit border-t p-6  pb-20 flex space-x-20">
            <div className="flex flex-col space-y-2">
                <a href="mailto:hello@infrastack.ai" className="hover:underline">
                    hello@infrastack.ai <ArrowUpRight className="h-5 w-5 inline" />
                </a>
                <p className="text-muted-foreground">
                    © 2025 InfraStack AI, Inc.
                </p>
            </div>
            {true && <div className="flex-grow"></div>}

            {false &&<div className="flex-grow flex flex-row space-x-36">
                <div className="flex flex-col space-y-2 text-muted-foreground">
                    <a>Pricing</a>
                    <a>Docs</a>
                    <a>Blog</a>
                </div>
                <div className="flex flex-col space-y-2 text-muted-foreground">
                    <a>Company</a>
                    <a href="/careers" className="hover:underline hover:text-primary">Careers</a>
                    <a>Security</a>
                    <a>Privacy</a>
                    <a>Terms</a>
                </div>
                <div className="flex flex-col space-y-2 text-muted-foreground">
                    <a>Linkedin</a>
                    <a>Twitter</a>
                    <a>Github</a>
                    <a>Media Kit</a>
                </div>
            </div>}
            <ThemeToggle />
        </div>
    )
}