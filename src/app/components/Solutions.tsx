import Image from "next/image";
import React from "react";

const Solutions = () => {
  return (
    <div className="container h-[765px] w-[1440px] flex flex-col items-center mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div className="relative mb-8 text-center">
        <h1 className="font-extrabold text-4xl sm:text-6xl lg:text-8xl text-center relative z-10">
          We love to find <br />
          solutions
        </h1>
        <span className="absolute top-[80%] left-[150px] transform z-10 translate-y-[-50%] translate-x-[-5%] w-[266px] h-[36px]">
          <Image
            src="/Underline_06.png"
            alt="solutions"
            width={266}
            height={36}
          />
        </span>
      </div>
      <p className="font-bold text-sm sm:text-base text-center mt-4 pt-4 text-[#606060] max-w-2xl mx-auto">
        Elevate your online presence with Spine cutting-edge solutions. Discover
        limitless possibilities for your digital agency's success.
      </p>

      <div className="container h-auto flex flex-col sm:flex-row items-center mt-10 space-y-10 sm:space-y-0 sm:space-x-10">
        <Image
          src="/Marketing_12_ 1.png"
          alt="solutions"
          width={374}
          height={374}
          className="w-[150px] sm:w-[250px] lg:w-[374px]"
        />
        <div className="flex flex-col items-center gap-24 ">
          <button className="bg-[#B4FF5C] hover:transform hover:scale-105 hover:bg-[black] hover:text-white h-[40px] sm:h-[50px] rounded-xl font-bold w-[120px] sm:w-[151px]">
            Start for free
          </button>

          <Image
            src="/Vector 21.png"
            alt="solutions"
            width={463}
            height={93}
            className="w-[200px] sm:w-[300px] lg:w-[463px] h-auto"
          />
        </div>
        <Image
          src="/g10.png"
          alt="solutions"
          width={374}
          height={374}
          className="w-[150px] sm:w-[250px] lg:w-[374px]"
        />
      </div>
    </div>
  );
};

export default Solutions;
