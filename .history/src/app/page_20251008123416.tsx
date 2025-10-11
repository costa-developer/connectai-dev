export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Categories from "@/components/Categories/categories";
import FeaturesPlanet from "@/components/FeaturesPlanet/featuresplanet";
import HeroHome from "@/components/hero/hero";

export default function Home() {
  return (
    <>
      <HeroHome />
      <Categories />
      <FeaturesPlanet />
    </>
  );
}
