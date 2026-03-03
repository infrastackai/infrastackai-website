"use client";

import { motion } from "framer-motion";
import { SiSlack, SiGmail, SiSalesforce, SiHubspot, SiZendesk, SiJira, SiGooglecloud, SiSnowflake, SiGooglechrome, SiPostgresql, SiMongodb, SiDatabricks } from "react-icons/si";
import { AudioLines, Ellipsis } from "lucide-react";
import { FaAws, FaMicrosoft, FaFileExcel, FaFileSignature, FaGoogleDrive } from "react-icons/fa";

const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const integrations = [
  { name: "Slack", icon: SiSlack },
  { name: "Teams", icon: FaMicrosoft },
  { name: "Gmail", icon: SiGmail },
  { name: "Salesforce", icon: SiSalesforce },
  { name: "HubSpot", icon: SiHubspot },
  { name: "Zendesk", icon: SiZendesk },
  { name: "Jira", icon: SiJira },
  { name: "Snowflake", icon: SiSnowflake },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Databricks", icon: SiDatabricks },
  { name: "AWS", icon: FaAws },
  { name: "GCP", icon: SiGooglecloud },
  { name: "DocuSign", icon: FaFileSignature },
  { name: "Smartsheet", icon: FaFileExcel },
  { name: "OneDrive", icon: FaGoogleDrive },
  { name: "Browser", icon: SiGooglechrome },
  { name: "Voice", icon: AudioLines },
  { name: "And more", icon: Ellipsis },
];

export default function Integrations() {
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
          Integrations
        </h3>
        <p className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)] md:w-[60%] text-center">
          Your AI Agents plug into the tools your business already runs on.
          Instant automation across every platform.
        </p>
      </div>
      <div></div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 md:gap-12 max-w-[900px]">
        {integrations.map((integration) => (
          <div key={integration.name} className="flex flex-col items-center gap-2">
            <integration.icon className="h-10 w-10 text-muted-foreground" />
            <span className="text-xs text-muted-foreground font-[family-name:var(--font-geist-mono)]">
              {integration.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
