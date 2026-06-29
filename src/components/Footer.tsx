"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Eye, Mail, Globe, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-[#5C0F1F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                <Eye size={20} className="text-[#F0D080]" />
              </span>
              <span
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "Tahoma, Arial, sans-serif" }}
              >
                بصير
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">{t("tagline")}</p>
            <p className="text-white/50 text-xs mt-3">{t("contact.gov")}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#C8972A] font-semibold mb-4 text-sm uppercase tracking-wider">
              {locale === "ar" ? "روابط مفيدة" : "Quick Links"}
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: `/${locale}`, label: locale === "ar" ? "الرئيسية" : "Home" },
                { href: `/${locale}/services`, label: locale === "ar" ? "الخدمات" : "Services" },
                { href: `/${locale}/volunteer`, label: locale === "ar" ? "المتطوعون" : "Volunteer" },
                { href: `/${locale}/community`, label: locale === "ar" ? "المجتمع" : "Community" },
                { href: `/${locale}/contact`, label: locale === "ar" ? "تواصل معنا" : "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/70 hover:text-[#F0D080] text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C8972A] font-semibold mb-4 text-sm uppercase tracking-wider">
              {locale === "ar" ? "تواصل معنا" : "Contact"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5 text-white/70 text-sm">
                <Mail size={15} className="text-[#C8972A] shrink-0" />
                <a href="mailto:info@baseer.qa" className="hover:text-white transition-colors">
                  {t("contact.email")}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-white/70 text-sm">
                <Globe size={15} className="text-[#C8972A] shrink-0" />
                <span>{t("contact.website")}</span>
              </li>
              <li className="flex items-start gap-2.5 text-white/70 text-sm">
                <MapPin size={15} className="text-[#C8972A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{t("contact.gov")}</span>
              </li>
            </ul>

            {/* Gov logos placeholder */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["WCAG 2.1 AA", "ISO 27001", "Qatar 2030"].map((badge) => (
                <span
                  key={badge}
                  className="text-xs px-2.5 py-1 rounded-full border border-white/20 text-white/60"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <span>© 2026 بصير · {t("rights")}</span>
          <div className="flex gap-4">
            {(["privacy", "accessibility", "terms"] as const).map((k) => (
              <Link
                key={k}
                href={`/${locale}/contact`}
                className="hover:text-white/70 transition-colors"
              >
                {t(`links.${k}`)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
