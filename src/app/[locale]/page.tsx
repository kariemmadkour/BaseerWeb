import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsBar from "@/components/sections/StatsBar";
import ServicesSection from "@/components/sections/ServicesSection";
import AppSection from "@/components/sections/AppSection";
import VisionSection from "@/components/sections/VisionSection";
import PrivacySection from "@/components/sections/PrivacySection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <HeroSection />
        <StatsBar />
        <ServicesSection />
        <AppSection />
        <VisionSection />
        <PrivacySection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
