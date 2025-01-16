"use client";

import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Footer() {
  return (
    <div className="relative bg-background w-full h-fit border-t">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-start gap-8 md:gap-24 justify-center">
        <div className="flex-col space-y-2 mb-6 md:mb-0 hidden md:flex min-w-64">
          <a href="mailto:hello@infrastack.ai" className="hover:underline">
            hello@infrastack.ai <ArrowUpRight className="h-5 w-5 inline" />
          </a>
          <p className="text-muted-foreground">© 2025 InfraStack AI, Inc.</p>
        </div>

        <div className="flex-grow grid grid-cols-3 gap-8 w-full">
          <div className="flex flex-col space-y-2 text-muted-foreground">
            <a className="hover:underline hover:text-primary">Pricing</a>
            <a className="hover:underline hover:text-primary">Docs</a>
            <a className="hover:underline hover:text-primary">Blog</a>
          </div>
          <div className="flex flex-col space-y-2 text-muted-foreground">
            <a className="hover:underline hover:text-primary">Company</a>
            <a href="/careers" className="hover:underline hover:text-primary">
              Careers
            </a>
            <a className="hover:underline hover:text-primary">Security</a>
            <a className="hover:underline hover:text-primary">Privacy</a>
            <a className="hover:underline hover:text-primary">Terms</a>
          </div>
          <div className="flex flex-col space-y-2 text-muted-foreground">
            <a className="hover:underline hover:text-primary">Linkedin</a>
            <a className="hover:underline hover:text-primary">Twitter</a>
            <a className="hover:underline hover:text-primary">Github</a>
            <a className="hover:underline hover:text-primary">Media Kit</a>
          </div>
        </div>

        <div className="flex flex-row justify-between mt-6 md:mt-0 w-full md:w-auto">
          <div className="flex flex-col space-y-2 mb-6 md:mb-0 block md:hidden">
            <a href="mailto:hello@infrastack.ai" className="hover:underline">
              hello@infrastack.ai <ArrowUpRight className="h-5 w-5 inline" />
            </a>
            <p className="text-muted-foreground">© 2025 InfraStack AI, Inc.</p>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
