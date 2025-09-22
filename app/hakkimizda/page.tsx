"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function Hakkimizda() {
  return (
    <main className="bg-white text-neutral-800">
      {/* Hero (About giriş) */}
      <section className="pt-16 sm:pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold text-neutral-700">
                Hakkımızda
              </h1>
              <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-2xl">
                Ostim Münazara ve Hitabet Topluluğu; fikirlerin güvenle ifade
                edildiği, eleştirel düşünmenin ve ikna edici iletişimin
                geliştirildiği bir öğrenci topluluğudur. Atölyeler, prova
                maçları ve etkinliklerle üyelerimizi sahneye hazırlarız.
              </p>
            </div>
            <div className="flex items-start gap-5">
              <span
                aria-hidden
                className="hidden sm:block w-px h-14 bg-neutral-300 mt-1"
              />
              <div>
                <h2 className="text-lg font-semibold text-neutral-900">
                  Misyonumuz
                </h2>
                <p className="mt-2 text-sm text-neutral-600 max-w-sm">
                  Gençlerin düşüncelerini yapılandırılmış bir akışla
                  savunmasını, aktif dinlemeyi ve adil tartışma kültürünü
                  yaygınlaştırmak.
                </p>
                <Link
                  href="/etkinlik-takvimi"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Etkinlik Takvimi
                  <Icon icon="mdi:arrow-right" width={16} height={16} />
                </Link>
              </div>
            </div>
          </div>

          {/* Geniş görsel */}
          <div className="mt-8">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-neutral-200">
              <Image
                src="/images/about-hero.jpg"
                alt="Topluluk etkinliklerinden bir kare"
                width={1600}
                height={900}
                className="h-[220px] sm:h-[320px] lg:h-[420px] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-semibold">Değerlerimiz</h3>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "mdi:lightbulb-on-outline",
                title: "Eleştirel Düşünme",
                text: "Kanıta dayalı akıl yürütme, tarafsız analiz ve güçlü argümantasyon.",
              },
              {
                icon: "mdi:account-voice",
                title: "Hitabet",
                text: "Net, etkili ve saygılı ifade; sahnede özgüven.",
              },
              {
                icon: "mdi:handshake-outline",
                title: "Saygı",
                text: "Karşıt görüşlere açık olma, adil ve kapsayıcı ortam.",
              },
              {
                icon: "mdi:target-variant",
                title: "Süreklilik",
                text: "Düzenli pratik, ölçülebilir gelişim ve mentorluk.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-neutral-200 p-5"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    icon={v.icon}
                    width={22}
                    height={22}
                    className="text-neutral-700"
                  />
                  <h4 className="font-semibold">{v.title}</h4>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neler Yapıyoruz */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Neler Yapıyoruz?
          </h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: "mdi:school-outline",
                title: "Atölyeler",
                text: "Hitabet 101, hızlı düşünme, argüman akışı ve çürütme teknikleri.",
              },
              {
                icon: "mdi:forum-outline",
                title: "Prova Maçları",
                text: "BP/ASIL formatlarında hakem geri bildirimiyle pratik turlar.",
              },
              {
                icon: "mdi:calendar-outline",
                title: "Etkinlikler",
                text: "Stand günleri, konuk konuşmacılar ve üniversiteler arası turnuvalar.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-neutral-200 p-5 bg-white"
              >
                <div className="flex items-center gap-3">
                  <Icon
                    icon={c.icon}
                    width={22}
                    height={22}
                    className="text-neutral-700"
                  />
                  <h4 className="font-semibold">{c.title}</h4>
                </div>
                <p className="mt-2 text-sm text-neutral-600">{c.text}</p>
                <Link
                  href="/etkinlik-takvimi"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Takvimi Gör
                  <Icon icon="mdi:arrow-right" width={16} height={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sayılarla Topluluk */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-semibold">
            Sayılarla Topluluk
          </h3>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Aktif Üye", value: 48 },
              { label: "Yıllık Etkinlik", value: 25 },
              { label: "Prova Turu", value: 60 },
              { label: "Eğitmen / Mentor", value: 6 },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-neutral-200 p-5 text-center"
              >
                <div className="text-3xl font-semibold text-neutral-900">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-neutral-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zaman Çizelgesi */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-semibold">Kısa Kronoloji</h3>
          <ol className="mt-6 relative border-s border-neutral-200">
            {[
              {
                year: "2023",
                title: "Kuruluş",
                text: "İlk çekirdek ekibin bir araya gelmesi ve düzenli buluşmalar.",
              },
              {
                year: "2024",
                title: "İlk Turnuva",
                text: "Üniversiteler arası katılım ile ilk organizasyon.",
              },
              {
                year: "2025",
                title: "Topluluk Genişlemesi",
                text: "Atölye serileri ve ortak etkinliklerle büyüme.",
              },
            ].map((t, i) => (
              <li key={t.year} className="ms-6 py-4">
                <span className="absolute -start-2.5 mt-1.5 h-2.5 w-2.5 rounded-full bg-neutral-400" />
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h4 className="font-semibold text-neutral-900">
                      {t.title}
                    </h4>
                    <p className="mt-1 text-sm text-neutral-600 max-w-prose">
                      {t.text}
                    </p>
                  </div>
                  <span className="text-sm text-neutral-500">{t.year}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Ekibimiz (özet) */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <h3 className="text-2xl sm:text-3xl font-semibold">Ekibimiz</h3>
            <Link
              href="/hakkimizda#ekip"
              className="hidden sm:inline-flex text-sm font-medium text-primary hover:underline"
            >
              Tüm Ekip
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-neutral-200 p-4"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100" />
                <div className="mt-3">
                  <div className="font-semibold">Üye Adı</div>
                  <div className="text-sm text-neutral-600">
                    Görev / Sorumluluk
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İletişim / CTA */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-neutral-200 p-6 sm:p-8 bg-white">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Bize Katılın
                </h3>
                <p className="mt-1 text-sm text-neutral-600 max-w-prose">
                  Atölye ve prova maçlarına katılarak topluluğun bir parçası
                  olun. İlk buluşmanızı takvimden seçebilirsiniz.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="/etkinlik-takvimi"
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 font-medium hover:bg-neutral-50"
                >
                  <Icon icon="mdi:calendar" width={18} height={18} />
                  Etkinlik Takvimi
                </Link>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 font-medium hover:bg-neutral-50"
                >
                  <Icon icon="mdi:email-outline" width={18} height={18} />
                  İletişim
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
