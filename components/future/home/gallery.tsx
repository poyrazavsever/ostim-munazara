"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

// Daha minimal: 4 görsel. (Fazlası olursa ilk 4'ü kullanılır.)
const IMAGES = [
  { src: "/images/gallery-1.jpeg", alt: "Paint ile ders işliyoruz." },
  { src: "/images/gallery-2.jpeg", alt: "Talha ve Poyraz İstanbul Yolunda" },
  { src: "/images/gallery-3.jpeg", alt: "Talha, Poyraz ve Halit çok acıkmış" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [lightbox, setLightbox] = React.useState<{ index: number } | null>(
    null
  );

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    if (lightbox) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }, [lightbox]);

  const imgs = IMAGES.slice(0, 4);

  return (
    <section className="py-10 sm:py-14 lg:py-0 lg:max-h-screen lg:overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        {/* Başlık satırı */}
        <div className="flex items-end justify-between gap-6 pt-2 pb-6 lg:py-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
              Galeri
            </h2>
            <p className="mt-2 text-sm text-neutral-600 max-w-prose">
              Seçili kareler. Daha fazlası için Instagram sayfamızı ziyaret edebilirsin.
            </p>
          </div>
          <div className="hidden sm:block text-sm text-neutral-500">
            {new Date().getFullYear()}
          </div>
        </div>

        {/* Minimal asimetrik düzen */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-12 gap-4 lg:gap-6"
        >
          {/* Solda: Öne çıkan büyük görsel */}
          <motion.figure
            variants={item}
            className="col-span-12 lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50"
          >
            <button
              onClick={() => setLightbox({ index: 0 })}
              className="group block w-full focus:outline-none"
              aria-label="Görseli büyüt"
            >
              <div className="relative h-[40vh] sm:h-[52vh] lg:h-[70vh]">
                <img
                  src={imgs[0].src}
                  alt={imgs[0].alt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </button>
          </motion.figure>

          {/* Sağda: Üst/alt iki minimal kutu (eşit yükseklik) */}
          <div className="col-span-12 lg:col-span-5 grid grid-rows-2 gap-4 lg:gap-6">
            <motion.figure
              variants={item}
              className="rounded-2xl overflow-hidden border border-neutral-200"
            >
              <button
                onClick={() => setLightbox({ index: 1 })}
                className="group block w-full focus:outline-none"
              >
                <div className="relative h-[22vh] sm:h-[24vh] lg:h-[34vh]">
                  <img
                    src={imgs[1].src}
                    alt={imgs[1].alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </button>
            </motion.figure>

            <motion.figure
              variants={item}
              className="rounded-2xl overflow-hidden border border-neutral-200"
            >
              <button
                onClick={() => setLightbox({ index: 2 })}
                className="group block w-full focus:outline-none"
              >
                <div className="relative h-[22vh] sm:h-[24vh] lg:h-[34vh]">
                  <img
                    src={imgs[2].src}
                    alt={imgs[2].alt}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              </button>
            </motion.figure>
          </div>

          {/* Alt şerit: ince panorama (opsiyonel, md ve üstü) */}
          <motion.figure
            variants={item}
            className="col-span-12 hidden md:block rounded-2xl overflow-hidden border border-neutral-200"
          >
            <button
              onClick={() => setLightbox({ index: 3 })}
              className="group block w-full focus:outline-none"
            >
              <div className="relative h-[24vh] lg:h-[20vh]">
                <img
                  src={imgs[3].src}
                  alt={imgs[3].alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </button>
          </motion.figure>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="mx-4 md:mx-8 max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={imgs[lightbox.index].src}
                  alt={imgs[lightbox.index].alt}
                  className="absolute inset-0 h-full w-full object-contain bg-black"
                />
              </div>
              <div className="mt-3 text-center text-neutral-100 text-sm">
                {imgs[lightbox.index].alt}
                <span className="mx-2 opacity-60">•</span>
                <button
                  onClick={() => setLightbox(null)}
                  className="underline underline-offset-4 hover:no-underline"
                >
                  Kapat (Esc)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
