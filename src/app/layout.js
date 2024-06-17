import { Quicksand } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";

const font = Quicksand({ subsets: ["latin"], weight: ['300', '400', '600'] });

export const metadata = {
  title: "Claire's Detail Care",
  description: "Interior vehicle detailing in Brownsville, Oregon."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
