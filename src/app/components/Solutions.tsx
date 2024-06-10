import Image from "next/image";

const Solutions = () => {
  return (
    <div className="container h-auto w-full flex flex-col items-center mx-auto mt-10 px-4 sm:px-6 lg:px-32">
      <div className="relative mb-8 text-center">
        <h1 className="font-bold font-sf-pro text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-center relative ">
          We love to find <br />
          solutions
        </h1>
        <span className="absolute top-[80%] left-1/3 transform -translate-y-1/2 -translate-x-1/3 w-[160px] sm:w-[200px] md:w-[266px] h-auto z-0">
          <Image
            src="/Underline_06.png"
            alt="solutions"
            width={266}
            height={36}
            className="w-full h-auto"
          />
        </span>
      </div>
      <p className="font-bold text-xs sm:text-sm md:text-base text-center mt-4 pt-4 text-[#606060] max-w-xl sm:max-w-2xl mx-auto">
        Elevate your online presence with cutting-edge solutions. Discover
        limitless possibilities for your digital agency &apos;s success.
      </p>

      <div className="container flex flex-col sm:flex-row items-center mt-10 space-y-10 sm:space-y-0 sm:space-x-10">
        <Image
          src="/Marketing_12_ 1.png"
          alt="solutions"
          width={374}
          height={374}
          className="w-[100px] sm:w-[150px] md:w-[250px] lg:w-[300px] xl:w-[374px] h-auto"
        />
        <div className="flex flex-col items-center gap-8 sm:gap-12">
          <button className="bg-[#B4FF5C] hover:transform hover:scale-100 hover:bg-black hover:text-white h-[40px] sm:h-[50px] md:h-[55px] rounded-xl font-bold w-[100px] sm:w-[120px] md:w-[140px] lg:w-[151px]">
            Start for free
          </button>

          <Image
            src="/Vector 21.png"
            alt="solutions"
            width={463}
            height={93}
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[400px] h-auto"
          />
        </div>
        <Image
          src="/g10.png"
          alt="solutions"
          width={374}
          height={374}
          className="w-[100px] sm:w-[150px] md:w-[250px] lg:w-[300px] xl:w-[374px] h-auto"
        />
      </div>
    </div>
  );
};

export default Solutions;
