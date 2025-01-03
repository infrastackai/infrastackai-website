'use client'

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Integrations() {
    return (
        <div className="p-16 flex flex-col space-y-4 items-center">
            {/* <BentoDemo /> */}
            <div className="flex flex-col space-y-4 items-center">
              <div className="">
                {/* Integrates with the tools you already use */}
                <p className="text-center font-semibold trackin text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Integrations</p>
              </div>
              <div className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)] w-[80%] text-center">
               Integrate seamlessly with your existing cloud providers, monitoring, security, and workflow tools to create a unified operational environment
              </div>
            </div>
            <div className="flex items-center flex-col">
              <div className="flex flex-row space-x-8 items-center">
                <div className="pl-4 pr-4 flex items-center">
                  <Image src="/integrations/aws.svg" alt="AWS Logo" width={80} height={50} />
                </div>
                <div className="pl-4 pr-4 flex items-center">
                  <Image src="/integrations/datadog.svg" alt="Datadog Logo" width={160} height={50} />
                </div>
                <Image src="/integrations/github.svg" alt="Github Logo" width={140} height={50} />
                <div className="pl-2 pr-2 flex items-center">
                  <Image src="/integrations/pagerduty.svg" alt="PagerDuty Logo" width={150} height={50} />
                </div>
                <Image src="/integrations/slack.svg" alt="Slack Logo" width={150} height={50} />
              </div>
              <Link href={`/docs`} className="text-violet-500 flex items-center justify-start text-lg font-[family-name:var(--font-geist-sans)] hover:underline">
                View all integrations  <ArrowUpRight className="h-6 w-6 inline" />
              </Link>
            </div>
          </div>
    )
}