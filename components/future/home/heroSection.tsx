"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

type HeroSectionProps = {
  imageSrc?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  imageSrc = "/images/hero.jpeg",
}) => {
  return (
    <section className="py-24 sm:py-0 sm:min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        {/* Üst satır: Sol büyük başlık + sağ açıklama */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Sol başlık */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold text-neutral-700">
              Düşün, Konuş, <br className="block" />{" "}
              <span className="font-wind text-primary">İkna Et.</span>
            </h1>
          </div>

          {/* Ayırıcı + Sağ blok */}
          <div className="flex items-start gap-5">
            <span
              aria-hidden
              className="hidden sm:block w-px h-14 bg-neutral-300 mt-1"
            />
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">
                Bloglarımızı Okuyun
              </h2>
              <p className="mt-2 text-sm text-neutral-600 max-w-sm">
                Münazara, hitabet ve eleştirel düşünme üzerine güncel içerikler.
                Etkinlik özetleri, pratik ipuçları ve topluluk duyuruları
                burada.
              </p>
              <Link
                href="/blog"
                className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Tüm Yazılar
                <Icon icon="mdi:arrow-right" width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Görsel + alt overlay kartı */}
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-3xl bg-white border border-neutral-200">
            <Image
              src={imageSrc}
              alt="Ostim Münazara ve Hitabet - Kahraman görsel"
              width={1600}
              height={900}
              className="h-[220px] sm:h-[320px] lg:h-[420px] w-full object-cover"
              priority
            />

            {/* Köşe etiket/kart */}
            <div className="absolute -bottom-4 left-4">
              <div className="rounded-2xl bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.25)] border border-neutral-200 p-4 w-[88vw] max-w-[380px]">
                <h3 className="text-base font-semibold text-neutral-900">
                  Münazara Dünyasında Gündem
                </h3>
                <p className="mt-1 text-sm text-neutral-600 line-clamp-2">
                  Güncel etkinlikler, seçili konuşmalar ve argümantasyon
                  teknikleri. Bir sonraki buluşmada siz de yerinizi alın.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
