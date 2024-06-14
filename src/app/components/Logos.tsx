import Image from "next/image";

const Logos = () => {
  return (
    <div className="border-b-2 border-t-2 container w-full max-w-screen-xl flex justify-center mx-auto mt-12 mb-12 overflow-x-scroll md:overflow-hidden py-3">
      <div className="flex justify-between items-center my-5 w-full max-w-none animate-scroll md:animate-none gap-4">
        <Image
          src="/Logo (1).png"
          alt="logo"
          width={143}
          height={28}
          className="w-[100px] sm:w-[120px] md:w-[143px] h-auto"
        />
        <Image
          src="/Logo (2).png"
          alt="logo"
          width={143}
          height={28}
          className="w-[100px] sm:w-[120px] md:w-[143px] h-auto"
        />
        <Image
          src="/Logo (3).png"
          alt="logo"
          width={143}
          height={28}
          className="w-[100px] sm:w-[120px] md:w-[143px] h-auto"
        />
        <Image
          src="/Logo (4).png"
          alt="logo"
          width={143}
          height={28}
          className="w-[100px] sm:w-[120px] md:w-[143px] h-auto"
        />
        <Image
          src="/Logo (5).png"
          alt="logo"
          width={143}
          height={28}
          className="w-[100px] sm:w-[120px] md:w-[143px] h-auto"
        />
      </div>
    </div>
  );
};

export default Logos;
