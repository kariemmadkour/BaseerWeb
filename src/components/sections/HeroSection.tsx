"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Eye, ArrowLeft, ArrowRight, Phone, Star } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isAr = locale === "ar";
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #8B1A2F 0%, #5C0F1F 60%, #3D0A12 100%)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 end-10 w-96 h-96 rounded-full bg-[#C8972A]/10 blur-3xl" />
      <div className="absolute bottom-10 start-10 w-72 h-72 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
      <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className={`fade-in-up ${isAr ? "order-1" : ""}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C8972A]/20 border border-[#C8972A]/40 rounded-full px-4 py-1.5 mb-6">
              <Star size={12} className="text-[#F0D080] fill-current" />
              <span className="text-[#F0D080] text-xs font-semibold tracking-wide">
                {t("badge")}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
              {t("title")}
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #F0D080, #C8972A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("titleAccent")}
              </span>
            </h1>

            <p className="text-white/75 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
              {t("subtitle")}
            </p>

            <div className={`flex flex-wrap gap-4 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-[#C8972A] hover:bg-[#b8871a] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone size={20} />
                {t("cta")}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                {t("learnMore")}
                <Arrow size={18} />
              </Link>
            </div>

            {/* Trust badges */}
            <div className={`mt-10 flex flex-wrap gap-4 ${isAr ? "justify-end" : ""}`}>
              {["WCAG 2.1 AA", "E2E Encrypted", "ISO 27001", "Qatar Vision 2030"].map((b) => (
                <span
                  key={b}
                  className="text-xs text-white/50 border border-white/15 px-3 py-1.5 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Visual — App mockup */}
          <div className={`flex justify-center lg:justify-end float ${isAr ? "order-0" : ""}`}>
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-64 h-[480px] rounded-[3rem] border-4 border-white/20 bg-[#1A0208] shadow-2xl overflow-hidden">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-10" />

                {/* Screen content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-4">
                  <div className="w-16 h-16 rounded-full bg-[#C8972A]/20 flex items-center justify-center">
                    <Eye size={32} className="text-[#F0D080]" />
                  </div>
                  <p
                    className="text-white text-3xl font-black"
                    style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
                  >
                    بصير
                  </p>
                  <p className="text-white/60 text-xs text-center">
                    {isAr ? "اضغط للحصول على مساعدة" : "Tap to get help"}
                  </p>

                  {/* SOS button */}
                  <button
                    className="mt-4 w-36 h-36 rounded-full bg-[#C8972A] sos-pulse flex flex-col items-center justify-center gap-1 text-white font-black shadow-xl"
                    aria-label={isAr ? "اطلب مساعدة" : "Request Help"}
                  >
                    <Phone size={28} fill="white" />
                    <span className="text-sm">{isAr ? "اطلب مساعدة" : "Get Help"}</span>
                  </button>

                  <div className="mt-4 w-full space-y-2">
                    {[
                      { label: isAr ? "تنقل" : "Navigation", color: "#1B4332" },
                      { label: isAr ? "قراءة" : "Reading", color: "#1A237E" },
                      { label: isAr ? "طبي" : "Medical", color: "#4A148C" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center gap-2 rounded-lg px-3 py-2"
                        style={{ background: item.color }}
                      >
                        <span className="w-2 h-2 rounded-full bg-white/60" />
                        <span className="text-white/80 text-xs">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -start-8 glass rounded-xl px-3 py-2 shadow-lg">
                <p className="text-[#F0D080] font-bold text-sm">{"< 60s"}</p>
                <p className="text-white/70 text-[10px]">{isAr ? "وقت الاتصال" : "Connect time"}</p>
              </div>
              <div className="absolute -bottom-4 -end-8 glass rounded-xl px-3 py-2 shadow-lg">
                <p className="text-[#F0D080] font-bold text-sm">24/7</p>
                <p className="text-white/70 text-[10px]">{isAr ? "على مدار الساعة" : "Always available"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 inset-x-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 0 960 80 720 60C480 40 240 0 0 40L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
