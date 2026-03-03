"use client";

import { motion } from "framer-motion";
import { Workflow, Search, AudioLines, FileText, BarChart3, ShieldCheck } from "lucide-react";

const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const agents = [
  {
    icon: Workflow,
    name: "Operator",
    description: "AI agent for Slack & Teams. Automates workflows, answers questions, and keeps your team moving.",
  },
  {
    icon: Search,
    name: "Prospector",
    description: "Sales & outreach agent. Finds leads, enriches contacts, and automates personalized outreach at scale.",
  },
  {
    icon: AudioLines,
    name: "Voice",
    description: "Phone & IVR automation. Handles calls, navigates menus, and completes verification processes 24/7.",
  },
  {
    icon: FileText,
    name: "Docs",
    description: "Document processing & records. Merges records, extracts data, and manages document workflows.",
  },
  {
    icon: BarChart3,
    name: "Analyst",
    description: "Query your data warehouse conversationally. Connects to Snowflake, BigQuery, and more with role-based security.",
  },
  {
    icon: ShieldCheck,
    name: "Compliance",
    description: "Contract review & credentialing. Tracks renewals, reviews contracts, and manages compliance workflows.",
  },
];

export default function Agents() {
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
      id="agents"
      className="p-4 flex flex-col space-y-3 sm:space-y-4 mb-16 md:mb-36 items-center"
    >
      <div className="flex flex-col space-y-4 items-center">
        <h3 className="text-center font-semibold trackin text-4xl md:text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Meet Your Agents
        </h3>
        <p className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)] md:w-[80%] text-center">
          Deploy pre-built agents or build custom ones for any department.
        </p>
      </div>
      <div></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-[900px]">
        {agents.map((agent) => (
          <motion.div
            key={agent.name}
            variants={variants}
            className="flex flex-col items-center text-center border rounded-xl p-6"
          >
            <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-3 mb-4">
              <agent.icon className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-lg mb-2">{agent.name}</h4>
            <p className="text-muted-foreground text-sm">{agent.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
