"use client";
import React from "react";
import Image from "next/image";

export default function Hakkimizda() {
  return (
    <main className="text-neutral-800">
      {/* Hero (About giriş) */}
      <section className="pt-16 sm:pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold text-neutral-700">
                Bizler <br className="block" />{" "}
                <span className="font-wind text-primary">Hakkında.</span>
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
              </div>
            </div>
          </div>

          {/* Geniş görsel */}
          <div className="mt-8">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-neutral-200">
              <Image
                src="/images/about-hero.jpeg"
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

      {/* Zaman Çizelgesi */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-semibold">Kısa Kronoloji</h3>
          <ol className="mt-6 relative border-s border-neutral-200">
            {[
              {
                year: "2024 Ağustos",
                title: "Topluluk Kuruluşu",
                text: "İlk çekirdek ekibin bir araya gelmesi ve düzenli buluşmalar.",
              },
              {
                year: "2024 Aralık",
                title: "İlk Turnuva",
                text: "İTÜ - Yarı Açık Münazara Turnuvası'nda ilk deneyim.",
              },
              {
                year: "2025 Şubat",
                title: "Hacı Bayram Veli Turnuvası",
                text: "Hacı Bayram Veli Üniversitesi'nin ev sahipliğinde düzenlenen turnuvaya katılım.",
              },
              {
                year: "2025 Nisan",
                title: "Özyeğin Open Turnuvası",
                text: "Özyeğin Üniversitesi'nin ev sahipliğinde düzenlenen turnuvaya katılım.",
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

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-semibold">Ekibimiz</h3>
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
    </main>
  );
}
