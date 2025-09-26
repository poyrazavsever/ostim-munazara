import Takvim from "@/components/ui/Takvim";

const EtkinlikTakvimi = () => {
  return (
    <main className="min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-0">
        <h1 className="text-3xl font-bold mb-6 text-primary">
          Etkinlik Takvimi
        </h1>
        <Takvim />
        <div className="mt-6 text-sm text-neutral-500">
          <ul className="list-disc pl-4">
            <li>Stand günleri: 23-26 Eylül 2025 (10:00-17:00)</li>
            <li>Stand günleri: 30 Eylül 2025 (16:00-17:00)</li>
            <li>Parlamenter Münazara 101: 14 Ekim 2025 (16:00 - 17:00)</li>
            <li>Parlamenter Münazara 101 - 2: 28 Ekim 2025 (16:00 - 17:00)</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default EtkinlikTakvimi;