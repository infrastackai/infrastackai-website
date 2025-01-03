import Link from 'next/link';
import FlickeringGrid from "@/components/ui/flickering-grid";
import HeroBox from "@/components/hero-box";
import HeroBoxComingSoon from "@/components/hero-box-coming-soon";

import { Button } from '@/components/ui/button';
import LearnMore from '@/components/learn-more';
import JoinOurCrew from '@/components/join-our-crew';

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
      <JoinOurCrew />
      <LearnMore />
    </div>
  );
}
