"use client";
import { useTranslations, useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { UserCheck, Bell, Phone, FileText, Heart } from "lucide-react";

const stepIcons = [UserCheck, Bell, Phone, FileText];

export default function VolunteerPage() {
  const t = useTranslations("volunteer");
  const locale = useLocale();
  const isAr = locale === "ar";

  const steps = Array.from({ length: 4 }, (_, i) => ({
    title: t(`steps.${i}.title`),
    desc: t(`steps.${i}.desc`),
    Icon: stepIcons[i],
  }));

  const specialties: string[] = Array.from({ length: 6 }, (_, i) => t(`specialtyList.${i}`));

  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        {/* Hero */}
        <section
          className="py-24 text-center relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #8B1A2F 0%, #5C0F1F 100%)" }}
        >
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="absolute rounded-full border border-white"
                style={{ width:`${(i+1)*80}px`, height:`${(i+1)*80}px`, top:"50%", left:"50%", transform:"translate(-50%,-50%)" }} />
            ))}
          </div>
          <div className="relative max-w-3xl mx-auto px-4">
            <div className="w-20 h-20 rounded-full bg-[#C8972A]/20 flex items-center justify-center mx-auto mb-6">
              <Heart size={36} className="text-[#F0D080]" fill="currentColor" />
            </div>
            <h1 className="text-5xl font-black text-white mb-4">{t("title")}</h1>
            <p className="text-white/75 text-xl">{t("subtitle")}</p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-[#8B1A2F] text-center mb-12">{t("howTitle")}</h2>
            <div className="relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 start-1/2 end-0 h-0.5 bg-[#C8972A]/30" style={{ width:"75%", marginLeft:"12.5%" }} />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {steps.map(({ title, desc, Icon }, i) => (
                  <div key={title} className="text-center relative">
                    <div className="w-20 h-20 rounded-full bg-[#8B1A2F] flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10">
                      <Icon size={28} className="text-[#F0D080]" />
                      <span className="absolute -top-1 -end-1 w-7 h-7 rounded-full bg-[#C8972A] flex items-center justify-center text-white text-xs font-bold">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#8B1A2F] mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-black text-[#8B1A2F] mb-8">{t("specialties")}</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {specialties.map((s) => (
                <span key={s} className="bg-[#8B1A2F] text-white px-5 py-2.5 rounded-full text-sm font-medium">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-14">
              <a
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-[#C8972A] hover:bg-[#b8871a] text-white font-bold text-xl px-10 py-5 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl"
              >
                <Heart size={22} />
                {t("joinBtn")}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
