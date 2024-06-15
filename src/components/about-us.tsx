import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="bg-[#ccdfec] md:bg-about-us-bg-img md:bg-about-us-size md:bg-no-repeat md:bg-about-us-position grid grid-cols-1 md:grid-cols-2 xl:px-[140px] py-[40px] xl:pt-[100px]">
      <div className="hidden md:block">
        <Image
          src="/about-us.jpg"
          alt="workers working on a laptop"
          width={480}
          height={602}
        />
      </div>
      <div className=" px-6.5 mx-auto">
        <h2 className="text-xl font-bold text-primary ">About Us</h2>
        <div className="h-1 w-16 bg-secondary my-2"></div>
        <h1 className="text-[28px] font-bold text-primary  leading-tight">
          Chemistry in Every Trade: Welcome to Kuwait Chemical House Company
        </h1>
        <p className="text-primary text-lg mt-4">
          Kuwait Chemical House Company (KCHC) large business trade house
          engaged in trading of all kinds of chemicals since the last few
          decades. We have a considerable business volume with various
          government and private sectors in the state of Kuwait and entire GCC
          States, though supply agreements, purchase orders, letters of
          understanding and services States, though supply agreements, purchase
          orders, letters of understanding and services contracts.
        </p>
        <p className="text-primary text-lg  mt-4">
          We cater to the needs of various chemical services..
        </p>
        <ul className="list-disc text-lg list-inside mt-4">
          <li className="text-secondary ">Oil & Gas</li>
          <li className="text-secondary ">Petrochemicals</li>
          <li className="text-secondary ">Water treatment</li>
        </ul>
        <p className="text-primary text-lg mt-4">
          We are also looking forward to expand our horizon and look forward to
          establish a long-lasting business relationship with our esteemed
          customers.
        </p>
        <button
          style={{
            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)",
            background: "linear-gradient(90deg, #2E3190 0%, #045E9D 100%)",
          }}
          className="bg-primary px-16 py-3 leading-[20px] text-white font-semibold mt-5"
        >
          READ MORE
        </button>
      </div>
      <div className="md:col-span-full	px-6.5">
        <h2 className="text-[28px] py-2 text-primary mt-10 mb-5 font-extrabold leading-[38.25px] border-l-4 border-secondary pl-2 whitespace-nowrap">
          Industry Achievements
        </h2>
        <div className="grid text-white grid-cols-2 place-items-center gap-2 md:grid-cols-3 ">
          <div
            style={{
              background:
                "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
            }}
            className="px-[13px] py-[18px] xl:w-[282px] 2xl:w-[322px] xl:py-8 2xl:py-10 md:inline-flex md:justify-center md:items-center md:flex-col"
          >
            <p className="text-[40px] font-extrabold">30+</p>
            <p className="font-extrabold text-sm">YEARS EXPERIENCE</p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
            }}
            className="px-[13px] py-[18px] xl:w-[282px] 2xl:w-[322px]  xl:py-8 2xl:py-10 md:inline-flex md:justify-center md:items-center md:flex-col"
          >
            <p className="text-[40px] font-extrabold">200+</p>
            <p className="font-extrabold text-sm">PROJECT COMPLETED</p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
            }}
            className="px-[13px] py-[18px] xl:w-[282px]  2xl:lg:w-[322px]  xl:py-8 2xl:py-10 md:inline-flex md:justify-center md:items-center md:flex-col"
          >
            <p className="text-[40px] font-extrabold">70+</p>
            <p className="font-extrabold text-sm">INNOVATIVE PRODUCTS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
