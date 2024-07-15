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
  return (
    <>
      <Header />
      <ProfileHeroSection />
      <section className="pt-[54px]  bg-neutral">
        <div className="mx-auto w-[63.28px] h-[3px] bg-secondary" />
        <h3 className="text-[50.11px] leading-[63px] mt-4 mb-[46px] text-primary font-extrabold text-center">
          SUCCESSFUL PROJECTS
        </h3>
        <div
          style={{
            boxShadow: "5.33px 5.33px 8.28px 0px #8F969BCC",
          }}
          className="bg-white mb-[42px] items-center 2xl:max-w-[1445px] mx-auto py-[40px] px-[42px] flex gap-[37px]"
        >
          <Image
            src="/project-1.jpg"
            width={625.85}
            height={584.37}
            alt="project 1"
            quality={100}
            objectFit="cover"
          />
          <div>
            <div className="flex gap-4 mb-[34px]">
              <span className="basis-[52px] shrink-0">
                <SettingsIcon />
              </span>
              <h4 className="text-[34px] font-semibold text-primary">
                The Project:
                <span className="block font-normal">Maleic Anhyride Plant</span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[29px]">
              <span className="basis-[52px] shrink-0">
                <TagIcon className="mx-auto" />
              </span>
              <h4 className="text-[34px] font-semibold text-primary">
                Category:
                <span className="block font-normal">Petrochemicals</span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[37px]">
              <span className="basis-[52px] shrink-0">
                <UserIcon className="mx-auto" />
              </span>
              <h4 className="text-[34px] font-semibold text-primary">
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
              <h4 className="text-[34px] font-semibold text-primary">
                Year:
                <span className=" font-normal"> 2022</span>
              </h4>
            </div>
          </div>
        </div>

        <Slider className="max-w-[85%] mx-auto" {...settings}>
          <div>
            <div className="relative p-6 w-[481px] h-[453.17px] bg-white">
              <div className="absolute top-0 left-0 bg-[#f1801bd9] w-full h-full" />
              <div className="flex h-full  bg-no-repeat bg-cover bg-project1 items-center justify-center">
                <h6 className="max-w-[259px] leading-tight border-l-[7px] border-l-primary pl-5 relative z-10 text-white text-[33px]">
                  Black Powder Removal from Crude Oil Pipe Line
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="relative p-6 w-[481px] h-[453.17px] bg-white">
              <div className="absolute top-0 left-0 bg-[#f1801bd9] w-full h-full" />
              <div className="flex h-full  bg-no-repeat bg-cover bg-project1 items-center justify-center">
                <h6 className="max-w-[259px] leading-tight border-l-[7px] border-l-primary pl-5 relative z-10 text-white text-[33px]">
                  Black Powder Removal from Crude Oil Pipe Line
                </h6>
              </div>
            </div>
          </div>
          <div>
            <div className="relative p-6 w-[481px] h-[453.17px] bg-white">
              <div className="absolute top-0 left-0 bg-[#f1801bd9] w-full h-full" />
              <div className="flex h-full  bg-no-repeat bg-cover bg-project1 items-center justify-center">
                <h6 className="max-w-[259px] leading-tight border-l-[7px] border-l-primary pl-5 relative z-10 text-white text-[33px]">
                  Black Powder Removal from Crude Oil Pipe Line
                </h6>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      <Footer />
    </>
  );
};

export default CaseStudy;
