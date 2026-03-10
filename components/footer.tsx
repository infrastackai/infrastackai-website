"use client";

import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Footer() {
  return (
    <div className="relative bg-background w-full border-t">
      <div className="container px-6 md:px-8 py-10">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <a
              href="mailto:hello@infrastack.ai"
              className="text-lg font-medium hover:underline inline-flex items-center gap-1"
            >
              hello@infrastack.ai
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span>© 2026 Infrastack AI, Inc.</span>
              <span>·</span>
              <span>SOC 2 Type II Certified</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
