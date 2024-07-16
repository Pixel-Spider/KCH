import Image from "next/image";
import CountUp from "react-countup";
import CustomCountUp from "./count-up";

const AboutUs = () => {
  return (
    <div className="bg-[#ccdfec] md:bg-about-us-bg-img place-items-center  md:bg-about-us-size md:bg-no-repeat md:bg-about-us-position grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 xl:px-[140px] 2xl:px-2xl-2 py-[40px] xl:pt-[100px]">
      <div className="hidden lg:block">
        <span
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-offset="1"
          data-aos="zoom-in"
          className="relative inline-block md:w-[420px] md:h-[517px] 2xl:w-[420px] 2xl:h-[517px]"
        >
          <Image src="/about-us.jpg" alt="workers working on a laptop" fill />
        </span>
      </div>
      <div className="px-6.5 mx-auto 2xl:col-start-2 2xl:-col-end-1 2xl:px-16">
        <h2
          data-aos-duration="1500"
          data-aos="fade-up"
          className="text-xl font-bold text-primary 2xl:text-lg "
        >
          About Us
        </h2>
        <div
          data-aos-duration="1500"
          data-aos="fade-up"
          data-aos-delay="100"
          className="h-1 w-16 bg-secondary my-2"
        ></div>
        <h1
          data-aos-duration="1500"
          data-aos-delay="300"
          data-aos="fade-up"
          className="text-[28px]  font-bold text-primary  leading-tight 2xl:text-[44px]"
        >
          Chemistry in Every Trade: Welcome to Kuwait Chemical House Company
        </h1>
        <p
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos="fade-up"
          className="text-primary  text-lg mt-4 2xl:text-xl font-medium"
        >
          Kuwait Chemical House Company (KCHC) large business trade house
          engaged in trading of all kinds of chemicals since the last few
          decades. We have a considerable business volume with various
          government and private sectors in the state of Kuwait and entire GCC
          States, though supply agreements, purchase orders, letters of
          understanding and services contracts.
        </p>
        <p
          data-aos-duration="1500"
          data-aos-delay="800"
          data-aos="fade-up"
          className="text-primary  text-lg  mt-4 2xl:text-xl font-medium"
        >
          We cater to the needs of various chemical services..
        </p>
        <ul
          data-aos-duration="1500"
          data-aos-delay="1000"
          data-aos="fade-up"
          className="list-disc   text-lg list-inside mt-4 2xl:text-xl font-medium"
        >
          <li className="text-secondary ">Oil & Gas</li>
          <li className="text-secondary ">Petrochemicals</li>
          <li className="text-secondary ">Water treatment</li>
        </ul>
        <p
          data-aos-duration="1500"
          data-aos-delay="1000"
          data-aos="fade-up"
          className="text-primary list-disc   text-lg mt-4 2xl:text-xl font-medium"
        >
          We are also looking forward to expand our horizon and look forward to
          establish a long-lasting business relationship with our esteemed
          customers.
        </p>
        <button
          data-aos-duration="1500"
          data-aos-delay="1300"
          data-aos="fade-up"
          style={{
            clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)",
            background: "linear-gradient(90deg, #2E3190 0%, #045E9D 100%)",
          }}
          className="bg-primary  px-16 py-3 leading-[20px] text-white font-semibold mt-5"
        >
          READ MORE
        </button>
      </div>
      <div className="md:col-span-full w-full px-6.5">
        <h2
          data-aos-duration="1500"
          data-aos="fade-up"
          className="text-[28px]  py-2 text-primary mt-10 mb-5 2xl:text-[44px] font-extrabold leading-[38.25px] border-l-4 border-secondary pl-2 xl:pl-[29px] whitespace-nowrap"
        >
          Industry Achievements
        </h2>
        <div className="grid 2xl:mt-[41px] place-content-center text-white grid-cols-2  lg:place-items-center xl:place-items-end 2xl:gap-0 gap-2 md:gap-5 lg:gap-10 xl:gap-14 sm:grid-cols-3 ">
          <div
            data-aos-duration="1500"
            data-aos-delay="500"
            data-aos="fade-up"
            style={{
              background:
                "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
            }}
            className="px-[13px]  w-full py-[18px] xl:w-[282px] 2xl:lg:w-[322px] 2xl:lg:h-[165px] xl:py-8 2xl:py-10 md:inline-flex md:justify-center md:items-center md:flex-col"
          >
            {/* <p>30+</p> */}
            <CustomCountUp count={30} />
            <p
              data-aos-duration="1500"
              data-aos-delay="800"
              data-aos="fade-up"
              className="font-extrabold text-sm 2xl:text-lg"
            >
              YEARS EXPERIENCE
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
            }}
            data-aos-duration="1500"
            data-aos-delay="1000"
            data-aos="fade-up"
            className="px-[13px]  w-full py-[18px] xl:w-[282px] 2xl:lg:w-[322px] 2xl:lg:h-[165px]  xl:py-8 2xl:py-10 md:inline-flex md:justify-center md:items-center md:flex-col"
          >
            <CustomCountUp count={200} />
            <p
              data-aos-duration="1500"
              data-aos-delay="1300"
              data-aos="fade-up"
              className="font-extrabold text-sm 2xl:text-lg"
            >
              PROJECT COMPLETED
            </p>
          </div>
          <div
            style={{
              background:
                "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
            }}
            data-aos-duration="1500"
            data-aos-delay="1500"
            data-aos="fade-up"
            className="px-[13px]  w-full py-[18px] xl:w-[282px]  2xl:lg:w-[322px] 2xl:lg:h-[165px]  xl:py-8 2xl:py-10 md:inline-flex md:justify-center md:items-center md:flex-col"
          >
            <CustomCountUp count={70} />
            <p
              data-aos-duration="1500"
              data-aos-delay="1800"
              data-aos="fade-up"
              className="font-extrabold text-sm 2xl:text-lg"
            >
              INNOVATIVE PRODUCTS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
