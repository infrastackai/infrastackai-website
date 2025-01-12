"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const MENU_LINKS = [
  {
    label: "Careers",
    href: "https://infrastackai.notion.site/Careers-at-InfraStack-AI-2f07b3b32b0740c9b16aafa09d7bd864",
    target: "_blank",
  },
];

export default function Header() {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {/* Desktop Header */}
      <div
        className={cn(
          scrolled && currentTheme === "dark"
            ? "border border-zinc-900 shadow-sm bg-background"
            : "border border-transparent",
          currentTheme === "light" && !scrolled && "bg-zinc-50",
          currentTheme === "light" && scrolled && "bg-background",
          "fixed hidden md:flex right-8 h-16 p-2 pl-4 pr-4 left-8 top-6 items-center rounded-xl justify-between z-[50]",
          "transition-all duration-500 ease-in-out"
        )}
      >
        <Link href="/" className="flex items-center">
          <Image
            src={
              currentTheme === "light"
                ? "/logo-violet.svg"
                : "/logo-dark-theme.svg"
            }
            alt="InfraStack Logo"
            width={40}
            height={40}
            className="h-10"
          />
          <p className="text-3xl font-bold ml-1 font-[family-name:var(--font-geist-sans)]">
            InfraStack
          </p>
        </Link>
        <div className="w-12"></div>
        <div className="flex-grow flex space-x-6 font-[family-name:var(--font-geist-mono)]">
          <Link
            href="https://infrastackai.notion.site/Careers-at-InfraStack-AI-2f07b3b32b0740c9b16aafa09d7bd864"
            target="_blank"
          >
            CAREERS
          </Link>
        </div>
      </div>

      {/* Mobile Header - Always visible */}
      <div
        className={cn(
          scrolled && currentTheme === "dark"
            ? "border-b border-zinc-900 shadow-sm bg-background"
            : "border-b border-transparent",
          currentTheme === "light" && !scrolled && "bg-zinc-50",
          currentTheme === "light" && scrolled && "bg-background",
          "fixed md:hidden right-0 left-0 top-0 h-14 px-4 flex items-center justify-between z-[60]",
          "transition-all duration-500 ease-in-out"
        )}
      >
        <Link href="/" className="flex items-center">
          <Image
            src={
              currentTheme === "light"
                ? "/logo-violet.svg"
                : "/logo-dark-theme.svg"
            }
            alt="InfraStack Logo"
            width={32}
            height={32}
            className="h-8"
          />
          <p className="text-2xl font-bold ml-2 font-[family-name:var(--font-geist-sans)]">
            InfraStack
          </p>
        </Link>
        <button
          className="relative h-8 w-8 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="flex flex-col justify-center items-center">
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-all duration-300",
                mobileMenuOpen
                  ? "rotate-45 translate-y-[0.15rem]"
                  : "-translate-y-1"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-all duration-300",
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-6 bg-current transition-all duration-300",
                mobileMenuOpen
                  ? "-rotate-45 -translate-y-[0.15rem]"
                  : "translate-y-1"
              )}
            />
          </div>
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden bg-black transition-transform duration-300 ease-in-out pt-20 px-4",
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <ul className="flex flex-col space-y-6">
          {MENU_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target={link.target}
                className="text-center font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
