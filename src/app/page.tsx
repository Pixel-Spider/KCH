import Image from "next/image";
import WhatsApp from "../../public/whatsapp.svg";
import MenuIcon from "../../public/menu.svg";
import HeroSection from "@/components/heroSection";
import AboutUs from "@/components/about-us";
import OurProductAndService from "@/components/our-product-and-service";
import Footer from "@/components/Footer";
import CloseIcon from "../../public/close.svg";

export default function Home() {
  return (
    <>
      <header className="relative">
        <div className="bg-white flex items-center text-sm text-primary lg:h-[100px] xl:h-[110px] 2xl:h-[175px]">
          <span
            style={{
              clipPath:
                "polygon(74% 0, 100% 100%, 79% 100%, 0% 100%, 0 50%, 0% 0%)",
              background:
                "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
            }}
            className="inline-block relative z-10 px-6.5 pr-10 lg:pl-[30px] lg:pr-[90px] xl:pl-[35px] xl:pr-[110px] 2xl:pl-[45px] 2xl:pr-[140px] 2xl:pt-[22px] 2xl:pb-[19px] py-2 md:h-full md:inline-flex md:items-center "
          >
            <span className="relative lg:w-[75px] lg:h-[75px] xl:w-[100px] xl:h-[100px] 2xl:w-[129px] 2xl:h-[134px]">
              <Image
                src={"/logo.svg"}
                fill
                alt="Kuwait Chemical House Company logo"
              />
            </span>
          </span>
          <div className="w-full h-full relative">
            <div className="inline-flex md:h-[40%] md:flex w-full  items-center justify-between pr-6.5">
              <h2 className="basis-[70%] text-sm md:text-md xl:pl-12 2xl:pl-[88px] lg:text-lg xl:text-[25px] font-medium">
                KUWAIT CHEMICAL HOUSE COMPANY
              </h2>
              <span
                role="button"
                className="w-6 relative xl:top-2 basis-16 lg:basis-auto lg:w-auto lg:inline-flex lg:items-center lg:gap-2"
              >
                <WhatsApp className="ml-auto" />
                <span className="hidden lg:inline-block">00965 9445 5112</span>
              </span>
            </div>{" "}
            <div
              style={{
                clipPath: "polygon(0 0, 100% 0%, 100% 100%, 16% 100%)",
              }}
              className="absolute hidden 2xl:text-[26px] leading-[37px] 2xl:pt-[29px] 2xl:pb-[26px] md:inline-block uppercase lg:text-lg font-semibold text-white bottom-0 right-0 w-60 2xl:w-[304px] pl-20 py-3 bg-secondary"
            >
              Get a quote
            </div>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(270deg, #035F9D 0.11%, #2E3190 95.64%)",
          }}
          className="relative flex md:hidden items-center justify-between text-white"
        >
          <div className="inline-flex">
            <label className="ml-[26px]" htmlFor="menu">
              <MenuIcon />
            </label>
            <input id="menu" type="checkbox" hidden />
            <div
              style={{
                background:
                  "linear-gradient(270deg, #035F9D 0.11%, #2E3190 95.64%)",
              }}
              className="h-[calc(100vh-60px)] sidebar w-full bg-primary absolute top-0 z-20"
            >
              <label htmlFor="menu">
                <span className="absolute top-8 right-8">
                  <CloseIcon />
                </span>
              </label>
              <ul className="list-none p-6.5  flex flex-col text-[#868D9A] font-extrabold text-2xl gap-3">
                <li>Home</li>
                <li>Profile</li>
                <li>Products/Services</li>
                <li>Case Study</li>
                <li>Contact us</li>
              </ul>
              <button className="bg-secondary absolute bottom-0 text-white px-6.5 py-5 w-full">
                GET A QUOTE
              </button>
            </div>
          </div>
          <h4
            style={{
              clipPath:
                "polygon(100% 0%, 100% 50%, 100% 100%, 0 100%, 20% 100%, 0 1%)",

              background:
                "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
            }}
            className="py-3 px-6.5 pl-16"
          >
            GET A QUOTE
          </h4>
        </div>

        <div
          style={{
            clipPath: "polygon(0 0, 96% 0, 100% 100%, 0 100%)",
            background:
              "linear-gradient(270deg, #035F9D 0.11%, #2E3190 95.64%)",
          }}
          className="bg-primary 2xl:w-2xl-2 bottom-0 md:absolute md:z-[1] md:h-[60%] font-extrabold hidden  md:flex w-full md:items-center md:pl-[230px] md:pr-[100px]  2xl:pl-[402px] text-white text-2xl 2xl:text-[26px]"
        >
          <div className="2xl:mr-[102px]">Home</div>
          <div className="2xl:mr-[96px] text-[#868D9A]">Profile</div>
          <div className="2xl:mr-[68px] text-[#868D9A]">Products/Services</div>
          <div className="2xl:mr-[89px] text-[#868D9A]">Case Study </div>
          <div className="2xl:mr-[102px] text-[#868D9A]">Contact us</div>
        </div>
      </header>
      <main>
        <HeroSection />
        <AboutUs />
        <OurProductAndService />
      </main>
      <span className="absolute top-[76%] opacity-50 right-0 z-10">
        <Image src={"/about-us-bg3.png"} alt="Logo" width={352} height={587} />
      </span>
      <Footer />
    </>
  );
}
