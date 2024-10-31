import "./globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TypeTempo",
  description: "Improve your typing tempo with some healthy competition.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body style={poppins.style} className="antialiased">
        {children}
      </body>
    </html>
  );
}
