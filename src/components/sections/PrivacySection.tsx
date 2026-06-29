"use client";
import { useTranslations, useLocale } from "next-intl";
import { Lock, UserCheck, AlertOctagon, FileCheck } from "lucide-react";

const icons = [Lock, UserCheck, AlertOctagon, FileCheck];

export default function PrivacySection() {
  const t = useTranslations("privacy");
  const locale = useLocale();

  const items = Array.from({ length: 4 }, (_, i) => ({
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.desc`),
    Icon: icons[i],
  }));

  return (
    <section
      className="py-20"
      style={{ background: "linear-gradient(135deg, #8B1A2F 0%, #5C0F1F 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#C8972A] font-semibold text-sm uppercase tracking-widest mb-2">
            {locale === "ar" ? "الأمان أولاً" : "Safety First"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">{t("title")}</h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {items.map(({ title, desc, Icon }) => (
            <div key={title} className="glass rounded-2xl p-7 flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-[#C8972A]/20 flex items-center justify-center shrink-0">
                <Icon size={22} className="text-[#F0D080]" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {[
            "Qatar Law No. 13/2016",
            "UN CRPD",
            "ISO/IEC 27001",
            "WCAG 2.1 AA",
            "E2E Encrypted",
          ].map((badge) => (
            <span
              key={badge}
              className="text-sm border border-[#C8972A]/50 text-[#F0D080] px-4 py-2 rounded-full"
            >
              ✓ {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
