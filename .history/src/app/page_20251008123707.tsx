export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Categories from "@/components/Categories/categories";
import Cta from "@/components/cta/cta";
import FeaturesPlanet from "@/components/FeaturesPlanet/featuresplanet";
import HeroHome from "@/components/hero/hero";
import LargeTestimonial from "@/components/Testimonials/testimonials";

export default function Home() {
  return (
    <>
      <HeroHome />
      <Categories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
