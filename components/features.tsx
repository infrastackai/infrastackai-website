"use client";

import { motion } from "framer-motion";
import { Clock, ShieldCheck, Timer, Repeat2, Shuffle } from "lucide-react";

const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const features = [
  {
    icon: Clock,
    title: "Rapid ROI",
    description: "See results in days, not months. Deploy agents that deliver value from day one.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Ready",
    description: "Bank-grade security with SOC 2 Type II compliance and isolated agent sandboxes.",
  },
  {
    icon: Timer,
    title: "24/7 Execution",
    description: "Your agents work around the clock, never missing a deadline.",
  },
  {
    icon: Repeat2,
    title: "Self-Improving",
    description: "Agents learn continuously, improving with every interaction.",
  },
  {
    icon: Shuffle,
    title: "Model Agnostic",
    description: "Built on the best models from every provider. Your agents always run on the latest, most capable AI.",
  },
];

export default function Features() {
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
      className="flex justify-center mb-16 md:mb-36 px-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-[1200px] w-full">
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={variants}
            className="flex flex-col items-center text-center border rounded-xl p-6 bg-background"
          >
            <div className="bg-gray-100 dark:bg-zinc-800 rounded-xl p-3 mb-4">
              <feature.icon className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
