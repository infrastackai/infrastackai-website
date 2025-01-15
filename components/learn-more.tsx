"use client";

import { Button } from "@/components/ui/button";
import { Headset, Slack } from "lucide-react";
import { motion } from "framer-motion";

const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function LearnMore() {
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
      className="flex flex-col space-y-4 my-24 items-center px-4 md:px-16 w-full max-w-full overflow-hidden"
    >
      <div className="">
        {/* Integrates with the tools you already use */}
        <p className="text-center font-semibold text-3xl md:text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Learn more about InfraStack
        </p>
      </div>
      <div className="text-muted-foreground text-base md:text-lg font-[family-name:var(--font-geist-mono)] w-[90%] md:w-[80%] text-center">
        Talk to our team of experts to learn more about how InfraStack can help
        you automate your operations
      </div>
      <div></div>
      <div></div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Button
          onClick={() => {
            window.open(
              "https://cal.com/aykut-gedik-infrastack-ai/talk-to-our-team",
              "_blank"
            );
          }}
          variant="default"
          size="lg"
          className="bg-violet-500 hover:bg-violet-500/90 text-white h-12"
        >
          <Headset /> Talk to our team
        </Button>
        <Button variant="outline" size="lg" disabled className="h-12">
          <Slack />
          Join our Slack
        </Button>
      </div>
    </motion.div>
  );
}
