import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/navbar/navbar";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL("https://baekhak.info"),
  title: {
    default: "Home",
    template: "%s | Baekhak's Portfolio",
  },
  description:
    "Full Stack Developer with experience in a variety of technologies including JavaScript, Node.js, React, and more. Check out my work and get in touch for collaboration.",
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
          <div className="pb-20 pt-28">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
        </main>
      </body>
    </html>
  );
}
