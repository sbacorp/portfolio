"use client";
import Header from "@/components/Header/Header";
import "./globals.scss";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import { useLayoutEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "../components/Preloader/Index";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);
  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      document.body.style.overflowY = "auto";
    }, 2000);
  }, []);
  return (
    <html lang="en" className={`${roboto.className}`}>
      <body className="text-grey overflow-x-hidden bg-primary1 px-1 py-2">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <div className="scroll mx-auto relative bg-primary2 h-full rounded-md border border-line flex flex-col pt-12 overflow-y-hidden  overflow-x-hidden">
          <Header />
          <main className="w-full flex-grow flex items-center flex-col justify-center overflow-y-auto scroll h-fit">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
