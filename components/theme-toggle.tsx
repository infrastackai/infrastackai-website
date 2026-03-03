"use client"

import * as React from "react"
import { Moon, Laptop, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"


export function ThemeToggle() {
    const { setTheme, theme, systemTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="border rounded-2xl h-10 flex items-center w-fit p-2 pl-3 pr-3 space-x-2 text-muted-foreground">
            <div onClick={() => setTheme("system")} className={cn(theme === "system" ? "text-indigo-600 dark:text-indigo-500" : "hover:text-primary" , "cursor-pointer")}>
                <Laptop className="h-[1.2rem] w-[1.2rem]" />
            </div>
            <div onClick={() => setTheme("light")} className={cn(theme === "light" ? "text-indigo-600 dark:text-indigo-500" : "hover:text-primary" , "cursor-pointer")}>
                <Sun className="h-[1.2rem] w-[1.2rem]" />
            </div>
            <div onClick={() => setTheme("dark")} className={cn(theme === "dark" ? "text-indigo-600 dark:text-indigo-500" : "hover:text-primary", "cursor-pointer")}>
                <Moon className="h-[1.2rem] w-[1.2rem]" />
            </div>
        </div>
    )
}