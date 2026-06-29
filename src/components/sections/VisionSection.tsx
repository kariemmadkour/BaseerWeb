"use client";
import { useTranslations, useLocale } from "next-intl";
import { Award, Globe, Trophy, FileCheck } from "lucide-react";

const icons = [Award, Globe, Trophy, FileCheck];

export default function VisionSection() {
  const t = useTranslations("vision");
  const locale = useLocale();

  const items = Array.from({ length: 4 }, (_, i) => ({
    title: t(`items.${i}.title`),
    desc: t(`items.${i}.desc`),
    Icon: icons[i],
  }));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#C8972A] font-semibold text-sm uppercase tracking-widest mb-2">
            {locale === "ar" ? "رؤيتنا" : "Our Vision"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#8B1A2F] mb-4">{t("title")}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-[#C8972A]/30 transition-all duration-300 hover:-translate-y-1 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#8B1A2F] flex items-center justify-center mx-auto mb-5">
                <Icon size={24} className="text-[#F0D080]" />
              </div>
              <h3 className="font-bold text-[#8B1A2F] text-base mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
