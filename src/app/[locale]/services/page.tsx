import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

export default async function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        {/* Hero */}
        <section
          className="py-20 text-center"
          style={{ background: "linear-gradient(135deg, #8B1A2F 0%, #5C0F1F 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-black text-white mb-4">
              خدماتنا <span className="text-[#F0D080]">Services</span>
            </h1>
            <p className="text-white/75 text-lg">
              اثنتا عشرة خدمة رقمية متاحة للجميع على مدار الساعة
            </p>
          </div>
        </section>
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
