import FlickeringGrid from "@/components/ui/flickering-grid";
import IntegrationsSection from "@/sections/home/integrations";
import FeaturesSection from "@/sections/home/features";
import JoinOurCrewSection from "@/sections/home/join-our-crew";
import LearnMoreSection from "@/sections/home/learn-more";
import HeroBox from "@/components/hero-box";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <div className="relative h-[400px] mt-[104px] overflow-hidden">
        <div className="absolute -inset-1">
          <FlickeringGrid
            className="z-0 size-full"
            squareSize={4}
            gridGap={6}
            color="#8B5CF6"
            maxOpacity={0.5}
            flickerChance={0.1}
          />
        </div>
        {/* <BlurIn
          word="Your AI-Ops Agents"
          className="text-5xl font-bold text-black dark:text-white m-16 font-[family-name:var(--font-geist-sans)]"
        /> */}
        <div className="p-14 pl-24 pr-24 relative">
          <HeroBox />
        </div>
      </div>
      <IntegrationsSection />
      <FeaturesSection />
      <JoinOurCrewSection />
      <LearnMoreSection />
      <div className="flex-grow"></div>
    </div>
  );
}
