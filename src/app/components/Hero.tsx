import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[url('/ServicesSection.png')] bg-cover bg-center bg-no-repeat">
      {/* Flex container adjusted for responsiveness */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-around gap-4 py-12 px-4 sm:px-6 lg:px-28 max-w-screen-xl mx-auto lg:mt-28">
        <div className="relative text-center md:text-left">
          <h2 className="font-bold font-sf-pro text-2xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
            Elevate Your <br /> Digital Presence
          </h2>
          <span className="absolute top-[80%] left-1/2 md:left-24 transform -translate-y-1/3 -translate-x-1/2 md:-translate-x-1/3 w-[160px] sm:w-[200px] md:w-[266px] h-auto z-0">
            <Image
              src="/Underline_06.png"
              alt="solutions"
              width={266}
              height={36}
              className="w-full h-auto"
            />
          </span>
        </div>
        <div className="flex flex-col items-center md:items-start justify-evenly text-center md:text-left">
          <p className="text-[#606060] w-full max-w-md mt-5">
            Crafting digital masterpieces tailored to your brand, we turn
            concepts into visually stunning, user-friendly websites. Elevate
            your online identity with our cutting-edge web design and
            development services.
          </p>
          <button className="border border-black mt-5 hover:bg-black hover:text-white h-[40px] sm:h-[50px] md:h-[55px] rounded-xl font-bold w-[120px] sm:w-[140px] md:w-[151px]">
            See All
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-16 py-12 px-4 sm:px-6 lg:px-28 max-w-screen-xl mx-auto">
        <div className="flex-shrink-0">
          <Image
            src="/webDesign.png"
            alt="hero"
            width={374}
            height={374}
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[374px] h-auto"
          />
        </div>
        <div className="flex flex-col items-center md:items-start justify-evenly lg:ml-10 text-center md:text-left">
          <h2 className="font-bold text-2xl font-sf-pro sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
            Web Design and <br /> Development
          </h2>
          <p className="text-[#606060] w-full max-w-lg my-4">
            Crafting digital masterpieces tailored to your brand, we turn
            concepts into visually stunning, user-friendly websites. Elevate
            your online identity with our cutting-edge web design and
            development services.
          </p>
          <button className="bg-black text-white mt-5 hover:bg-white hover:text-black hover:border border-black h-[40px] sm:h-[50px] md:h-[55px] rounded-xl font-bold w-[120px] sm:w-[140px] md:w-[151px]">
            See All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
