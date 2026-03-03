"use client";

import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Footer() {
  return (
    <div className="relative bg-background w-full h-fit border-t">
      <div className="container px-4 py-6 flex flex-row items-start justify-center">
        <div className="flex-col space-y-2 mb-6 min-w-64">
          <a href="mailto:hello@infrastack.ai" className="hover:underline">
            hello@infrastack.ai <ArrowUpRight className="h-5 w-5 inline" />
          </a>
          <p className="text-muted-foreground">© 2025 InfraStack AI, Inc.</p>
        </div>
        <div className="flex-grow h-12 "></div>
        <div className="flex flex-row">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
