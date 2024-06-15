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
      <header>
        <div className="bg-white flex items-center text-sm text-primary lg:h-[100px] xl:h-[110px] 2xl:h-[130px]">
          <span
            style={{
              clipPath:
                "polygon(74% 0, 100% 100%, 79% 100%, 0% 100%, 0 50%, 0% 0%)",
              background:
                "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
            }}
            className="inline-block relative z-10 px-6.5 pr-10 lg:pl-[30px] lg:pr-[90px] xl:pl-[35px] xl:pr-[110px] 2xl:pl-[45px] 2xl:pr-[140px] py-2 md:h-full md:inline-flex md:items-center "
          >
            <Image
              src={"/logo.svg"}
              className="lg:w-[75px] lg:h-[75px] xl:w-[100px] xl:h-[100px] 2xl:w-[130px] 2xl:h-[130px]"
              alt="logo"
              width={64}
              height={64}
            />
          </span>
          <div className="w-full h-full relative">
            <div className="inline-flex md:h-[40%] md:flex w-full  items-center justify-between pr-6.5">
              <h2 className="basis-[70%] text-sm md:text-md xl:pl-12 lg:text-lg xl:text-xl">
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
                clipPath: "polygon(0 0, 96% 0, 100% 100%, 0 100%)",
                background:
                  "linear-gradient(270deg, #035F9D 0.11%, #2E3190 95.64%)",
              }}
              className="bg-primary md:absolute md:z-[1] md:h-[60%] font-extrabold hidden  md:flex w-full md:justify-between md:items-center md:ml-[-180px] md:pl-[230px] md:pr-[100px] text-white"
            >
              <div>Home</div>
              <div>Profile</div>
              <div>Products/Services</div>
              <div>Case Study </div>
              <div>Contact us</div>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 100% 0%, 100% 100%, 16% 100%)",
              }}
              className="absolute hidden md:inline-block uppercase lg:text-lg font-semibold text-white bottom-0 right-0 w-60 pl-20 py-3 bg-secondary"
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
      </header>
      <main>
        <HeroSection />
        <AboutUs />
        <OurProductAndService />
      </main>
      <Footer />
    </>
  );
}
