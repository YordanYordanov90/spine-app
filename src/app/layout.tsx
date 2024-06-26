import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Header from './components/Header';

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
      <body className={`${popins.className} min-h-screen flex flex-col`}>
        <header>
          <Container>

          <Header />
          </Container>

        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
