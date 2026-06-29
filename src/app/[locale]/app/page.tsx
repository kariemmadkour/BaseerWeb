import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppSection from "@/components/sections/AppSection";
import CTASection from "@/components/sections/CTASection";

export default function AppPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        <section
          className="py-20 text-center"
          style={{ background: "linear-gradient(135deg, #5C0F1F 0%, #8B1A2F 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-black text-white mb-4">
              تطبيق{" "}
              <span className="text-[#F0D080]" style={{ fontFamily: "Tahoma" }}>
                بصير
              </span>
            </h1>
            <p className="text-white/75 text-lg">
              الأول من نوعه في الشرق الأوسط — First of its Kind in the Middle East
            </p>
          </div>
        </section>
        <AppSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
