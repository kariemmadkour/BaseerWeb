"use client";
import { useTranslations, useLocale } from "next-intl";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isAr = locale === "ar";
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        {/* Hero */}
        <section
          className="py-20 text-center"
          style={{ background: "linear-gradient(135deg, #8B1A2F 0%, #5C0F1F 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-black text-white mb-4">{t("title")}</h1>
            <p className="text-white/75 text-xl">{t("subtitle")}</p>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-black text-[#8B1A2F] mb-8">
                  {isAr ? "معلومات التواصل" : "Contact Information"}
                </h2>
                <div className="space-y-6">
                  {[
                    { Icon: Mail, label: t("email"), value: "info@baseer.qa" },
                    { Icon: Phone, label: t("phone"), value: "+974 4000 0000" },
                    { Icon: MapPin, label: isAr ? "العنوان" : "Address", value: t("address") },
                  ].map(({ Icon, label, value }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#8B1A2F] flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-[#F0D080]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                        <p className="text-gray-700 font-medium text-sm leading-relaxed">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="mt-10 rounded-2xl overflow-hidden bg-[#8B1A2F]/5 border border-[#8B1A2F]/10 h-48 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <MapPin size={32} className="mx-auto mb-2 text-[#8B1A2F]/40" />
                    <p className="text-sm">{isAr ? "الدوحة، قطر" : "Doha, Qatar"}</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                {sent ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Check size={28} className="text-green-600" strokeWidth={3} />
                    </div>
                    <h3 className="text-xl font-black text-gray-800 mb-2">
                      {isAr ? "تم إرسال رسالتك!" : "Message sent!"}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {isAr ? "سنتواصل معك قريباً" : "We will get back to you soon"}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { key: "name", label: t("name"), type: "text" },
                      { key: "email", label: t("email"), type: "email" },
                    ].map(({ key, label, type }) => (
                      <div key={key}>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          {label}
                        </label>
                        <input
                          type={type}
                          required
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A2F]/30 focus:border-[#8B1A2F] transition-colors"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        {t("message")}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#8B1A2F]/30 focus:border-[#8B1A2F] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#8B1A2F] hover:bg-[#6B1022] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      {t("send")}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
