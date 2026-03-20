import { Comparison } from "./_components/comparison";
import { Contributors } from "./_components/contributors";
import { Cta } from "./_components/cta";
import { FeatureGrid } from "./_components/feature-grid";
import { Hero } from "./_components/hero";
import { HowToUse } from "./_components/how-to-use";
import { PackageShowcase } from "./_components/package-showcase";

export default async function Home() {
  return (
    <>
      <Hero />
      <HowToUse />
      <Comparison />
      <PackageShowcase />
      <FeatureGrid />
      <Contributors />
      <Cta />
    </>
  );
}
