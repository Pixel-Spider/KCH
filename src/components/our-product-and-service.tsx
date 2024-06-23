import Image from "next/image";

const data = [
  {
    id: 1,
    img: "/1.jpg",
    title: "OIL FIELD CHEMICALS",
  },
  {
    id: 2,
    img: "/2.jpg",
    title: "WATER TREATMENT CHEMICALS",
  },
  {
    id: 3,
    img: "/3.jpg",
    title: "CONSTRUCTION CHEMICALS ",
  },
  {
    id: 4,
    img: "/4.jpg",
    title: "AVIATION CHEMICALS",
  },
  {
    id: 5,
    img: "/5.jpg",
    title: "PAINT & COATING CHEMICALS",
  },
  {
    id: 6,
    img: "/6.jpg",
    title: "FOOD & BEVERAGE CHEMICALS",
  },

  {
    id: 7,
    img: "/7.jpg",
    title: "SOIL REMEDIATION CHEMICALS",
  },
  {
    id: 8,
    img: "/8.jpg",
    title: "INDUSTRIAL CLEANING & MARINE CHEMICALS ",
  },
  {
    id: 9,
    img: "/9.jpg",
    title: "ASPHALT CHEMICALS ",
  },
  {
    id: 10,
    img: "/10.jpg",
    title: "ENVIRONMENTAL AND GREEN CHEMICALS",
  },
  {
    id: 11,
    img: "/11.jpg",
    title: "LABORATORY CHEMICALS ",
  },
  {
    id: 12,
    img: "/12.jpg",
    title: "BASIC INDUSTRIAL CHEMICALS ",
  },
];

const OurProductAndService = () => {
  return (
    <div className="py-10 px-6.5 md:px-20 2xl:px-2xl-2 lg:px-20 lg:pt-[70px] lg:pb-[130px] xl:pt-[80px] xl:pb-[100px] 2xl:pb-[190px] 2xl-[100px]">
      <div className="border-l-4 py-2 lg:py-0 border-secondary pl-2  xl:pl-[29px] 2xl:pl-[29px]">
        <p className="text-xs md:text-md lg:text-lg 2xl:text-xl text-secondary font-extrabold">
          What We Offer For You
        </p>
        <h2 className="font-extrabold text-[28px] lg:text-[36px] xl:text-[40px] lg:uppercase text-primary">
          Our Products & Services
        </h2>
      </div>
      <div className="grid py-6 gap-6 2xl:gap-x-[38px] lg:py-8 xl:py-10 2xl:py-11 lg:gap-y-8  xl:gap-y-10 2xl:gap-y-[48px] grid-cols-1 place-content-between xl:grid-cols-3 md:grid-cols-2">
        {data.map((item) => {
          return (
            <div key={item.id} className="grid grid-cols-1  gap-x-6.5 ">
              <div className="relative h-full w-full">
                <Image
                  src={item.img}
                  alt="hero image"
                  width={600}
                  height={500}
                />
              </div>
              <div className="flex gap-2 2xl:gap-[26px] mt-2 2xl:mt-8 lg:mt-4 xl:mt-5  items-center">
                <div className="bg-[#868D9A] relative flex-shrink-0 w-11 h-11 2xl:w-[55px] 2xl:h-[55px] lg:w-12 lg:h-12 p-1">
                  <Image src="/logo2.svg" fill alt="logo" />
                </div>
                <p className="text-primary text-xl 2xl:text-2xl font-extrabold">
                  {item.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurProductAndService;
