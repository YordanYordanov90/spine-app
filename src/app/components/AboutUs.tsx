import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="flex flex-row w-[1440px] items-center justify-around py-24 container mx-auto ">
      <div className="flex flex-col items-start ">
        <h2 className="font-extrabold text-7xl mb-5 pb-2">
          Unlocking Digital <br /> Excellence
        </h2>
        <p className="font-bold text-base text-[#606060] mb-4">
          At Spine, we're on a mission to empower businesses with the digital
          tools and <br />
          expertise they need to thrive in the ever-evolving online landscape.
        </p>

        <ul className="flex flex-col gap-2 justify-between">
          <li className="flex items-center gap-2">
            <Image
              src="/point.png"
              alt="solutions"
              width={22}
              height={18}
              className="w-[22px] h-[18px]"
            />
            <p className="text-[#606060] font-semibold">
              <span className="font-extrabold text-[#0C0C0C]">Our Team:</span>
              Introduce the core members of your team, their expertise, and{" "}
              <br /> their commitment to your clients' success.
            </p>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/point.png"
              alt="solutions"
              width={22}
              height={22}
              className="w-[22px] h-[18px]"
            />
            <p className="text-[#606060] font-semibold">
              <span className="font-extrabold text-[#0C0C0C]">
                Our Core Values:
              </span>{" "}
              Share your company's core values and the principles that guide <br />
              your work.
            </p>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src="/point.png"
              alt="solutions"
              width={22}
              height={22}
              className="w-[22px] h-[18px]"
            />
            <p className="text-[#606060] font-semibold">
              <span className="font-extrabold text-[#0C0C0C]">
                Client-Centric Approach:
              </span>{" "}
              Emphasize your dedication to  <br /> outstanding service and
              results for your clients.
            </p>
          </li>
        </ul>
        <button className="bg-[#B4FF5C] mt-10 hover:transform hover:scale-105 hover:bg-[black] hover:text-white h-[40px] sm:h-[50px] rounded-xl font-extrabold w-[120px] sm:w-[151px]">
          About us
        </button>
      </div>
      <div>
        <Image
          src="/single_11.png"
          alt="solutions"
          width={374}
          height={374}
          className="w-[150px] sm:w-[250px] lg:w-[374px]"
        />
      </div>
    </section>
  );
};

export default AboutUs;
