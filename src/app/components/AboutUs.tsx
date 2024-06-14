import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-around py-12 px-4 sm:px-6 lg:px-8 container mx-auto">
      <div className="flex flex-col items-start mt-8 md:mt-0 max-w-full md:max-w-lg lg:max-w-xl">
        <h2 className="font-bold font-sf-pro text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-5 pb-2 text-center md:text-left lg:text-nowrap">
          Unlocking Digital <br /> Excellence
        </h2>
        <p className="font-bold text-sm sm:text-base text-[#606060] mb-4 text-center md:text-left">
          At Spine, we&apos; here on a mission to empower businesses with the
          digital tools and expertise they need to thrive in the ever-evolving
          online landscape.
        </p>

        <ul className="flex flex-col gap-4">
          <li className="flex items-start gap-2">
            <Image
              src="/point.png"
              alt="solutions"
              width={22}
              height={18}
              className="w-[22px] h-[18px]"
            />
            <p className="text-[#606060] font-semibold text-sm sm:text-base">
              <span className="font-extrabold text-[#0C0C0C]">Our Team:</span>
              Introduce the core members of your team, their expertise, and
              their commitment to your clients &apos; success.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <Image
              src="/point.png"
              alt="solutions"
              width={22}
              height={22}
              className="w-[22px] h-[18px]"
            />
            <p className="text-[#606060] font-semibold text-sm sm:text-base">
              <span className="font-extrabold text-[#0C0C0C]">
                Our Core Values:
              </span>
              Share your company &apos; s core values and the principles that
              guide your work.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <Image
              src="/point.png"
              alt="solutions"
              width={22}
              height={22}
              className="w-[22px] h-[18px]"
            />
            <p className="text-[#606060] font-semibold text-sm sm:text-base">
              <span className="font-extrabold text-[#0C0C0C]">
                Client-Centric Approach:
              </span>
              Emphasize your dedication to outstanding service and results for
              your clients.
            </p>
          </li>
        </ul>
        <button className="bg-[#B4FF5C] mt-10 hover:scale-105 hover:bg-black hover:text-white h-[40px] sm:h-[50px] rounded-xl font-extrabold w-[120px] sm:w-[151px]">
          About us
        </button>
      </div>

      <div className="flex justify-center">
        <Image
          src="/single_11.png"
          alt="solutions"
          width={374}
          height={374}
          className="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[374px] h-auto"
        />
      </div>
    </section>
  );
};

export default AboutUs;
