"use client";
import { useLocale } from "next-intl";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, MessageCircle, Users, Newspaper } from "lucide-react";

export default function CommunityPage() {
  const locale = useLocale();
  const isAr = locale === "ar";

  const sections = [
    {
      Icon: Calendar,
      title: isAr ? "تقويم الفعاليات" : "Events Calendar",
      desc: isAr
        ? "فعاليات وورش عمل وجلسات دعم مجتمعي مخصصة لذوي الإعاقة البصرية في قطر"
        : "Events, workshops and peer support sessions for the visually impaired community in Qatar",
      events: isAr
        ? ["ورشة برايل — 5 يوليو","يوم المتطوع — 10 يوليو","جلسة دعم نفسي — 15 يوليو"]
        : ["Braille Workshop — July 5","Volunteer Day — July 10","Peer Support Session — July 15"],
    },
    {
      Icon: MessageCircle,
      title: isAr ? "منتديات المجتمع" : "Community Forums",
      desc: isAr
        ? "تواصل مع أعضاء المجتمع وشارك تجاربك ونصائحك"
        : "Connect with community members and share your experiences and tips",
      events: isAr
        ? ["أحدث تقنيات قارئ الشاشة","نصائح للتنقل في الدوحة","فرص العمل لذوي الإعاقة البصرية"]
        : ["Latest screen reader tech","Tips for navigating Doha","Job opportunities for the visually impaired"],
    },
    {
      Icon: Users,
      title: isAr ? "دعم الأقران" : "Peer Support",
      desc: isAr
        ? "شبكة من الزملاء تفهم تحدياتك وتساعدك على تجاوزها"
        : "A network of peers who understand your challenges and help you overcome them",
      events: isAr
        ? ["مجموعة دعم نفسي أسبوعية","شبكة الطلاب المكفوفين","برنامج التوجيه المهني"]
        : ["Weekly emotional support group","Blind Students Network","Career Mentorship Program"],
    },
    {
      Icon: Newspaper,
      title: isAr ? "النشرة الإخبارية" : "Newsletter",
      desc: isAr
        ? "ابق على اطلاع بأحدث أخبار بصير والمجتمع"
        : "Stay updated with the latest Baseer and community news",
      events: isAr
        ? ["إطلاق ميزة جديدة في التطبيق","تقرير تأثير الربع الثاني 2026","حدث مجتمعي قادم"]
        : ["New app feature launch","Q2 2026 impact report","Upcoming community event"],
    },
  ];

  return (
    <>
      <Navbar />
      <main id="main" className="pt-16">
        <section
          className="py-20 text-center"
          style={{ background: "linear-gradient(135deg, #8B1A2F 0%, #5C0F1F 100%)" }}
        >
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-5xl font-black text-white mb-4">
              {isAr ? "مجتمع بصير" : "بصير Community"}
            </h1>
            <p className="text-white/75 text-xl">
              {isAr
                ? "مجتمع متكامل يربط المكفوفين والمتطوعين والداعمين"
                : "A complete community connecting the blind, volunteers, and supporters"}
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sections.map(({ Icon, title, desc, events }) => (
                <div key={title} className="rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-7">
                  <div className="w-12 h-12 rounded-xl bg-[#8B1A2F] flex items-center justify-center mb-5">
                    <Icon size={22} className="text-[#F0D080]" />
                  </div>
                  <h2 className="text-xl font-black text-[#8B1A2F] mb-2">{title}</h2>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">{desc}</p>
                  <ul className="space-y-2">
                    {events.map((e) => (
                      <li key={e} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8972A] shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 text-sm font-semibold text-[#8B1A2F] hover:text-[#C8972A] transition-colors">
                    {isAr ? "استكشف ←" : "Explore →"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
