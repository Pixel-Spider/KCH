import Footer from "@/components/Footer";
import ChairManMessage from "@/components/chairman-message";
import Header from "@/components/header";
import OurTeam from "@/components/our-team";
import OurMission from "../../../public/ourMission.svg";
import OurVision from "../../../public/ourVision.svg";
import OurValues from "../../../public/ourValues.svg";
import QualityIcon from "../../../public/quality.svg";
import ExcellenceIcon from "../../../public/excelence.svg";
import OurCertification from "@/components/ourCertification";
import HeroSection from "@/components/heroSection";
import Image from "next/image";

const Profile = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          headTitle="Our Chemical Journey:"
          subTitle="Pioneering Excellence in Trading"
          initialImage={2}
          images={[
            "hero-image-lg.jpg",
            "profile_hero-bg1.jpg",
            "hero-3.jpg",
            "hero-bg-4.jpg",
            "hero-bg-5.jpg",
          ]}
        />
        <div className="px-6.5 md:px-20 xl:px-[150px] 2xl:px-[185px]">
          <ChairManMessage />
          {/* <OurTeam /> */}
          <section className="mt-[54px] mb-[35px] 2xl:my-[65px]">
            <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-3">
              <div className="align-start">
                <div className="w-full lg:w-10/12">
                  <div className="relative text-center h-[200px] flex flex-col justify-between">
                    <OurMission
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="mx-auto"
                    />
                    <h6
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1500"
                      className="text-[28px] text-primary"
                    >
                      OUR <span className="text-[#EB801B]">MISSION</span>
                    </h6>
                    <div className="bg-[#808080] w-[1.3px] h-full absolute right-[-25px] top-0" />
                  </div>
                  <div className="text-lg text-primary md:text-md lg:text-lg 2xl:text-xl 2xl:leading-[32px]  font-normal mt-6 ">
                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1500"
                    >
                      To be a leading market brand in our chosen sphere of work
                      with quality chemical products and services, cost
                      effective manufacturing, state of the art technology and
                      environment friendly practices, creating value for our
                      stakeholders.
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="500"
                      data-aos-duration="1500"
                    >
                      Developing and delivering innovative products that meet
                      customers needs.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full lg:w-10/12 ">
                  <div className="relative h-[200px] flex flex-col justify-between">
                    <Image
                      src={"/Vision.gif"}
                      alt="our vision"
                      className="mx-auto"
                      width={140}
                      height={120}
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      unoptimized
                    />
                    <h6
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1500"
                      className="text-[28px] text-center text-primary"
                    >
                      OUR <span className="text-[#EB801B]">VISION</span>
                    </h6>
                    <div className="bg-[#808080] w-[1.3px] h-full absolute right-[-25px] top-0" />
                  </div>
                  <div className="text-lg text-primary md:text-md lg:text-lg 2xl:text-xl 2xl:leading-[32px]  font-normal mt-6 ">
                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1500"
                    >
                      To become the preferred supplier of chemical products on
                      the global scale ultimately leading our endeavors to build
                      stakeholder’s pride.
                    </p>
                    <Image
                      src="/go_green.png"
                      alt="go green"
                      width={300}
                      height={300}
                      className="mx-auto mt-4"
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="w-12/12 text-center">
                  <div className="h-[200px] relative flex flex-col justify-between">
                    <OurValues
                      data-aos="fade-up"
                      data-aos-duration="1500"
                      className="mx-auto"
                    />
                    <h6
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="1500"
                      className="text-[28px] text-primary"
                    >
                      OUR <span className="text-[#EB801B]">VALUES</span>
                    </h6>
                  </div>
                  <div className="text-lg text-primary text-left md:text-md lg:text-lg 2xl:text-xl 2xl:leading-[32px] font-normal mt-6">
                    <p
                      data-aos="fade-up"
                      data-aos-delay="300"
                      data-aos-duration="1500"
                      className="text-[#EB801B] font-semibold"
                    >
                      Customer’s Satisfaction:
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="400"
                      data-aos-duration="1500"
                    >
                      {" "}
                      We continuously seek ways to exceed the expectations of
                      our customers, and are solely focused on their success.
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="500"
                      data-aos-duration="1500"
                      className="text-[#EB801B] flex gap-4 md:block items-center relative mt-4 font-semibold"
                    >
                      <QualityIcon className="md:absolute scale-75 md:scale-100 left-0 md:translate-x-[-150%]" />
                      Quality:
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="600"
                      data-aos-duration="1500"
                    >
                      {" "}
                      At KCHC, we only provide the products that are of the
                      utmost excellence.
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="700"
                      data-aos-duration="1500"
                      className="text-[#EB801B] flex items-center gap-4 md:block relative mt-4 font-semibold"
                    >
                      <ExcellenceIcon className="md:absolute  scale-75 md:scale-100 left-0 md:translate-x-[-150%]" />
                      Excellence:
                    </p>
                    <p
                      data-aos="fade-up"
                      data-aos-delay="800"
                      data-aos-duration="1500"
                    >
                      We set high expectations, holding ourselves accountable
                      for results. We work with a strong sense of urgency and
                      strive for fawless execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <OurCertification />
        </div>
        <span className="absolute top-[76%] opacity-50 right-0 z-[2]">
          <Image
            src={"/about-us-bg3.png"}
            alt="Logo"
            width={352}
            height={587}
          />
        </span>
      </main>
      <Footer />
    </>
  );
};

export default Profile;
