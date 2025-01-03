import Link from 'next/link';
import FlickeringGrid from "@/components/ui/flickering-grid";
import HeroBox from "@/components/hero-box";
import HeroBoxComingSoon from "@/components/hero-box-coming-soon";

import { Button } from '@/components/ui/button';
import { Headset, Slack } from "lucide-react";

export default function HomePage() {
  return (
    <div className='flex-grow flex flex-col font-[family-name:var(--font-geist-sans)]'>
      <div className="relative w-full h-[400px] mt-[104px] overflow-hidden flex items-center justify-center flex-col space-y-4">
        <div className="absolute inset-0">
          <FlickeringGrid
            className="z-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#8B5CF6"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
        </div>
        <div className='pl-12 pr-12'>
          {/* <HeroBox /> */}
          <HeroBoxComingSoon />
        </div>
      </div>
      <div className="flex flex-col space-y-4 mb-36 mt-24 items-center">
        <div className="">
          {/* Integrates with the tools you already use */}
          <p className="text-center font-semibold trackin text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">Learn more about InfraStack</p>
        </div>
        <div className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)] w-[80%] text-center">
          Talk to our team of experts to learn more about how InfraStack can help you automate your operations
        </div>
        <div></div>
        <div></div>
        <div className="flex flex-row space-x-4">
          <Button variant="default" size="lg" className="bg-violet-500 hover:bg-violet-500/90 text-white h-12">
            <Headset /> Talk to our team
          </Button>
          {/* <Button variant="outline" size="lg" className="  h-12">
            <Slack />Join our Slack
          </Button> */}
        </div>
      </div>
    </div>
  );
}
