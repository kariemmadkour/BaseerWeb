"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import {
  Video, FileText, MapPin, Pill, BookOpen, Scale,
  AlertTriangle, Users, Calendar, Briefcase, Binary, Landmark,
  ArrowLeft, ArrowRight,
} from "lucide-react";

const icons = [Video, FileText, MapPin, Pill, BookOpen, Scale, AlertTriangle, Users, Calendar, Briefcase, Binary, Landmark];
const colors = [
  "#8B1A2F","#6B1022","#C8972A","#1B4332","#1A237E","#4A148C",
  "#D32F2F","#006064","#E65100","#37474F","#1B5E20","#0D47A1",
];
const keys = ["video","docs","nav","medical","edu","legal","sos","volunteer","events","jobs","braille","gov"] as const;

export default function ServicesSection() {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#C8972A] font-semibold text-sm uppercase tracking-widest mb-2">
            {locale === "ar" ? "ما نقدّمه" : "What We Offer"}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#8B1A2F] mb-4">{t("title")}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {keys.map((key, i) => {
            const Icon = icons[i];
            const isSOScard = key === "sos";
            return (
              <div
                key={key}
                className={`group relative rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
                  isSOScard
                    ? "bg-red-700 text-white ring-2 ring-red-400"
                    : "bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#C8972A]/30"
                }`}
              >
                {isSOScard && (
                  <div className="absolute top-3 end-3">
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full animate-pulse">
                      {locale === "ar" ? "طوارئ" : "Emergency"}
                    </span>
                  </div>
                )}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: colors[i] }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3
                  className={`font-bold text-base mb-2 ${
                    isSOScard ? "text-white" : "text-[#8B1A2F]"
                  }`}
                >
                  {t(`list.${key}.title`)}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isSOScard ? "text-red-100" : "text-gray-500"
                  }`}
                >
                  {t(`list.${key}.desc`)}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href={`/${locale}/services`}
            className="inline-flex items-center gap-2 bg-[#8B1A2F] hover:bg-[#6B1022] text-white font-semibold px-8 py-3.5 rounded-xl transition-all"
          >
            {locale === "ar" ? "استكشف كل الخدمات" : "Explore All Services"}
            {locale === "ar" ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
          </Link>
        </div>
      </div>
    </section>
  );
}
