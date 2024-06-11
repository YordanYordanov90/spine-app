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
    <footer className="bg-[#0C0C0C] flex flex-col justify-between items-center">
      <div className="container mx-auto flex flex-col lg:px-36 md:flex-row md:justify-between items-center md:items-start p-10">
        {/* First Column */}
        <div className="p-5 text-center md:text-left">
          {/* Logo */}
          <Link href="/" passHref>
            <Image
              src="/Logo2.png"
              alt="Spine Logo"
              width={200}
              height={40}
              className="bg-bgcustom rounded-md pb-3 "
            />
          </Link>
          <p className="text-white text-sm font-semibold my-4">
            Spine is the ultimate boost for your online <br /> presence.
            We&apos;re here to supercharge your digital <br /> agency&apos;s
            journey.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-x-3">
            <Link href="/" passHref>
              <FaFacebook className="text-white text-2xl cursor-pointer" />
            </Link>
            <Link href="/" passHref>
              <FaTwitter className="text-white text-2xl cursor-pointer" />
            </Link>
            <Link href="/" passHref>
              <FaInstagram className="text-white text-2xl cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-10 justify-between">
          {/* Dynamic Sections */}
          {sections.map((section, index) => (
            <div key={index} className="mt-10 md:mt-16 w-full md:w-1/4">
              <h4 className="text-white font-semibold text-xl pb-4">
                {section.title}
              </h4>
              <ul>
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-white text-md pb-2 font-semibold cursor-pointer hover:underline"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Fourth Column */}
          <div className="mt-10 md:mt-16 w-full md:w-1/3">
            <h4 className="text-white font-semibold text-xl pb-4">
              Join our newslatter
            </h4>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Enter email address"
                className="p-3 mb-4 bg-[#0C0C0C] border w-[250px]   "
              />
              <button className="bg-primary hover:bg-black hover:text-white hover:border text-black w-[121px] py-2 px-6 my-2 rounded-lg">
                Get start
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto my-8 px-4 md:px-8">
        <hr className="border-gray-600 mb-4" />
        <p className="text-center text-gray-400">
          &copy; 2024 Spine. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
