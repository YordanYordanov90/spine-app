"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/", label: "About" },
  { href: "/", label: "Services" },
  { href: "/", label: "FAQ" },
  { href: "/", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-[135px] py-[34px] w-full h-[118px] mx-auto container">
      <div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={143}
            height={28}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="hidden md:flex gap-16 justify-between">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <span className="text-base cursor-pointer font-bold hover:underline">
              {link.label}
            </span>
          </Link>
        ))}
      </div>
      <div className="hidden md:flex justify-end">
        <button
          className="font-bold box-border flex flex-row justify-center items-center
            w-[110px] h-[47px]
          border border-black rounded-[12px]
          bg-transparent text-black hover:bg-black hover:text-white hover:border-white"
        >
          Sign Up
        </button>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center space-y-8">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <span
                className="text-2xl cursor-pointer font-bold hover:underline"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <button
            className="font-bold box-border flex flex-row justify-center items-center
              w-[110px] h-[47px]
            border border-black rounded-[12px]
            bg-transparent text-black hover:bg-black hover:text-white hover:border-white"
            onClick={toggleMobileMenu}
          >
            Sign Up
          </button>
          <button
            className="absolute top-4 right-4 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
