import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Navbar from "./components/Navbar";
import Solutions from "./components/Solutions";
import Container from "./components/Container";
import Footer from './components/Footer';

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
        <Container>
          <Navbar />
          <Solutions />
        </Container>
        {children}
        <Footer />
      </body>
    </html>
  );
}
