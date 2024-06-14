import Image from "next/image";

const OptimalSolutions = () => {
  const CraftingSolutions = [
    {
      image: "/Frame10.png",
      heading: "1.Digital Marketing Solutions",
      description:
        "Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.",
    },
    {
      image: "/Frame11.png",
      heading: "2.Web Design and Development",
      description:
        "Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.",
    },
    {
      image: "/Frame12.png",
      heading: "3.Consultancy and Strategy",
      description:
        "Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.",
    },
    {
      image: "/Frame13.png",
      heading: "4.Analytics and Reporting",
      description:
        "Crafting digital masterpieces tailored to your brand, we turn concepts into visually stunning, user-friendly websites. Elevate your online identity with our cutting-edge web design and development services.",
    },
  ];

  return (
    <section className="bg-[url('/ServicesSection.png')] bg-cover bg-center bg-no-repeat lg:p-5 lg:m-5">
      <div className="lg:p-5 lg:m-10">
        <h2 className="font-bold font-sf-pro text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-center ">
          We are creating a Crafting <br /> Optimal Solutions
        </h2>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-8 max-w-[1170px] mx-auto">
        {CraftingSolutions.map((solution, index) => (
          <li
            key={index}
            className="flex flex-col items-start gap-4 border bg-[#FFFFFF] rounded-xl p-8 "
          >
            <Image
              width={70}
              height={70}
              src={solution.image}
              alt={solution.heading}
              className="w-[70px] h-[70px]"
            />
            <h3 className="font-bold font-sf-pro text-2xl sm:text-4xl md:text-5xl lg:text-2xl">
              {solution.heading}
            </h3>
            <p className="text-center">{solution.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OptimalSolutions;
