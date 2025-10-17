export const metadata = {
  title: "Connect AI",
  description: "Page description",
};

import Categories from "@/components/Categories/categories";
import Cta from "@/components/cta/cta";
import FeaturesPlanet from "@/components/FeaturesPlanet/featuresplanet";
import HeroHome from "@/components/hero/hero";
import LargeTestimonial from "@/components/Testimonials/testimonials";
import NavBar from '@/components/navbar'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <NavBar />
      <HeroHome />
      {/* <Categories /> */}
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
      <Footer />
    </div>

  );
}
