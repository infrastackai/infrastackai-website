"use client";
import { Bell, BotMessageSquare, Bug, Clock, Layers, Lock } from "lucide-react";
import { motion } from 'framer-motion'

const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function FeaturesSection() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, ease: [.25, .1, .25, 1], staggerChildren: 0.04 }}
      viewport={{ once: true }}
      variants={variants}
      className="flex flex-col space-y-4 mb-36 mt-24 items-center">
      <div className="">
        {/* Integrates with the tools you already use */}
        <p className="text-center font-semibold trackin text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Features</p>
      </div>
      <div className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)] w-[80%] text-center">
        Operate blazingly fast and deliver reliable software <br /> with InfraStack&apos;s AI-powered features
      </div>
      <div></div>
      <div></div>

      <div className="flex flex-row pl-12 pr-12 space-x-6">
        <div className="flex-1 bg-background border p-6 hover:border-primary rounded-xl items-center flex flex-col space-y-3">
          <div className="p-2 bg-violet-500 rounded-xl">
            <Bell className="h-6 w-6 text-white" />
          </div>
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Triaging Alerts</p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Automatically triage alerts from your monitoring systems and route them to the right team
          </p>
        </div>
        <div className="flex-1 bg-background border p-6 hover:border-primary rounded-xl items-center flex flex-col space-y-3">
          <div className="p-2 bg-violet-500 rounded-xl">
            <Layers className="h-6 w-6 text-white" />
          </div>
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Infrastructure as Code</p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Define your infrastructure as code and deploy it automatically with every change
          </p>
        </div>
        <div className="flex-1 bg-background border p-6 hover:border-primary rounded-xl items-center flex flex-col space-y-3">
          <div className="p-2 bg-violet-500 rounded-xl">
            <Bug className="h-6 w-6 text-white" />
          </div>
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Investigate Issues</p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Investigate user issues and detect root causes with AI-powered insights
          </p>
        </div>
      </div>
      <div className="flex flex-row pl-12 pr-12 space-x-6">
        <div className="flex-1 bg-background border p-6 hover:border-primary rounded-xl items-center flex flex-col space-y-3">
          <div className="p-2 bg-violet-500 rounded-xl">
            <BotMessageSquare className="h-6 w-6 text-white" />
          </div>
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">On-demand Dev Support</p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Get support from our team of experts to help you integrate InfraStack into your workflow
          </p>
        </div>
        <div className="flex-1 bg-background border p-6 hover:border-primary rounded-xl items-center flex flex-col space-y-3">
          <div className="p-2 bg-violet-500 rounded-xl">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Ticket to compilation</p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Your data is encrypted in transit and at rest, and we never store your data on our servers
          </p>
        </div>
        <div className="flex-1 bg-background  border p-6 hover:border-primary rounded-xl items-center flex flex-col space-y-3">
          <div className="p-2 bg-violet-500 rounded-xl">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Private & Secure</p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Your data is encrypted in transit and at rest, and we never store your data on our servers
          </p>
        </div>
      </div>
      <div className="flex flex-row pl-12 pr-12 space-x-6">
        <div className="flex-1 bg-background border p-6 hover:border-primary rounded-xl items-center flex flex-col space-y-3">
          <div className="p-2 bg-violet-500 rounded-xl">
            <BotMessageSquare className="h-6 w-6 text-white" />
          </div>
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">On-demand Dev Support</p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Get support from our team of experts to help you integrate InfraStack into your workflow
          </p>
        </div>
        <div className="flex-1 bg-background border p-6 hover:border-primary rounded-xl items-center flex flex-col space-y-3">
          <div className="p-2 bg-violet-500 rounded-xl">
            <Clock className="h-6 w-6 text-white" />
          </div>
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Ticket to compilation</p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Your data is encrypted in transit and at rest, and we never store your data on our servers
          </p>
        </div>
        <div className="flex-1 bg-background  border p-6 hover:border-primary rounded-xl items-center flex flex-col space-y-3">
          <div className="p-2 bg-violet-500 rounded-xl">
            <Lock className="h-6 w-6 text-white" />
          </div>
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Private & Secure</p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Your data is encrypted in transit and at rest, and we never store your data on our servers
          </p>
        </div>
      </div>
    </motion.div>
  )
}
