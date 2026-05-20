import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://alvinch.vercel.app'),
  title: {
    default: 'AlvinC | Fullstack & IT Enthusiast',
    template: '%s | AlvinC',
  },
  description: 'Alvin Christianto — Fullstack Developer, Business Analyst, and Blockchain enthusiast based in Indonesia.',
  openGraph: {
    title: 'AlvinC | Fullstack & IT Enthusiast',
    description: 'Alvin Christianto — Fullstack Developer, Business Analyst, and Blockchain enthusiast based in Indonesia.',
    url: 'https://alvinch.vercel.app/',
    siteName: 'AlvinC',
    type: 'website',
    images: [
      {
        url: '/img/image_alvin.png',
        width: 1200,
        height: 630,
        alt: 'Alvin Christianto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlvinC | Fullstack & IT Enthusiast',
    description: 'Alvin Christianto — Fullstack Developer, Business Analyst, and Blockchain enthusiast based in Indonesia.',
    images: ['/img/image_alvin.png'],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     
      <body className={inter.className}>{children}</body>
    </html>
  );
}
