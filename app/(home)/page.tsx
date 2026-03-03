import FlickeringGrid from "@/components/ui/flickering-grid";
import HeroBoxComingSoon from "@/components/hero-box-coming-soon";

import LearnMore from "@/components/learn-more";
import JoinOurCrew from "@/components/join-our-crew";
import Integrations from "@/components/integrations";
import HeroBox from "@/components/hero-box";

export default function HomePage() {
  return (
    <div className="flex-grow flex flex-col font-[family-name:var(--font-geist-sans)]">
      <div className="relative w-full h-[550px] md:h-[450px] lg:h-[400px] mt-[84px] md:mt-[104px] mb-8 md:mb-16 overflow-hidden flex items-center justify-center flex-col">
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
        <HeroBox />
      </div>
      <Integrations />
      <JoinOurCrew />
      <LearnMore />
    </div>
  );
}
