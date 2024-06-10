"use client";
import Image from "next/image";
import { useState } from "react";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data: FAQ[] = [
    {
      id: 1,
      question: "What is DigitalBoostPro?",
      answer:
        "DigitalBoostPro is a cutting-edge platform designed to elevate your digital agency's online presence. It combines impressive design with intuitive features, empowering you to tell your agency's story in a way that captivates clients.",
    },
    {
      id: 2,
      question:
        "How can DigitalBoostPro enhance my digital agency's narrative?",
      answer:
        "DigitalBoostPro is a cutting-edge platform designed to elevate your digital agency's online presence. It combines impressive design with intuitive features, empowering you to tell your agency's story in a way that captivates clients.",
    },
    {
      id: 3,
      question:
        "What makes DigitalBoostPro different from other website solutions?",
      answer:
        "DigitalBoostPro is a cutting-edge platform designed to elevate your digital agency's online presence. It combines impressive design with intuitive features, empowering you to tell your agency's story in a way that captivates clients.",
    },
    {
      id: 4,
      question: "Is DigitalBoostPro suitable for agencies of all sizes?",
      answer:
        "DigitalBoostPro is a cutting-edge platform designed to elevate your digital agency's online presence. It combines impressive design with intuitive features, empowering you to tell your agency's story in a way that captivates clients.",
    },
    {
      id: 5,
      question: "How can DigitalBoostPro help improve my agency's creativity?",
      answer:
        "DigitalBoostPro is a cutting-edge platform designed to elevate your digital agency's online presence. It combines impressive design with intuitive features, empowering you to tell your agency's story in a way that captivates clients.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="flex justify-center items-center py-12 lg:py-20">
      <div className="w-full max-w-screen-lg p-6 lg:mt-14 flex flex-col items-center">
        <div className="relative w-full text-center">
          <h1 className="font-bold font-sf-pro text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
            Got Questions? We&apos;ve Got <br />
            Answers
          </h1>
          <span className="absolute top-[60%] left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-[160px] sm:w-[200px] md:w-[266px] h-auto z-0">
            <Image
              src="/Underline_06.png"
              alt="underline"
              width={266}
              height={36}
              className="w-full h-auto"
            />
          </span>
          <p className="mt-6 text-base font-bold font-sf-pro text-black">
            Check out the services
          </p>
        </div>

        <div className="w-full max-w-3xl mt-8 lg:mt-12">
          {data.map((item, index) => (
            <div key={item.id} className="mb-4">
              <button
                className="w-full text-left p-4 border border-gray-300 rounded-lg shadow-sm font-sf-pro font-semibold text-lg md:text-xl bg-gray-100 hover:bg-gray-200"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 p-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-base mt-2">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
