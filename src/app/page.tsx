export const metadata = {
  title: "Connect AI",
  description: "Page description",
};

import Cta from "@/components/cta/cta";;
import NavBar from '@/components/navbar'
import Footer from '@/components/footer/footer'
import Hero from "@/components/hero";
import Work from "@/components/work";
import GlobalReach from "@/components/GlobalReach";
import TimeLine from "@/components/timeline";
import Portfolio from "@/components/portfolio";
import Upgrade from "@/components/upgrade";
import Perks from "@/components/perks";
import Faq from "@/components/Faq";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#000510]">
      <NavBar />
      <Hero />
      <Work />
      <GlobalReach />
      <div className="px-1 bg-white">
      <Portfolio />
      <Upgrade />
      </div>
      <Perks />
      <Faq />
      <Cta />
        <TimeLine />
      <Footer />
    </div>

  );
}
