"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Phone, Heart } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("cta");
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-[#8B1A2F] to-[#5C0F1F] rounded-3xl p-12 sm:p-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white"
                style={{
                  width: `${(i + 1) * 60}px`,
                  height: `${(i + 1) * 60}px`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{t("title")}</h2>
            <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto">{t("subtitle")}</p>

            <div className={`flex flex-wrap justify-center gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-[#C8972A] hover:bg-[#b8871a] text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5 shadow-xl"
              >
                <Phone size={20} />
                {t("getHelp")}
              </Link>
              <Link
                href={`/${locale}/volunteer`}
                className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-lg px-8 py-4 rounded-xl transition-all hover:-translate-y-0.5"
              >
                <Heart size={20} />
                {t("volunteer")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
