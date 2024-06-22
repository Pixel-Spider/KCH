import Image from "next/image";
import WhatsApp from "../../public/whatsapp.svg";
import MenuIcon from "../../public/menu.svg";
import CloseIcon from "../../public/close.svg";
import Link from "next/link";
import ActiveLink from "./activeLink";

const Header = () => {
  return (
    <header className="relative">
      <div className="bg-white flex items-center text-sm text-primary lg:h-[110px] xl:h-[130px] xl2:h-[155px] 2xl:h-[175px]">
        <span
          style={{
            clipPath:
              "polygon(74% 0, 100% 100%, 79% 100%, 0% 100%, 0 50%, 0% 0%)",
            background:
              "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
          }}
          className="inline-block relative z-10 px-6.5  pr-10 lg:pl-[30px] lg:pr-[90px] xl:pl-[35px] xl:pr-[90px] xl2:pl-[35px] xl2:pr-[120px] xl2:pt-[18px] xl2:pb-[17px]  2xl:pl-[45px] 2xl:pr-[140px] 2xl:pt-[22px] 2xl:pb-[19px] py-2 md:h-full md:inline-flex md:items-center "
        >
          <span className="relative inline-block  w-[75px] h-[75px] xl:w-[100px] xl:h-[100px] xl2:w-[119px] xl2:h-[124px] 2xl:w-[129px] 2xl:h-[134px]">
            <Link href={"/"}>
              <Image
                src={"/logo.svg"}
                fill
                alt="Kuwait Chemical House Company logo"
              />
            </Link>
          </span>
        </span>
        <div className="w-full h-full relative">
          <div className="inline-flex md:h-[40%] md:flex w-full  items-center justify-between pr-6.5 md:r-12">
            <h2 className="basis-[70%] text-md md:text-xl sm:text-lg xl:pl-8 xl2:pl-[78px] 2xl:pl-[88px] lg:text-lg  xl:text-xl 2xl:text-[25px] font-medium">
              KUWAIT CHEMICAL HOUSE COMPANY
            </h2>
            <span
              role="button"
              className="w-6 relative xl:top-2 basis-16 md:basis-auto md:w-auto md:inline-flex md:items-center md:gap-2"
            >
              <WhatsApp className="ml-auto" />
              <span className="hidden md:inline-block md:text-md  xl:text-[18px] xl2:text-[20px] 2xl:text-[23px]">
                00965 9445 5112
              </span>
            </span>
          </div>{" "}
          <div
            style={{
              clipPath: "polygon(0 0, 100% 0%, 100% 100%, 16% 100%)",
            }}
            className="absolute hidden xl:text-xl  xl2:text-2xl 2xl:text-[26px] leading-[37px] xl:pt-[16px] xl2:pt-[23px] 2xl:pt-[29px] xl:pb-[18px] xl2:pb-[22px] 2xl:pb-[26px] lg:inline-block uppercase lg:text-lg font-semibold text-white bottom-0 right-0 w-60 xl2:pl-20 2xl:w-[304px] lg:w-[150px] lg:pl-6  xl:w-[200px] xl2:w-[280px] xl:pl-10 pl-20 py-3 bg-secondary"
          >
            Get a quote
          </div>
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(270deg, #035F9D 0.11%, #2E3190 95.64%)",
        }}
        className="relative flex lg:hidden items-center justify-between text-white"
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
            <ul className="list-none p-6.5 md:p-20  flex flex-col text-[#868D9A] font-extrabold text-2xl gap-3">
              <li>
                <ActiveLink href="/">Home</ActiveLink>
              </li>
              <li>
                <ActiveLink href="/profile">Profile</ActiveLink>
              </li>
              <li>Products/Services</li>
              <li>Case Study</li>
              <li>Contact us</li>
            </ul>
            <button className="bg-secondary absolute bottom-0 text-white px-6.5 md:px-20 py-5 w-full">
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
          className="py-3 px-6.5 md:px-20 pl-16 md:py-5 md:text-lg"
        >
          GET A QUOTE
        </h4>
      </div>

      <div
        style={{
          clipPath: "polygon(0 0, 96% 0, 100% 100%, 0 100%)",
          background: "linear-gradient(270deg, #035F9D 0.11%, #2E3190 95.64%)",
        }}
        className="bg-primary lg:w-lg 2xl:w-2xl-2 xl:w-xl xl2:w-xl2 bottom-0 md:absolute md:z-[1] md:h-[60%] font-extrabold hidden lg:text-lg  lg:flex lg:justify-around w-full md:items-center md:pl-[230px] md:pr-[100px] xl:pl-[258px]  2xl:pl-[402px] xl2:pl-[355px]  text-2xl xl:text-xl 2xl:text-[26px] xl2:text-[23px]"
      >
        <div className="xl:mr-[76px] xl2:mr-[82px] 2xl:mr-[102px]  whitespace-nowrap">
          <ActiveLink href="/">Home</ActiveLink>
        </div>
        <div className="xl:mr-[68px] xl2:mr-[76px] 2xl:mr-[96px] text-[#868D9A] whitespace-nowrap">
          <ActiveLink href="/profile">Profile</ActiveLink>
        </div>
        <div className="xl:mr-[45px] xl2:mr-[48px] 2xl:mr-[68px] text-[#868D9A] whitespace-nowrap">
          Products/Services
        </div>
        <div className="xl:mr-[65px] xl2:mr-[69px] 2xl:mr-[89px] text-[#868D9A] whitespace-nowrap">
          Case Study{" "}
        </div>
        <div className="xl:mr-[76px] xl2:mr-[82px] 2xl:mr-[102px] text-[#868D9A] whitespace-nowrap">
          Contact us
        </div>
      </div>
    </header>
  );
};

export default Header;
