import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <div className="border-b-2 border-t-2  container w-[1170px] flex justify-center mx-auto mt-12 mb-12 overflow-x-scroll md:overflow-hidden py-3">
      <div className="flex justify-between items-center my-5 w-full max-w-[1170px] md:max-w-none animate-scroll md:animate-none">
        <Image src="/Logo (1).png" alt="logo" width={143} height={28} />
        <Image src="/Logo (2).png" alt="logo" width={143} height={28} />
        <Image src="/Logo (3).png" alt="logo" width={143} height={28} />
        <Image src="/Logo (4).png" alt="logo" width={143} height={28} />
        <Image src="/Logo (5).png" alt="logo" width={143} height={28} />
      </div>
    </div>
  );
};

export default Logos;
