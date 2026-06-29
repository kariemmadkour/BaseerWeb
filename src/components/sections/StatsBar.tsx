"use client";
import { useTranslations } from "next-intl";

export default function StatsBar() {
  const t = useTranslations("stats");

  const stats = [
    { value: t("users"), label: t("usersLabel") },
    { value: t("volunteers"), label: t("volunteersLabel") },
    { value: t("sessions"), label: t("sessionsLabel") },
    { value: t("countries"), label: t("countriesLabel") },
  ];

  return (
    <section className="bg-[#C8972A] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[#5C0F1F] text-3xl sm:text-4xl font-black">{s.value}</p>
              <p className="text-[#5C0F1F]/80 text-sm font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
