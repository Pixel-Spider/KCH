import Image from "next/image";

const OurCertification = () => {
  return (
    <section className="relative pt-[35px] border-t border-t-[#231F20]">
      <div>
        <h2 className="font-extrabold text-left border-l-[3px]  border-[#EB801B] px-6.5   lg:top-[-60px] md:top-[-50px] xl:top-[-70px] 2xl:top-[-90px]  text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] lg:uppercase text-primary">
          OUR RECOGNITIONS
        </h2>
        <h3 className="font-extrabold  border-l-[3px]  border-[#EB801B] px-6.5   lg:top-[-60px] md:top-[-50px] xl:top-[-70px] 2xl:top-[-90px]  text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] lg:uppercase text-[#E7801B]">
          QUALITY CERTIFICATIONS{" "}
        </h3>
        <div className="flex flex-wrap md:w-3/4 justify-evenly sm:gap-x-10  sm:gap-y-10 sm:justify-start gap-y-4 my-[35px] xl:mb-[0]  xl:gap-x-[100px] pb-[35px]">
          {Array.from({ length: 9 }).map((_, index) => {
            return (
              <div
                key={index}
                className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[140px] xl:h-[140px]"
              >
                <Image
                  src={`/certification${index}.png`}
                  alt="certification"
                  objectFit="contain"
                  fill
                />
              </div>
            );
          })}
        </div>
      </div>
      <Image
        src="/certificationBg.jpg"
        alt="certification"
        width={350}
        height={350}
        className="md:absolute md:right-0 md:z-[-1] md:bottom-0 md:translate-x-1/3 mx-auto md:ml-auto"
      />
    </section>
  );
};

export default OurCertification;
