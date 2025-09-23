"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

// Not: Navbar’daki linklerle birebir aynı tutuldu. İlerde ortak bir dosyaya
// (ör. src/config/nav.ts) taşınabilir.
const socialLinks = [
  {
    href: "https://www.linkedin.com/company/ostimtech-munazara-hitabet",
    icon: "mdi:linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/ostim_munazara/",
    icon: "mdi:instagram",
    label: "Instagram",
  },
];

const navLinks = [
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/dokumantasyon", label: "Dökümantasyon" },
  {
    label: "Uygulamalar",
    dropdown: [
      { href: "/uygulamalar/konum-ayarla", label: "Konum Ayarla" },
      { href: "/uygulamalar/rastgele-konu", label: "Rastgele Konu" },
    ],
  },
  { href: "/etkinlik-takvimi", label: "Etkinlik Takvimi" },
  { href: "/blog", label: "Blog" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white text-neutral-700">
      {/* Üst alan */}
      <div className="mx-auto max-w-7xl px-4 sm:px-0 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Marka & kısa açıklama */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logos/logo.png"
                alt="Logo"
                width={44}
                height={44}
                className="object-contain"
              />
              <span className="font-semibold text-neutral-900">
                Ostim - Münazara ve Hitabet Topluluğu
              </span>
            </Link>
            <p className="mt-4 text-sm leading-6 text-neutral-600">
              Düşün, tartış, ifade et. Topluluğumuz; münazara, hitabet ve
              eleştirel düşünme becerilerini geliştirmek isteyen herkes için
              etkinlikler ve kaynaklar sunar.
            </p>
            {/* Sosyal medya */}
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 hover:bg-neutral-50 transition"
                >
                  <Icon icon={s.icon} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Kurumsal */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">Kurumsal</h3>
            <ul className="mt-4 space-y-2">
              {navLinks
                .filter(
                  (l) =>
                    "href" in l && ["/hakkimizda"].includes((l as any).href)
                )
                .map((l) => (
                  <li key={l.label}>
                    <Link href={(l as any).href} className="hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Kaynaklar */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              Kaynaklar
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks
                .filter(
                  (l) =>
                    "href" in l &&
                    ["/dokumantasyon", "/blog"].includes((l as any).href)
                )
                .map((l) => (
                  <li key={l.label}>
                    <Link href={(l as any).href} className="hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Etkinlikler & Uygulamalar (accordion mobil) */}
          <div className="lg:col-span-1">
            <div className="hidden sm:block">
              <h3 className="text-sm font-semibold text-neutral-900">
                Etkinlikler
              </h3>
              <ul className="mt-4 space-y-2">
                {navLinks
                  .filter(
                    (l) =>
                      "href" in l &&
                      ["/etkinlik-takvimi"].includes((l as any).href)
                  )
                  .map((l) => (
                    <li key={l.label}>
                      <Link
                        href={(l as any).href}
                        className="hover:text-primary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
              </ul>

              <h3 className="mt-8 text-sm font-semibold text-neutral-900">
                Uygulamalar
              </h3>
              <ul className="mt-4 space-y-2">
                {(navLinks.find((l) => "dropdown" in l) as any)?.dropdown?.map(
                  (d: any) => (
                    <li key={d.label}>
                      <Link href={d.href} className="hover:text-primary">
                        {d.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Mobile accordions */}
            <div className="sm:hidden space-y-4">
              <details className="group rounded-lg border border-neutral-200 p-3">
                <summary className="list-none flex items-center justify-between cursor-pointer select-none">
                  <span className="text-sm font-semibold text-neutral-900">
                    Etkinlikler
                  </span>
                  <Icon
                    icon="mdi:chevron-down"
                    width={18}
                    height={18}
                    className="transition group-open:rotate-180"
                  />
                </summary>
                <ul className="mt-3 space-y-2">
                  <li>
                    <Link
                      href="/etkinlik-takvimi"
                      className="hover:text-primary"
                    >
                      Etkinlik Takvimi
                    </Link>
                  </li>
                </ul>
              </details>

              <details className="group rounded-lg border border-neutral-200 p-3">
                <summary className="list-none flex items-center justify-between cursor-pointer select-none">
                  <span className="text-sm font-semibold text-neutral-900">
                    Uygulamalar
                  </span>
                  <Icon
                    icon="mdi:chevron-down"
                    width={18}
                    height={18}
                    className="transition group-open:rotate-180"
                  />
                </summary>
                <ul className="mt-3 space-y-2">
                  {(
                    navLinks.find((l) => "dropdown" in l) as any
                  )?.dropdown?.map((d: any) => (
                    <li key={d.label}>
                      <Link href={d.href} className="hover:text-primary">
                        {d.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Alt şerit */}
      <div className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-0 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-sm text-neutral-600">
            © {year} Ostim Münazara ve Hitabet Topluluğu. Tüm hakları saklıdır.
          </p>
          <ul className="flex flex-col sm:flex-row items-start sm:items-center gap-5 text-sm">
            <li>
              <Link href="/gizlilik" className="hover:text-primary">
                Gizlilik
              </Link>
            </li>
            <li>
              <Link href="/kullanim-sartlari" className="hover:text-primary">
                Kullanım Şartları
              </Link>
            </li>
            <li>
              <Link
                href="https://www.poyrazavsever.com"
                target="_blank"
                className="hover:underline flex items-center gap-1"
              >
                <span>Created by</span>
                <span className="font-wind text-lg text-primary">Poyraz Avsever</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
