import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { ProductSwitcher } from "@/components/ProductSwitcher";
import { BillingFlow } from "@/components/BillingFlow";
import { FeaturesDeep } from "@/components/FeaturesDeep";
import { Differentiators } from "@/components/Differentiators";
import { ComparisonTable } from "@/components/ComparisonTable";
import { GSTCompliance } from "@/components/GSTCompliance";
import { ReportsGallery } from "@/components/ReportsGallery";
import { Industries } from "@/components/Industries";
import { EverywhereBand } from "@/components/EverywhereBand";
import { MetricsBand } from "@/components/MetricsBand";
import { Testimonials } from "@/components/Testimonials";
import { Onboarding } from "@/components/Onboarding";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/Faq";
import { ClosingCTA } from "@/components/ClosingCTA";
import { DemoForm } from "@/components/DemoForm";
import { Footer } from "@/components/Footer";
import { LoginProvider } from "@/context/LoginContext";
import { LoginPanel } from "@/components/LoginPanel";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <LoginProvider>
      <SmoothScroll>
      {/* Login Side Panel (global overlay) */}
      <LoginPanel />

      {/* 01 + 02 – Announcement Bar + Sticky Navigation */}
      <Header />

      {/* 03 – Hero */}
      <Hero />

      {/* 04 – Trust Marquee */}
      <TrustMarquee />

      {/* 05 – Product Switcher */}
      <ProductSwitcher />

      {/* 06 – Billing Flow */}
      <BillingFlow />

      {/* 08a–08f – Feature Deep Dives */}
      <FeaturesDeep />

      {/* 09 – Differentiators */}
      <Differentiators />

      {/* 10 – Comparison Table */}
      <ComparisonTable />

      {/* 11 – GST Compliance */}
      <GSTCompliance />

      {/* 12 – Reports Gallery */}
      <ReportsGallery />

      {/* 13 – Industries */}
      <Industries />

      {/* 14 – Everywhere Band */}
      <EverywhereBand />

      {/* 15 – Metrics Band */}
      <MetricsBand />

      {/* 16 – Testimonials */}
      <Testimonials />

      {/* 17 – Onboarding */}
      <Onboarding />

      {/* 18 – Pricing */}
      <Pricing />

      {/* 19 – FAQ */}
      <FAQ />

      {/* 20 – Closing CTA */}
      <ClosingCTA />

      {/* 21 – Demo Form */}
      <DemoForm />

      {/* 22 – Footer */}
      <Footer />
      </SmoothScroll>
    </LoginProvider>
  );
}
