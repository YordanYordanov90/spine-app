import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const OutStory = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center gap-y-10 lg:gap-x-24 lg:my-16 lg:py-20 px-4 lg:px-0">
      <div className="flex flex-col gap-y-6 lg:gap-y-10 text-center lg:text-left">
        <h1 className="font-bold font-sf-pro text-4xl sm:text-5xl lg:text-7xl">
          Our Story
        </h1>

        <p className="text-xs sm:text-sm md:text-base">
          Our journey began with a vision to Problem finding and solution.{" "}
          <br className="hidden sm:block" />
          Since then, we've grown steadily, earning a reputation for excellence{" "}
          <br className="hidden sm:block" />
          in the DigitalBoostPro sector. Over the years, we've worked with
          numerous <br className="hidden sm:block" />
          clients, helping them achieve has been to help people solve their
          problems.
        </p>
        <button className=" flex flex-row items-center justify-center bg-primary hover:transform hover:scale-105 hover:bg-black hover:text-white h-10 sm:h-12 md:h-14 rounded-xl font-normal gap-x-3 w-24 sm:w-28 md:w-36 lg:w-40 mx-auto lg:mx-0">
          Learn more <FaArrowRightLong />
        </button>
      </div>
      <div className="flex justify-center lg:justify-start">
        <Image
          src="/Frame3.png"
          alt="Our Story"
          width={400}
          height={350}
          className="w-full lg:w-auto max-w-[400px] lg:max-w-none"
        />
      </div>
    </section>
  );
};

export default OutStory;
