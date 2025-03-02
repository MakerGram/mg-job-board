import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "MakerGram Job Board",
  description: "Discover and share job opportunities in the MakerGram community",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon/favicon-512x512.png', type: 'image/png', sizes: '512x512' },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
