import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import { Providers } from "@/providers/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const SITE_URL = "https://windows98.navarrolajous.com";
const TITLE = "Web3 Windows 98 | Rodrigo Lajous";
const DESCRIPTION = "Your favorite operating system, now on the blockchain.";
/** Share image hosted on the author's portfolio, which also lists this project. */
const OG_IMAGE = "https://navarrolajous.com/assets/windows98.gif";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Rodrigo Lajous", url: "https://navarrolajous.com/projects/windows-98-web3" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: "Web3 Windows 98 desktop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
