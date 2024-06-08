import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Solutions from "./components/Solutions";

const popins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spine",
  description: "Spine - The Digital Marketing Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <header className="bg-gradient-to-b from-primary from-0% via-primary/20 via-20% to-transparent to-50% mx-auto">
          <Navbar />
          <Solutions />
        </header>
        {children}
      </body>
    </html>
  );
}
