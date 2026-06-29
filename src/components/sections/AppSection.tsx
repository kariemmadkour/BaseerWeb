"use client";
import { useTranslations, useLocale } from "next-intl";
import { Check, Smartphone, Eye } from "lucide-react";

export default function AppSection() {
  const t = useTranslations("app");
  const locale = useLocale();
  const isAr = locale === "ar";

  const features: string[] = Array.from({ length: 6 }, (_, i) => t(`features.${i}`));

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #5C0F1F 0%, #8B1A2F 100%)" }}
    >
      {/* Decorative */}
      <div className="absolute top-0 end-0 w-96 h-96 rounded-full bg-[#C8972A]/10 blur-3xl" />
      <div className="absolute bottom-0 start-0 w-72 h-72 rounded-full bg-white/5 blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Phone mockup */}
          <div className={`flex justify-center ${isAr ? "order-2" : "order-1"}`}>
            <div className="relative">
              <div className="w-56 h-[440px] rounded-[2.5rem] border-4 border-white/20 bg-[#0D0005] shadow-2xl overflow-hidden relative">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
                <div className="absolute inset-0 flex flex-col items-center justify-start p-5 pt-10 gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#C8972A]/20 flex items-center justify-center">
                    <Eye size={24} className="text-[#F0D080]" />
                  </div>
                  <p className="text-white text-2xl font-black" style={{ fontFamily: "Tahoma" }}>بصير</p>

                  {/* Active call mockup */}
                  <div className="w-full rounded-xl overflow-hidden mt-2">
                    <div className="bg-[#1B4332] p-2 text-center">
                      <p className="text-green-300 text-[10px]">● {isAr ? "متصل الآن" : "Live Session"}</p>
                    </div>
                    <div className="bg-[#0A2010] h-28 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                        <Smartphone size={24} className="text-white/60" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full space-y-1.5 mt-1">
                    <div className="bg-[#1a1a2e] rounded-lg p-2 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-white/70 text-[10px]">Ahmad • {isAr ? "متطوع" : "Volunteer"}</span>
                    </div>
                    <div className="bg-[#8B1A2F]/40 rounded-lg p-2 text-center">
                      <span className="text-[#F0D080] text-[10px] font-bold">00:03:45</span>
                    </div>
                  </div>

                  {/* End call */}
                  <button className="mt-2 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                    <span className="text-white text-xl">✕</span>
                  </button>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-3 -end-6 glass text-white rounded-xl px-3 py-2 shadow-xl">
                <p className="text-[#F0D080] font-bold text-sm">{"< 60s"}</p>
                <p className="text-white/60 text-[10px]">{isAr ? "وقت الاتصال" : "Connection"}</p>
              </div>
              <div className="absolute -bottom-3 -start-6 glass text-white rounded-xl px-3 py-2 shadow-xl">
                <p className="text-[#F0D080] font-bold text-sm">★ 4.9</p>
                <p className="text-white/60 text-[10px]">{isAr ? "تقييم المتطوعين" : "Volunteer Rating"}</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={isAr ? "order-1" : "order-2"}>
            <div className="inline-flex items-center gap-2 bg-[#C8972A]/20 border border-[#C8972A]/40 rounded-full px-4 py-1.5 mb-5">
              <span className="text-[#F0D080] text-xs font-semibold">{t("badge")}</span>
            </div>

            <h2 className="text-5xl font-black text-white mb-2">{t("title")}</h2>
            <p className="text-[#F0D080] text-xl font-semibold mb-4">{t("subtitle")}</p>
            <p className="text-white/70 text-base leading-relaxed mb-8">{t("desc")}</p>

            <ul className="space-y-3 mb-10">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#C8972A] flex items-center justify-center shrink-0">
                    <Check size={14} className="text-white" strokeWidth={3} />
                  </span>
                  <span className="text-white/85 text-sm">{f}</span>
                </li>
              ))}
            </ul>

            {/* Download buttons */}
            <div className={`flex flex-wrap gap-3 mb-5 ${isAr ? "flex-row-reverse justify-end" : ""}`}>
              {[{ store: t("appStore"), sub: "Download on the" }, { store: t("playStore"), sub: "Get it on" }].map((s) => (
                <button
                  key={s.store}
                  className="flex items-center gap-3 bg-black/60 hover:bg-black/80 border border-white/20 rounded-xl px-5 py-3 transition-colors"
                >
                  <Smartphone size={22} className="text-white" />
                  <div className="text-start">
                    <p className="text-white/60 text-[10px]">{s.sub}</p>
                    <p className="text-white font-semibold text-sm">{s.store}</p>
                  </div>
                </button>
              ))}
            </div>

            <p className="text-white/40 text-sm">{t("coming")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
