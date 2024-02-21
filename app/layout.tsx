import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/navbar";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baekhak's Portfolio",
  description: "Start new journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <main className="container mx-auto">
          <Navbar />
          <div className="pb-20 pt-28">{children}</div>
        </main>
      </body>
    </html>
  );
}
