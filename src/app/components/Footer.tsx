"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const sections = [
    {
      title: "Menu",
      items: ["Home", "About", "Services", "FAQ", "Contact"],
    },
    {
      title: "Services",
      items: [
        "Web Design & Development",
        "Branding",
        "Content Creation",
        "Technical",
        "Support",
      ],
    },
  ];

  return (
    <footer className="bg-[#0C0C0C] text-white w-full py-8">
      <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between items-center lg:items-start p-10">
        {/* First Column */}
        <div className="p-5 text-center lg:text-left w-full lg:w-1/4">
          <Link href="/" passHref>
            <Image
              src="/Logo2.png"
              alt="Spine Logo"
              width={200}
              height={40}
              className="bg-bgcustom rounded-md pb-3"
            />
          </Link>
          <p className="text-sm font-semibold my-4">
            Spine is the ultimate boost for your online presence. We&apos;re
            here to supercharge your digital agency&apos;s journey.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-x-3">
            <Link href="/" passHref>
              <FaFacebook className="text-2xl cursor-pointer" />
            </Link>
            <Link href="/" passHref>
              <FaTwitter className="text-2xl cursor-pointer" />
            </Link>
            <Link href="/" passHref>
              <FaInstagram className="text-2xl cursor-pointer" />
            </Link>
          </div>
        </div>
        {/* Dynamic Sections */}
        <div className="flex flex-col lg:flex-row gap-x-10 w-full lg:w-2/4 justify-around">
          {sections.map((section, index) => (
            <div key={index} className="mt-10 lg:mt-0 w-full lg:w-1/3">
              <h4 className="font-semibold text-xl pb-4">{section.title}</h4>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-md pb-2 font-semibold cursor-pointer hover:underline"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Fourth Column */}
        <div className="mt-10 lg:mt-0 w-full lg:w-1/4">
          <h4 className="font-semibold text-xl pb-4">Join our newsletter</h4>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter email address"
              className="p-3 mb-4 bg-[#0C0C0C] border w-full"
            />
            <button className="bg-primary hover:bg-white  hover:text-black text-black py-2 px-6 rounded-lg">
              Get Started
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4">
        <hr className="border-gray-600 mb-4" />
        <p className="text-center text-gray-400">
          &copy; 2024 Spine. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
