import Image from "next/image";
import SignIcon from "../../public/sign.svg";

const ChairManMessage = () => {
  return (
    <section className="xl:mt-[105px] lg:mt-[85px] md:mt-[65px]  md:mb-[35px] xl:mb-[45px] 2xl:mt-[145px] 2xl:mb-[45px]">
      <h2 className="font-extrabold  md:hidden border-l-[3px] whitespace-nowrap border-[#EB801B] px-6.5 text-left text-[28px] text-primary">
        CHAIRMAN MESSAGE
      </h2>

      <div className="relative  w-[262px] h-[182px] md:hidden translate-y-8">
        <Image
          src="/profileBg.jpg"
          fill
          alt="chairman message"
          quality={100}
          className="rounded-tl-[130px]"
        />
      </div>
      <div className="text-white md:shadow-chairman-message  bg-profileBg bg-no-repeat bg-cover flex flex-col md:flex-row md:gap-[10px] lg:gap-[12px] xl:gap-[16px] 2xl:gap-[35px] xl:pb-[122px] md:pb-[72px] lg:pb-[82px] 2xl:pb-[182px] rounded-br-[100px]">
        <div className="relative hidden md:block md:w-[322px] md:h-[236px] lg:w-[362px] lg:h-[276px] xl:w-[432px] md:translate-x-[-40px] md:translate-y-[-40px] flex-shrink-0 xl:h-[336px] 2xl:w-[502px] 2xl:h-[416px]">
          <Image
            src="/profileBg.jpg"
            fill
            alt="chairman message"
            quality={100}
            className="rounded-tl-[130px]"
          />
        </div>
        <div className="px-3 md:w-6/12 lg:w-5/12 xl:w-6/12 2xl:max-w-[768px] relative pt-[54px]">
          <h2
            data-aos-duration="1500"
            data-aos="fade-up"
            data-aos-delay="100"
            className="font-extrabold hidden md:block border-l-[3px] whitespace-nowrap border-[#EB801B] px-6.5 absolute  lg:top-[-60px] md:top-[-50px] xl:top-[-70px] 2xl:top-[-90px] text-center text-[28px] md:text-[30px] lg:text-[34px] xl:text-[40px] lg:uppercase text-primary"
          >
            CHAIRMAN MESSAGE
          </h2>
          <p
            data-aos-duration="1500"
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xs font-normal"
          >
            KUWAIT CHEMICAL HOUSE COMPANY
          </p>
          <h3
            data-aos-duration="1500"
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-[28px]  md:text-[32px] lg:text-[36px] font-extrabold xl:text-[40px] xl2:text-[44px]  2xl:text-[48px]"
          >
            The House of Trust
          </h3>
          <div className="text-lg md:text-md lg:text-lg 2xl:text-xl 2xl:leading-[32px] italic font-normal mt-6">
            <p data-aos-duration="1500" data-aos="fade-up" data-aos-delay="500">
              In an era where the global landscape is rapidly changing, we
              embrace innovation as a cornerstone of our operations. By staying
              at the forefront of technological advancements and market trends,
              we ensure that Kuwait Chemical House Company remains a reliable
              source for cutting-edge chemical products and solutions.
            </p>

            <p
              data-aos-duration="1500"
              data-aos="fade-up"
              data-aos-delay="600"
              className="my-4"
            >
              Sustainability is a core value that underlines every facet of our
              business. We are dedicated to minimizing our environmental
              footprint, promoting responsible sourcing, and contributing to a
              greener, more sustainable future. By integrating eco-friendly
              practices into our operations, we strive to be a catalyst for
              positive change in the chemical industry.
            </p>

            <p data-aos-duration="1500" data-aos="fade-up" data-aos-delay="700">
              As we look toward the future, we are excited about the
              opportunities and challenges that lie ahead. Our team is committed
              to staying agile, adaptive, and responsive to the ever-evolving
              needs of our clients and the industry. Together, we will continue
              to chart new territories and set new benchmarks in the world of
              chemical trading.
            </p>
          </div>
          <h4
            data-aos-duration="1500"
            data-aos="fade-up"
            data-aos-delay="800"
            className="text-[#EB801B] md:text-lg lg:text-xl xl:text-[22px]  text-[26px] mt-8 flex"
          >
            <span> SHAHER AL SOBERIE</span>
            <SignIcon />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default ChairManMessage;
