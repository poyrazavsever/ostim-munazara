"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

// Minimal, kurumsal CTA. Sade makale kutusu görünümü.
// Kullanım: <EventCTA />
// İstersen props ile özelleştir: <EventCTA title="..." dateText="23–26 Eylül" venue="F Blok, 3. Kat" />

type Props = {
  title?: string;
  dateText?: string; // serbest tarih metni
  venue?: string;
  subtitle?: string;
  href?: string; // Etkinlik takvim sayfasına basit link (opsiyonel)
};

export default function EventCTA({
  title = "Ostim Teknik Üniversitesi Stand Günleri",
  dateText = "23–26 Eylül",
  venue = "F Blok, 3. Kat",
  href = "/etkinlik-takvimi",
}: Props) {
  return (
    <section className="my-24 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
              Yaklaşan <span className="font-wind text-primary">Etkinlik</span>
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-prose">Etkinlik takvimini kontrol edereke yaklaşan etkinlikleri görebilirsin.</p>
          </div>
          {href && (
            <Link
              href={href}
              className="hidden sm:inline-flex text-sm font-medium text-primary hover:underline"
            >
              Etkinlik Takvimi
            </Link>
          )}
        </div>

        {/* Kart */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.35 }}
          className="rounded-2xl border border-neutral-200 bg-white"
        >
          <div className="p-5 sm:p-6 lg:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Sol: Başlık */}
            <div className="md:col-span-2">
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                {title}
              </h3>
              <p className="mt-1.5 text-sm text-neutral-600">
                Ziyaretinizi bekliyoruz.
              </p>
            </div>

            {/* Sağ: Bilgiler */}
            <div className="md:col-span-1">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Icon
                    icon="mdi:calendar"
                    width={18}
                    height={18}
                    className="text-neutral-700"
                  />
                  <span className="text-neutral-800">{dateText}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon
                    icon="mdi:map-marker"
                    width={18}
                    height={18}
                    className="text-neutral-700"
                  />
                  <span className="text-neutral-800">{venue}</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
