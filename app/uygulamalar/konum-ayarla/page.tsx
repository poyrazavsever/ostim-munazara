"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

// Tipler
interface OyuncuTakim {
  isim: string;
  takim: string;
  konum: string;
}

interface TakimKonum {
  takim: string;
  konum: string;
}

const KONUMLAR = ["HA", "HK", "MA", "MK"];

const KonumAyarla: React.FC = () => {
  const [sistem, setSistem] = useState<1 | 2>(1);
  const [isimler, setIsimler] = useState<string[]>(Array(8).fill(""));
  const [takimlar, setTakimlar] = useState<string[]>(Array(4).fill(""));
  const [sonuc1, setSonuc1] = useState<OyuncuTakim[]>([]);
  const [sonuc2, setSonuc2] = useState<TakimKonum[]>([]);

  // Yardımcı: arrayi karıştır
  const shuffle = <T,>(arr: T[]): T[] => {
    return [...arr].sort(() => Math.random() - 0.5);
  };

  const handleSistem1 = () => {
    const karisikIsimler = shuffle(isimler);
    const takimlarOlustu: OyuncuTakim[] = [];
    for (let i = 0; i < 4; i++) {
      const oyuncular = karisikIsimler.slice(i * 2, i * 2 + 2);
      takimlarOlustu.push({
        isim: oyuncular.join(" & "),
        takim: `Takım ${i + 1}`,
        konum: KONUMLAR[i],
      });
    }
    setSonuc1(takimlarOlustu);
  };

  const handleSistem2 = () => {
    const karisikKonumlar = shuffle(KONUMLAR);
    const takimKonumlar: TakimKonum[] = takimlar.map((t, i) => ({
      takim: t || `Takım ${i + 1}`,
      konum: karisikKonumlar[i],
    }));
    setSonuc2(takimKonumlar);
  };

  return (
    <main className="min-h-screen py-10 px-4 max-w-7xl mx-auto sm:px-0">
      <h1 className="text-3xl font-bold mb-6 text-primary flex items-center gap-2">
        <Icon icon="mdi:map-marker" width={32} height={32} />
        Konum Ayarlama
      </h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSistem(1)}
          className={`px-6 py-2 rounded-xl font-semibold border transition-colors ${
            sistem === 1
              ? "bg-primary text-white"
              : "bg-white text-primary border-primary"
          }`}
        >
          Sistem 1 (İsimlerden Takım)
        </button>
        <button
          onClick={() => setSistem(2)}
          className={`px-6 py-2 rounded-xl font-semibold border transition-colors ${
            sistem === 2
              ? "bg-primary text-white"
              : "bg-white text-primary border-primary"
          }`}
        >
          Sistem 2 (Takımdan Konum)
        </button>
      </div>

      {/* Sistem 1 */}
      {sistem === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">8 İsim Girin</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {isimler.map((isim, i) => (
              <input
                key={i}
                value={isim}
                onChange={(e) => {
                  const yeni = [...isimler];
                  yeni[i] = e.target.value;
                  setIsimler(yeni);
                }}
                placeholder={`Oyuncu ${i + 1}`}
                className="px-3 py-2 border border-neutral-300 focus:outline-none rounded-lg"
              />
            ))}
          </div>
          <button
            onClick={handleSistem1}
            className="mt-4 bg-primary text-white px-6 py-2 rounded-xl shadow hover:bg-pink-900"
          >
            Rastgele Ayarla
          </button>

          {sonuc1.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {sonuc1.map((s, i) => (
                <div key={i} className="p-4 border border-neutral-300 rounded-xl bg-white">
                  <h3 className="font-bold text-lg text-primary">{s.takim}</h3>
                  <p className="text-sm">Oyuncular: {s.isim}</p>
                  <p className="text-sm">Konum: {s.konum}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Sistem 2 */}
      {sistem === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">4 Takım Girin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {takimlar.map((takim, i) => (
              <input
                key={i}
                value={takim}
                onChange={(e) => {
                  const yeni = [...takimlar];
                  yeni[i] = e.target.value;
                  setTakimlar(yeni);
                }}
                placeholder={`Takım ${i + 1}`}
                className="px-3 py-2 border border-neutral-300 focus:outline-none rounded-lg"
              />
            ))}
          </div>
          <button
            onClick={handleSistem2}
            className="mt-4 bg-primary text-white px-6 py-2 rounded-xl shadow hover:bg-pink-900"
          >
            Rastgele Konum Ata
          </button>

          {sonuc2.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {sonuc2.map((s, i) => (
                <div key={i} className="p-4 border border-neutral-300 rounded-xl bg-white">
                  <h3 className="font-bold text-lg text-primary">{s.takim}</h3>
                  <p className="text-sm">Konum: {s.konum}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </main>
  );
};

export default KonumAyarla;
