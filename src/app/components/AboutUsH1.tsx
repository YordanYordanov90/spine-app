import Image from "next/image";

type AboutUsH1Props = {
  heading: string;
  description: string;
};

const AboutUsH1 = ({ heading, description }: AboutUsH1Props) => {
  return (
    <div className="container h-auto w-full flex flex-col items-center mx-auto lg:my-28 px-4 sm:px-6 lg:px-32">
      <div className="relative mb-8 text-center">
        <h1 className="font-bold  font-sf-pro text-2xl sm:text-4xl md:text-5xl lg:text-8xl text-center relative ">
          {heading}
        </h1>
        <span className="absolute top-[65%] left-1/3 transform -translate-y-1/2 -translate-x-1/3 w-[160px] sm:w-[200px] md:w-[266px] h-auto z-0">
          <Image
            src="/Underline_06.png"
            alt="solutions"
            width={266}
            height={36}
            className="w-full h-auto"
          />
        </span>
      </div>
      <p className="font-normal max-h-[740px]  text-xs sm:text-sm md:text-base text-center mt-4 pt-4 text-[#606060] max-w-xl sm:max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default AboutUsH1;
