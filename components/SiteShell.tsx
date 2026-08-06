"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type SiteSettings = {
  siteName: string;
  tagline: string;
  contactEmail: string;
  contactPhone: string;
  footerText: string;
};

const defaultSettings: SiteSettings = {
  siteName: "CMS Pro",
  tagline: "Modern content management",
  contactEmail: "hello@cmspro.com",
  contactPhone: "+1 555 0123",
  footerText: "A modern content experience for growing brands.",
};

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const storedSettings = window.localStorage.getItem("cms-pro-settings");

      if (storedSettings) {
        const parsed = JSON.parse(storedSettings) as Partial<SiteSettings>;
        setSettings({
          ...defaultSettings,
          ...parsed,
        });
      }
    } catch {
      // Ignore invalid stored data
    }
  }, []);

  return (
    <>
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <Link href="/" className="text-xl font-semibold tracking-tight text-slate-900">
              {settings.siteName}
            </Link>
            <p className="text-sm text-slate-500">{settings.tagline}</p>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>
            <Link href="#pages" className="transition hover:text-blue-600">
              Pages
            </Link>
            <Link href="/contact" className="transition hover:text-blue-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>{settings.footerText}</p>
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${settings.contactEmail}`} className="transition hover:text-blue-600">
              {settings.contactEmail}
            </a>
            <span>{settings.contactPhone}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
