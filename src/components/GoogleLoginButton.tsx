"use client";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (cfg: object) => void;
          renderButton: (el: HTMLElement, cfg: object) => void;
          prompt: () => void;
        };
      };
    };
  }
}

interface GoogleUser {
  name: string;
  email: string;
  picture: string;
}

// Replace with real Google OAuth Client ID when available
const CLIENT_ID =
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ||
  "YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com";

export default function GoogleLoginButton() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const btnRef = useRef<HTMLDivElement>(null);
  const [user, setUser] = useState<GoogleUser | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || CLIENT_ID.startsWith("YOUR_")) return;

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.google?.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: (response: { credential: string }) => {
          // Decode JWT payload (public data only — not sensitive)
          const payload = JSON.parse(
            atob(response.credential.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"))
          );
          setUser({ name: payload.name, email: payload.email, picture: payload.picture });
        },
        auto_select: false,
        cancel_on_tap_outside: true,
        ux_mode: "popup",
      });
      if (btnRef.current) {
        window.google?.accounts.id.renderButton(btnRef.current, {
          type: "standard",
          theme: "filled_white",
          size: "medium",
          text: "signin_with",
          shape: "rectangular",
          logo_alignment: "left",
          locale: isAr ? "ar" : "en",
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [isAr]);

  if (user) {
    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-full border border-white/30 hover:border-white/60 transition-colors px-2 py-1"
          aria-label={user.name}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={user.picture}
            alt={user.name}
            className="w-7 h-7 rounded-full"
            referrerPolicy="no-referrer"
          />
          <span className="text-white text-xs hidden lg:block max-w-[90px] truncate">
            {user.name.split(" ")[0]}
          </span>
        </button>
        {open && (
          <div
            className={`absolute top-10 ${isAr ? "left-0" : "right-0"} bg-white rounded-xl shadow-xl py-2 min-w-[180px] z-50`}
          >
            <p className="px-4 py-1 text-xs text-gray-400 truncate">{user.email}</p>
            <hr className="my-1 border-gray-100" />
            <button
              onClick={() => { setUser(null); setOpen(false); }}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
            >
              {isAr ? "تسجيل الخروج" : "Sign out"}
            </button>
          </div>
        )}
      </div>
    );
  }

  // If no Client ID configured, render a styled placeholder button
  if (CLIENT_ID.startsWith("YOUR_")) {
    return (
      <button
        onClick={() => alert(isAr ? "تسجيل الدخول بـ Google — قريباً" : "Google Sign-In — coming soon")}
        className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 text-xs font-medium px-3 py-1.5 rounded border border-gray-200 shadow-sm transition-colors"
        aria-label={isAr ? "الدخول بحساب Google" : "Sign in with Google"}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        {isAr ? "الدخول بـ Google" : "Sign in with Google"}
      </button>
    );
  }

  return <div ref={btnRef} />;
}
