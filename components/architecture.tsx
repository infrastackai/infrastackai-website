"use client";

import { motion } from "framer-motion";
import { Globe, AudioLines, Mail, Search, FileText, Database, Shield, ShieldCheck, Lock, KeyRound, Code } from "lucide-react";
import { SiAnthropic, SiOpenai } from "react-icons/si";
import { FaTerminal } from "react-icons/fa";

const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const frameworks = [
  { name: "Claude Code", icon: SiAnthropic },
  { name: "Codex", icon: SiOpenai },
  { name: "OpenCode", icon: FaTerminal },
];

const skills = [
  { name: "Code", icon: Code },
  { name: "Browser", icon: Globe },
  { name: "Voice", icon: AudioLines },
  { name: "Email", icon: Mail },
  { name: "Search", icon: Search },
  { name: "Documents", icon: FileText },
  { name: "Database", icon: Database },
];

const environment = [
  { name: "SOC 2 Type II", icon: ShieldCheck },
  { name: "Sandboxed", icon: Shield },
  { name: "Encrypted", icon: Lock },
  { name: "Role-Based Access", icon: KeyRound },
];

export default function Architecture() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        staggerChildren: 0.04,
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      variants={variants}
      viewport={{ once: true }}
      className="p-4 flex flex-col space-y-3 sm:space-y-4 mb-16 md:mb-36 items-center"
    >
      <div className="flex flex-col space-y-4 items-center">
        <h3 className="text-center font-semibold trackin text-4xl md:text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          How It Works
        </h3>
        <p className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)] md:w-[60%] text-center">
          The complete stack for building, deploying, and running autonomous agents.
        </p>
      </div>

      <div></div>

      <div className="flex flex-col gap-12 max-w-[900px] w-full items-center">
        {/* Frameworks */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)]">
            Agents
          </span>
          <div className="grid grid-cols-3 gap-8 md:gap-12">
            {frameworks.map((fw) => (
              <div key={fw.name} className="flex flex-col items-center gap-2">
                <fw.icon className="h-10 w-10 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-[family-name:var(--font-geist-mono)]">
                  {fw.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)]">
            Skills
          </span>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-8 md:gap-12">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center gap-2">
                <skill.icon className="h-10 w-10 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-[family-name:var(--font-geist-mono)]">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Environment */}
        <div className="flex flex-col items-center gap-4">
          <span className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)]">
            Environment
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {environment.map((env) => (
              <div key={env.name} className="flex flex-col items-center gap-2">
                <env.icon className="h-10 w-10 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-[family-name:var(--font-geist-mono)]">
                  {env.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
