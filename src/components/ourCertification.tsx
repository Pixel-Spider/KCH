import Image from "next/image";

const OurCertification = () => {
  return (
    <section className="relative pt-[35px] border-t border-t-[#231F20]">
      <div>
        <h2
          data-aos-duration="1500"
          data-aos="fade-up"
          className="font-extrabold text-left border-l-[3px]  border-[#EB801B] px-6.5   lg:top-[-60px] md:top-[-50px] xl:top-[-70px] 2xl:top-[-90px]  text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] lg:uppercase text-primary"
        >
          OUR RECOGNITIONS
        </h2>
        <h3
          data-aos-duration="1500"
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-extrabold  border-l-[3px]  border-[#EB801B] px-6.5   lg:top-[-60px] md:top-[-50px] xl:top-[-70px] 2xl:top-[-90px]  text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] lg:uppercase text-[#E7801B]"
        >
          QUALITY CERTIFICATIONS{" "}
        </h3>
        <div className=" flex md:w-3/4 items-center justify-evenly sm:gap-x-10  sm:gap-y-10 sm:justify-start gap-y-4 my-[35px] xl:mb-[0]  xl:gap-x-[100px] pb-[35px]">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <div
                key={index}
                data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-delay={200 * index}
                // className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[140px] xl:h-[140px]"
              >
                <img
                  src={`/certification${index}.png`}
                  alt="certification"
                  // objectFit="contain"
                  width={"auto"}
                  height={"auto"}
                  className="object-cover 2xl:min-w-[90px] 2xl:min-w-[100px] grayscale hover:grayscale-0 transition-all"
                />
              </div>
            );
          })}
        </div>
        <div className="relative flex md:w-3/4 justify-evenly sm:gap-x-10  sm:gap-y-10 sm:justify-start gap-y-4 my-[35px] xl:mb-[0]  xl:gap-x-[100px] pb-[35px]">
          {Array.from({ length: 3 }).map((_, index) => {
            return (
              <div
                key={index}
                data-aos-duration="1500"
                data-aos="fade-up"
                data-aos-delay={200 * index}
                //className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[140px] xl:h-[140px]"
              >
                <Image
                  src={`/certification${5 + index}.png`}
                  alt="certification"
                  objectFit="contain"
                  width={110}
                  height={110}
                  className="min-w-[100px] grayscale hover:grayscale-0 transition-all"
                />
              </div>
            );
          })}
          <Image
            src="/certificationBg.jpg"
            alt="certification"
            width={350}
            height={350}
            className="md:absolute translate-x-full md:right-0 md:z-[-1] md:bottom-0 mx-auto md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default OurCertification;
