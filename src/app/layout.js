import { Quicksand } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const font = Quicksand({ subsets: ["latin"], weight: ['300', '400', '600'] });

export const metadata = {
  title: "Devlin Auto Detail",
  description: "Excellent interior vehicle detailing in Brownsville, Oregon."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
