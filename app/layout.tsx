import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";



export const metadata: Metadata = {
  title: "Ostim Teknik Münazara ve Hitabet Topluluğu",
  description: "'Ostim Teknik Münazara ve Hitabet Topluluğu' resmi web sitesi. Bizimle iletişime geçin, etkinliklerimize katılın ve münazara dünyasına adım atın!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
