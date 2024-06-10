"use client";
import Image from "next/image";
import React, { useState } from "react";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image and heading data
  const slides = [
    {
      src: "/WebDesign.png",
      heading: "Web Design and Development",
      description:
        "Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.",
    },
    {
      src: "/single_11.png",
      heading: "Web Design and Development 2",
      description:
        "Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.",
    },
    {
      src: "/Marketing_12_ 1.png",
      heading: "Web Design and Development 3",
      description:
        "Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.",
    },
    {
      src: "/g10.png",
      heading: "Web Design and Development 4",
      description:
        "Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.",
    },
  ];

  const nextSlide = () => {
    setCurrentImageIndex((currentImageIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <section className="bg-[url('/ServicesSection.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-around gap-8 py-12 px-4 sm:px-6 lg:px-28 max-w-screen-xl mx-auto lg:mt-28">
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

      {/* Image Slider Section */}
      <div className="relative w-full max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-28">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-16">
          <div className="flex-shrink-0">
            <Image
              src={slides[currentImageIndex].src}
              alt={slides[currentImageIndex].heading}
              width={374}
              height={374}
              className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[374px] h-auto"
            />
          </div>
          <div className="flex flex-col items-center md:items-start justify-evenly lg:ml-10 text-center md:text-left">
            <h2 className="font-bold text-2xl font-sf-pro sm:text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight">
              {slides[currentImageIndex].heading}
            </h2>
            <p className="text-[#606060] w-full max-w-lg my-4">
              {slides[currentImageIndex].description}
            </p>
            <button className="bg-black text-white mt-5 hover:bg-white hover:text-black hover:border border-black h-[40px] sm:h-[50px] md:h-[55px] rounded-xl font-bold w-[120px] sm:w-[140px] md:w-[151px]">
              See All
            </button>
          </div>
        </div>

        {/* Navigation and Dots */}
        <div className="flex justify-around items-center hiiden lg:w-[1170px] gap-2 mt-4">
          {/* Dots */}
          <div className="flex justify-center items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentImageIndex ? "bg-black" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
          {/* Line */}
          <div className="w-[882px] h-0.5 bg-gray-300"></div>
          {/* Arrows */}
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
            >
              <span className="sr-only">Previous</span>
              &#8592; {/* Left Arrow */}
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full"
            >
              <span className="sr-only">Next</span>
              &#8594; {/* Right Arrow */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
