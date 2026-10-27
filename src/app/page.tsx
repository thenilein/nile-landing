import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { Stats } from "@/components/Stats";
import { FeaturesBento } from "@/components/FeaturesBento";
import { Integrations } from "@/components/Integrations";
import { OfflineEdge } from "@/components/OfflineEdge";
import { HowItWorks } from "@/components/HowItWorks";
import { BuiltForIndia } from "@/components/BuiltForIndia";
import { Security } from "@/components/Security";
import { Testimonials } from "@/components/Testimonials";
import { Industries } from "@/components/Industries";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/Faq";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <Stats />
        <FeaturesBento />
        <Integrations />
        <OfflineEdge />
        <HowItWorks />
        <BuiltForIndia />
        <Security />
        <Testimonials />
        <Industries />
        <Pricing />
        <FAQ />
        <ClosingCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
