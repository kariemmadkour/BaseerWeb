"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Eye } from "lucide-react";
import GoogleLoginButton from "./GoogleLoginButton";

export default function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const isAr = locale === "ar";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/app`, label: t("app") },
    { href: `/${locale}/volunteer`, label: t("volunteer") },
    { href: `/${locale}/community`, label: t("community") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const otherLocale = isAr ? "en" : "ar";
  const otherLabel = isAr ? "EN" : "عربي";

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#8B1A2F]/98 backdrop-blur-md shadow-lg"
          : "bg-[#8B1A2F]"
      }`}
    >
      <a href="#main" className="skip-link">
        {isAr ? "انتقل للمحتوى" : "Skip to content"}
      </a>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 text-white font-bold text-xl hover:opacity-90 transition-opacity"
          aria-label="بصير"
        >
          <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
            <Eye size={18} className="text-[#F0D080]" />
          </span>
          <span className="text-2xl" style={{ fontFamily: "Tahoma, Arial, sans-serif" }}>
            بصير
          </span>
        </Link>

        {/* Desktop links */}
        <ul
          className={`hidden md:flex items-center gap-1 ${isAr ? "flex-row-reverse" : ""}`}
          role="list"
        >
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-3 py-1.5 text-sm text-white/90 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right-side actions */}
        <div className={`hidden md:flex items-center gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
          <Link
            href={`/${otherLocale}`}
            className="text-sm text-white/80 hover:text-white transition-colors px-2 py-1 rounded border border-white/20 hover:border-white/50"
          >
            {otherLabel}
          </Link>
          <GoogleLoginButton />
          <Link
            href={`/${locale}/contact`}
            className="bg-[#C8972A] hover:bg-[#b8871a] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            {t("requestHelp")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#6B1022] border-t border-white/10 px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block px-3 py-2.5 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="pt-3 flex gap-2">
            <Link
              href={`/${otherLocale}`}
              className="flex-1 text-center text-sm text-white/80 border border-white/30 rounded-lg py-2"
              onClick={() => setOpen(false)}
            >
              {otherLabel}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="flex-1 text-center bg-[#C8972A] text-white text-sm font-semibold rounded-lg py-2"
              onClick={() => setOpen(false)}
            >
              {t("requestHelp")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
