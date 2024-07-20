"use client";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import ProfileHeroSection, {
  NextArrow,
  PrevArrow,
} from "@/components/profile-hero-section";
import Image from "next/image";
import SettingsIcon from "../../../public/settings.svg";
import TagIcon from "../../../public/tag.svg";
import CalendarIcon from "../../../public/calendar.svg";
import UserIcon from "../../../public/user.svg";
import Slider from "react-slick";
import HeroSection from "@/components/heroSection";
import PartnerLogo1 from "../../../public/partner-1.svg";
import PartnerLogo2 from "../../../public/partner-2.svg";
import PartnerLogo3 from "../../../public/partner-3.svg";
import PartnerLogo4 from "../../../public/partner-4.svg";
import PartnerLogo5 from "../../../public/partner-5.svg";
import PartnerLogo6 from "../../../public/partner-6.svg";
import Link from "next/link";

const CaseStudy = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const partnerSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: (
      <NextArrow
        style={{
          right: "-100px !important",
        }}
      />
    ),
    prevArrow: (
      <PrevArrow
        style={{
          left: "-100px !important",
        }}
      />
    ),
  };
  return (
    <>
      <Header />
      <HeroSection
        headTitle="Excellence Guaranteed:"
        subTitle="Uncompromising Quality in Every Molecule"
        initialImage={4}
      />
      <section className="pt-[54px] pb-[134px]  bg-neutral">
        <div className="mx-auto w-[63.28px] h-[3px] bg-secondary" />
        <h3 className="text-4xl 2xl:text-[50.11px] leading-[63px] mt-4 mb-[46px] text-primary font-extrabold text-center">
          SUCCESSFUL PROJECTS
        </h3>
        <div
          style={{
            boxShadow: "5.33px 5.33px 8.28px 0px #8F969BCC",
          }}
          className="bg-white w-9/12 2xl:w-[1446.77px] mb-[42px] items-center 2xl:max-w-[1445px] mx-auto p-6 2xl:py-[40px] 2xl:px-[42px] flex gap-[37px]"
        >
          <Image
            src="/project-1.jpg"
            width={625.85}
            height={584.37}
            alt="project 1"
            quality={100}
            objectFit="cover"
            className="basis-[50%] shrink-0"
          />
          <div>
            <div className="flex gap-4 mb-[34px]">
              <span className="basis-[52px] shrink-0">
                <SettingsIcon />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                The Project:
                <span className="block font-normal">Maleic Anhyride Plant</span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[29px]">
              <span className="basis-[52px] shrink-0">
                <TagIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Category:
                <span className="block font-normal">Petrochemicals</span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[37px]">
              <span className="basis-[52px] shrink-0">
                <UserIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Client:
                <span className="block font-normal">
                  Kuwait Petroleum Corporation (KPC)
                </span>
              </h4>
            </div>
            <div className="flex gap-4">
              <span className="basis-[52px] justify-self-center shrink-0">
                <CalendarIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Year:
                <span className=" font-normal"> 2022</span>
              </h4>
            </div>
          </div>
        </div>

        <Slider
          className="w-10/12 2xl:w-[1645px] projects mx-auto"
          {...settings}
        >
          <div>
            <div className="p-6 w-[351px] h-[353.17px] 2xl:w-[481px] mx-auto 2xl:h-[453.17px] bg-white">
              <div className="relative flex h-full  bg-no-repeat bg-cover bg-project1 items-center justify-center">
                <div className="absolute top-0 left-0 bg-[#f1801bd9] w-full h-full" />
                <h6
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="max-w-[259px] leading-tight border-l-[7px] border-l-primary pl-5 relative z-10 text-white text-[33px]"
                >
                  Maleic Anhyride Plant
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="relative p-6 w-[351px] h-[353.17px] 2xl:w-[481px] mx-auto 2xl:h-[453.17px] bg-white">
              <div className="relative flex h-full  bg-no-repeat bg-cover bg-project2 items-center justify-center">
                <div className="absolute top-0 left-0 bg-[#f1801bd9] w-full h-full" />
                <h6
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="max-w-[259px] leading-tight border-l-[7px] border-l-primary pl-5 relative z-10 text-white text-[33px]"
                >
                  Black Powder Removal from Crude Oil Pipe Line
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 w-[351px] h-[353.17px] 2xl:w-[481px] mx-auto 2xl:h-[453.17px] bg-white">
              <div className="relative flex h-full  bg-no-repeat bg-cover bg-project3 items-center justify-center">
                <div className="absolute top-0 left-0 bg-[#f1801bd9] w-full h-full" />
                <h6
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="max-w-[259px] leading-tight border-l-[7px] border-l-primary pl-5 relative z-10 text-white text-[33px]"
                >
                  Soil Remediation North & South West Kuwait
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 w-[351px] h-[353.17px] 2xl:w-[481px] mx-auto 2xl:h-[453.17px] bg-white">
              <div className="relative flex h-full  bg-no-repeat bg-cover bg-project4 items-center justify-center">
                <div className="absolute top-0 left-0 bg-[#f1801bd9] w-full h-full" />
                <h6
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="max-w-[259px] leading-tight border-l-[7px] border-l-primary pl-5 relative z-10 text-white text-[33px]"
                >
                  Demulsifer Bottle Test
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 w-[351px] h-[353.17px] 2xl:w-[481px] mx-auto 2xl:h-[453.17px] bg-white">
              <div className="relative flex h-full  bg-no-repeat bg-cover bg-project5 items-center justify-center">
                <div className="absolute top-0 left-0 bg-[#f1801bd9] w-full h-full" />
                <h6
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="max-w-[259px] leading-tight border-l-[7px] border-l-primary pl-5 relative z-10 text-white text-[33px]"
                >
                  Viscosity Reducer
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="p-6 w-[351px] h-[353.17px] 2xl:w-[481px] mx-auto 2xl:h-[453.17px] bg-white">
              <div className="relative flex h-full  bg-no-repeat bg-cover bg-project6 items-center justify-center">
                <div className="absolute top-0 left-0 bg-[#f1801bd9] w-full h-full" />
                <h6
                  style={{
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                  className="max-w-[259px] leading-tight border-l-[7px] border-l-primary pl-5 relative z-10 text-white text-[33px]"
                >
                  Sulfur Project
                </h6>
              </div>
            </div>
          </div>
        </Slider>
        <div className="text-center">
          <Link href={"/projects"}>
            <button
              // data-aos-duration="1500"
              // data-aos-delay="1300"
              // data-aos="fade-up"
              style={{
                clipPath: "polygon(0 0, 92% 0, 100% 100%, 8% 100%)",
              }}
              className="bg-secondary mt-[54px] mx-auto text-xl px-[111px] py-[28px] leading-[20px] text-white font-semibold"
            >
              VIEW ALL
            </button>
          </Link>
        </div>
      </section>
      <section>
        <div className="pt-[93px] text-center pb-[137px]  bg-partnerBg bg-no-repeat">
          <span className="inline-block h-[3px] mb-4 w-[63px] bg-secondary" />
          <h4 className="text-[50px] font-bold text-primary text-center leading-[68px]">
            PARTNERS
          </h4>
        </div>
        <div id="partners" className="w-10/12 mx-auto my-[81px]">
          <Slider className="mx-auto" {...partnerSettings}>
            <div>
              <img
                src="/partener-1.png"
                alt="partner logo"
                width={"auto"}
                height={"auto"}
                className="mx-auto w-9/12 grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <img
                src="/partener-2.png"
                alt="partner logo"
                width={"auto"}
                height={"auto"}
                className="mx-auto  w-9/12 grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <img
                src="/partener-3.png"
                alt="partner logo"
                width={"auto"}
                height={"auto"}
                className="mx-auto  w-9/12 grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <img
                src="/partener-4.png"
                alt="partner logo"
                width={"auto"}
                height={"auto"}
                className="mx-auto  w-9/12 grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <img
                src="/partener-5.png"
                alt="partner logo"
                width={"auto"}
                height={"auto"}
                className="mx-auto  w-9/12 grayscale hover:grayscale-0 transition-all"
              />
            </div>
            <div>
              <img
                src="/partener-6.png"
                alt="partner logo"
                width={"auto"}
                height={"auto"}
                className="mx-auto  w-9/12 grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </Slider>
        </div>
      </section>
      <div
        style={{
          opacity: "0.08",
        }}
        className="bg-[#858C99] h-[17px] w-full"
      />
      <section>
        <div className="pt-[46px] text-center pb-[102px]">
          <span className="inline-block h-[3px] mb-4 w-[63px] bg-secondary" />
          <h4 className="text-[50px] font-bold text-primary text-center leading-[68px]">
            CLIENTS
          </h4>
        </div>
        <div className="w-10/12 mx-auto pb-[170px]">
          <div className="grid grid-cols-7 place-content-center place-items-center gap-6">
            <img
              src="/client-1.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-2.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-3.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-4.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-5.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-6.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-7.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="grid grid-cols-7 place-content-center place-items-center gap-6">
            <img
              src="/client-8.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-9.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-10.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-11.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-12.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-13.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-14.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="grid grid-cols-7 place-content-center place-items-center gap-6">
            <img
              src="/client-15.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-16.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-17.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-18.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-19.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-20.svg"
              alt="client- logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
            <img
              src="/client-21.svg"
              alt="client logo"
              width={"auto"}
              height={"auto"}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CaseStudy;
