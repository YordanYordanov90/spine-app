import Image from "next/image";
import React from "react";

const ChooseUs = () => {
  return (
    <section className="bg-[url('/ServicesSection.png')] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around py-12 px-4 sm:px-6 lg:px-8 container mx-auto">
        <div className="flex flex-col items-start mt-8 md:mt-0 max-w-full md:max-w-lg lg:max-w-xl ">
          <h2 className="relative font-bold font-sf-pro text-2xl sm:text-4xl md:text-5xl lg:text-7xl mb-5 pb-2 text-center md:text-left lg:text-nowrap">
            Why Choose Us?
            <span className="absolute top-[60%] right-10 transform -translate-y-1/2 -translate-x-1/3 w-[160px] sm:w-[200px] md:w-[266px] h-auto z-0">
              <Image
                src="/Underline_06.png"
                alt="solutions"
                width={266}
                height={36}
                className="w-full h-auto"
              />
            </span>
          </h2>
          <p className="font-bold text-sm sm:text-base text-[#606060] mb-4 text-center md:text-left">
            At DigitalBoostPro, we&apos;here on a mission to empower businesses
            with the digital tools and expertise they need to thrive in the
            ever-evolving online landscape.
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
                <span className="font-extrabold text-[#0C0C0C]">Expertise</span>
                Our team of professionals brings years of experience and
                expertise in DigitalBoostPro.
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
                  Commitment:
                </span>
                We are committed to like a quality, innovation, customer
                satisfaction, etc.
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
                Our clients are at the heart of everything we do. We listen,
                understand, and tailor solutions to meet their specific needs
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
                  Innovation:
                </span>
                We stay up-to-date with the latest industry trends and
                technologies, ensuring our clients always receive cutting-edge
                solutions.
              </p>
            </li>
          </ul>
          <button className="bg-[#B4FF5C] mt-10 hover:scale-105 hover:bg-black hover:text-white h-[40px] sm:h-[50px] rounded-xl font-extrabold w-[120px] sm:w-[151px]">
            About us
          </button>
        </div>

        <div className="flex justify-center">
          <Image
            src="/frame34.png"
            alt="solutions"
            width={374}
            height={374}
            className="w-[150px] sm:w-[250px] md:w-[300px] lg:w-[374px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
