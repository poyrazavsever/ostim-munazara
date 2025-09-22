"use client";
import React, { useRef, useState } from "react";
import { kategoriler, konular, Konu } from "./konular";
import { Icon } from "@iconify/react";

const RastgeleKonu: React.FC = () => {
  const [seciliKonu, setSeciliKonu] = useState<Konu | null>(null);
  const [seciliKategori, setSeciliKategori] = useState<string>("");
  const sonucRef = useRef<HTMLDivElement | null>(null);

  const handleRastgeleKonu = () => {
    let filtreli = konular;
    if (seciliKategori) {
      filtreli = konular.filter((k) => k.kategori === seciliKategori);
    }
    if (filtreli.length === 0) {
      setSeciliKonu(null);
      return;
    }
    const rastgele = filtreli[Math.floor(Math.random() * filtreli.length)];
    setSeciliKonu(rastgele);
    // Sonuca kaydır
    setTimeout(
      () =>
        sonucRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        }),
      60
    );
  };

  const handleKategoriToggle = (kategori: string) => {
    setSeciliKategori((prev) => (prev === kategori ? "" : kategori));
    setSeciliKonu(null);
  };

  const filteredTopics = seciliKategori
    ? konular.filter((k) => k.kategori === seciliKategori)
    : konular;

  return (
    <main className="bg-neutral-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        <h1 className="text-3xl font-bold mb-8 text-primary flex items-center gap-2">
          <Icon
            icon="mdi:shuffle-variant"
            width={32}
            height={32}
            className="text-primary"
          />
          Rastgele Konu Bul
        </h1>

        {/* Kategoriler */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-6">
          {kategoriler.map((kategori) => {
            const aktif = seciliKategori === kategori;
            return (
              <button
                key={kategori}
                onClick={() => handleKategoriToggle(kategori)}
                className={`font-semibold border rounded-xl px-4 py-3 flex items-center justify-between gap-2 transition-colors ${
                  aktif
                    ? "bg-primary text-white border-primary"
                    : "bg-white border-neutral-300 hover:bg-neutral-100 text-neutral-700"
                }`}
                aria-pressed={aktif}
              >
                <span className="truncate">{kategori}</span>
                <Icon icon="mdi:chevron-down" width={18} height={18} />
              </button>
            );
          })}
        </div>

        {/* Kontroller */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={handleRastgeleKonu}
            className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-pink-900 transition-colors flex items-center gap-2"
          >
            <Icon icon="mdi:shuffle-variant" width={20} height={20} />
            Rastgele Konu Bul
          </button>

          <button
            onClick={() => {
              setSeciliKonu(null);
              setSeciliKategori("");
            }}
            className="bg-neutral-200 text-neutral-700 px-6 py-3 rounded-xl font-semibold shadow hover:bg-neutral-300 transition-colors flex items-center gap-2"
          >
            <Icon icon="mdi:refresh" width={20} height={20} />
            Sıfırla
          </button>
        </div>

        {/* Seçili konu detay kartı */}
        {seciliKonu && (
          <div
            ref={sonucRef}
            className="bg-white rounded-xl border border-neutral-200 p-6 my-12 max-w-7xl mx-auto animate-fade-in"
          >
            <h2 className="text-xl font-bold text-neutral-700 mb-2 flex items-center gap-2">
              {seciliKonu.ad}
            </h2>
            <div className="mb-2 text-sm text-neutral-600 flex items-center gap-2">
              <Icon icon="mdi:tag-outline" width={18} height={18} />
              <span className="font-semibold">Kategori:</span>{" "}
              {seciliKonu.kategori}
            </div>
            <div className="mb-2 text-sm text-neutral-600 flex items-center gap-2">
              <Icon icon="mdi:calendar-month-outline" width={18} height={18} />
              <span className="font-semibold">Veriliş Tarihi:</span>{" "}
              {seciliKonu.tarih}
            </div>
            <div className="mb-2 text-sm text-neutral-600 flex items-center gap-2">
              <Icon icon="mdi:map-marker-outline" width={18} height={18} />
              <span className="font-semibold">Verilen Yer:</span>{" "}
              {seciliKonu.yer}
            </div>
          </div>
        )}

        {/* Filtrelenmiş konu listesi (kartlar) */}
        <div className="mb-8">
          {filteredTopics.length === 0 ? (
            <div className="text-center text-neutral-500 py-16">
              Seçili kategoride konu bulunamadı.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTopics.map((konu) => (
                <article
                  key={konu.ad}
                  onClick={() => setSeciliKonu(konu)}
                  className={`cursor-pointer p-4 rounded-xl border bg-white hover:shadow-sm transition-all ${
                    seciliKonu?.ad === konu.ad
                      ? "border-primary ring-2 ring-primary/10"
                      : "border-neutral-200"
                  }`}
                >
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2">
                    {konu.ad}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {konu.kategori} • {konu.tarih}
                  </p>
                  <p className="text-xs text-neutral-500 mt-2">{konu.yer}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default RastgeleKonu;
