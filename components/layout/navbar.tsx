"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { div } from "framer-motion/client";

const socialLinks = [
  {
    href: "https://www.linkedin.com/",
    icon: "mdi:linkedin",
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/",
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
      {
        href: "https://konum.ostimmunazara.com",
        label: "Konum Ayarla",
        desc: "Maçta rastgele bir konum belirlemenizi sağlar.",
      },
      {
        href: "https://rastgele.ostimmunazara.com",
        label: "Rastgele Konu",
        desc: "Rastgele bir münazara konusu önerir.",
      },
    ],
  },
  { href: "/etkinlik-takvimi", label: "Etkinlik Takvimi" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const [appsOpen, setAppsOpen] = React.useState(false);
  const pathname = usePathname();

  // Lock body scroll when full-page menu is open
  React.useEffect(() => {
    if (openMenu) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }, [openMenu]);

  // Close overlays on route change
  React.useEffect(() => {
    setOpenMenu(false);
    setAppsOpen(false);
  }, [pathname]);

  // Esc to close
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(false);
        setAppsOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="border-b border-neutral-200 bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-0">
        {/* Top Section */}
        <div className="flex justify-between items-center px-8 py-2 text-sm bg-primary rounded-b-xl">
          {/* Left: Social (always visible) */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-neutral-100 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Icon icon={link.icon} width={22} height={22} />
              </motion.a>
            ))}
          </motion.div>

          {/* Right: Club Name (hidden on small screens) */}
          <motion.div
            className="font-medium tracking-wide text-neutral-100 hidden md:block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Ostim - Münazara ve Hitabet Topluluğu
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center px-4 md:px-8 py-3 text-base">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Image
                src="/logos/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) =>
              // Mega dropdown for "Uygulamalar"
              (link as any).dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setAppsOpen(true)}
                  onMouseLeave={() => setAppsOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 font-medium text-neutral-800 hover:text-primary transition-colors focus:outline-none"
                    aria-haspopup="true"
                    aria-expanded={appsOpen}
                    onClick={() => setAppsOpen((s) => !s)}
                  >
                    {link.label}
                    <Icon icon="mdi:chevron-down" width={18} height={18} />
                  </button>

                  <AnimatePresence>
                    {appsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+10px)] z-30"
                      >
                        <div className="grid grid-cols-2 gap-3 p-4 w-[520px] rounded-2xl border border-neutral-200 bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] backdrop-blur">
                          {(link as any).dropdown.map((item: any) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              className="group rounded-xl p-3 hover:bg-red-50/20 transition-colors border border-transparent hover:border-red-100"
                            >
                              <div className="flex items-start gap-3">
                                <div className="shrink-0 rounded-xl border border-neutral-200 p-2">
                                  <Icon
                                    icon="mdi:apps"
                                    width={20}
                                    height={20}
                                  />
                                </div>
                                <div>
                                  <div className="font-semibold text-neutral-900 group-hover:text-primary">
                                    {item.label}
                                  </div>
                                  {item.desc && (
                                    <p className="text-sm text-neutral-600 leading-snug mt-0.5">
                                      {item.desc}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </Link>
                          ))}
                          <div className="col-span-2 mt-1 border-t pt-3 text-xs text-neutral-500">
                            İpucu: Uygulamalar bölümünde topluluğa özel üretken
                            araçlar & kaynaklar yer alır.
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Link
                    href={(link as any).href}
                    className="font-medium text-neutral-800 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
          </div>

          {/* Mobile Burger */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-neutral-200 hover:bg-neutral-50 active:scale-95 transition"
            aria-label={openMenu ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={openMenu}
            onClick={() => setOpenMenu((s) => !s)}
          >
            <Icon
              icon={openMenu ? "mdi:close" : "mdi:menu"}
              width={22}
              height={22}
            />
          </button>
        </div>

        {/* Fullscreen Mobile Menu */}
        <AnimatePresence>
          {openMenu && (
            <motion.aside
              key="mobile-menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              role="dialog"
              aria-modal="true"
            >
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setOpenMenu(false)}
              />

              {/* Panel */}
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 28 }}
                className="absolute inset-x-0 bottom-0 top-0 bg-white"
              >
                <div className="flex items-center justify-between px-5 py-4 border-b">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/logos/logo.png"
                      alt="Logo"
                      width={36}
                      height={36}
                    />
                    <span className="font-semibold">
                      Ostim - Münazara ve Hitabet
                    </span>
                  </div>
                  <button
                    className="inline-flex w-10 h-10 items-center justify-center rounded-xl border border-neutral-200"
                    onClick={() => setOpenMenu(false)}
                    aria-label="Menüyü kapat"
                  >
                    <Icon icon="mdi:close" width={22} height={22} />
                  </button>
                </div>

                <div className="px-6 py-6 space-y-1">
                  {navLinks.map((l) => (
                    <div key={l.label}>
                      {"dropdown" in l ? (
                        <details className="group">
                          <summary className="list-none flex items-center justify-between py-3 text-lg font-semibold text-neutral-900 cursor-pointer">
                            <span>{l.label}</span>
                            <Icon
                              icon="mdi:chevron-down"
                              width={20}
                              height={20}
                              className="transition-transform group-open:rotate-180"
                            />
                          </summary>
                          <div className="pl-3 pb-3 space-y-1">
                            {(l as any).dropdown.map((d: any) => (
                              <Link
                                key={d.label}
                                href={d.href}
                                className="block py-2 text-neutral-700 hover:text-primary"
                              >
                                {d.label}
                              </Link>
                            ))}
                          </div>
                        </details>
                      ) : (
                        <Link
                          href={(l as any).href}
                          className="block py-3 text-lg font-semibold text-neutral-900"
                        >
                          {l.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-auto px-6 py-6 border-t">
                  <div className="text-sm text-neutral-500 mb-3">
                    Bizi takip edin
                  </div>
                  <div className="flex gap-4">
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-neutral-200 hover:bg-neutral-50"
                      >
                        <Icon icon={s.icon} width={22} height={22} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
