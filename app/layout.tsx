import type { Metadata } from "next";
import "./globals.css";



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
      <body >
        {children}
      </body>
    </html>
  );
}
