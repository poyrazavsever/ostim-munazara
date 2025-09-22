import React from "react";
import Sidebar from "@/components/layout/sidebar";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs";
import path from "path";

const tabFiles: Record<string, string> = {
  "munazara-nedir": "munazara-nedir.md",
  "parlamenter-munazara-nedir": "parlamenter-munazara-nedir.md",
  "parlamenter-munazara-kurallari": "parlamenter-munazara-kurallari.md",
  "nefret-soylemi-nedir": "nefret-soylemi-nedir.md",
  "argumentasyon-nedir": "argumentasyon-nedir.md",
  "arguman-yazmak": "arguman-yazmak.md",
  "angajman-nedir": "angajman-nedir.md",
  "takim-gorevleri": "takim-gorevleri.md",
};

interface TabProps {
  searchParams?: { tab?: string };
}

const getTabContent = (tab: string): string => {
  const file = tabFiles[tab] || tabFiles["munazara-nedir"];
  const filePath = path.join(process.cwd(), "docs", file);
  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContent);
    return content;
  } catch {
    return "İçerik yüklenemedi.";
  }
};

const Dokumantasyon = ({ searchParams }: any) => {
  const activeTab = searchParams?.tab || "munazara-nedir";
  const content = getTabContent(activeTab);

  return (
    <main className="bg-neutral-50 min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-0 flex flex-col md:flex-row gap-6">
        {/* Sol Sidebar */}
        <Sidebar activeTab={activeTab} />

        {/* İçerik */}
        <div className="flex-1">
          <article className="mdCustom bg-white rounded-xl border border-neutral-200 p-6 shadow">
            <MDXRemote source={content} />
          </article>
        </div>
      </div>
    </main>
  );
};

export default Dokumantasyon;
