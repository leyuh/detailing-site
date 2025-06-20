import { Quicksand } from "next/font/google";
import "./globals.css";

import Head from "next/head";
import Script from "next/script";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { GoogleTagManager } from '@next/third-parties/google'

const font = Quicksand({ subsets: ["latin"], weight: ['300', '400', '600'], display: "swap" });

export const metadata = {
  title: "Devlin Auto Detail",
  description: "Brownsville, Oregon - Excellent Auto Detailing - Book Yours Today!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17160594367"
          strategy="afterInteractive"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17160594367');
          `}
        </Script>
      </head>
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <GoogleTagManager gtmId="GTM-M769TMLJ" />
    </html>
  );
}
