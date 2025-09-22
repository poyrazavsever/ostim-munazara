"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const tabs = [
  { key: "munazara-nedir", label: "Münazara nedir?" },
  { key: "parlamenter-munazara-nedir", label: "Parlamenter Münazara Nedir?" },
  {
    key: "parlamenter-munazara-kurallari",
    label: "Parlamenter Münazara Kuralları",
  },
  { key: "nefret-soylemi-nedir", label: "Nefret Söylemi Nedir?" },
  { key: "argumentasyon-nedir", label: "Argümantasyon Nedir?" },
  { key: "arguman-yazmak", label: "Argüman Yazmak" },
  { key: "angajman-nedir", label: "Angajman Nedir?" },
  { key: "takim-gorevleri", label: "Takım Görevleri" },
];

interface SidebarProps {
  activeTab: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab }) => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleTabClick = (key: string) => {
    router.push(`?tab=${key}`);
    setMobileOpen(false); // mobilde menüyü kapat
  };

  const renderTabs = () => (
    <ul className="flex flex-col gap-2">
      {tabs.map((tab) => (
        <li key={tab.key}>
          <button
            className={`w-full text-left px-3 py-2 rounded-lg transition-colors font-medium ${
              activeTab === tab.key
                ? "bg-primary text-white"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
            onClick={() => handleTabClick(tab.key)}
          >
            {tab.label}
          </button>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Mobil burger menü */}
      <div className="md:hidden flex items-center justify-between mb-4 relative">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 text-neutral-700 fixed top-32 right-4 z-30 bg-white rounded-full shadow"
        >
          <Icon icon="mdi:menu" width={32} height={32} />
        </button>
      </div>

      {/* Mobil full-screen menü */}
      {mobileOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col p-6">
          <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10">
            <h2 className="text-2xl font-bold text-primary">Menü</h2>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-neutral-700 bg-white rounded-full shadow">
              <Icon icon="mdi:close" width={32} height={32} className="text-neutral-700" />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto">{renderTabs()}</nav>
        </div>
      )}

      {/* Masaüstü sidebar */}
      <aside className="hidden md:block md:w-64 md:shrink-0">
        <nav className="bg-white rounded-xl border border-neutral-200 p-4">
          {renderTabs()}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
