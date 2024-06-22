import Image from "next/image";
import Link from "next/link";
import ActiveLink from "./activeLink";

const Footer = () => {
  return (
    <footer className="bg-primary bg-footer-bg bg-contain lg:pt-6 lg:pb-8 2xl:pt-8 2xl:pb-10  md:bg-footer-bg-md bg-no-repeat bg-right-bottom">
      <div className="md:flex md:items-center">
        <span
          style={{
            clipPath:
              "polygon(74% 0, 100% 100%, 79% 100%, 0% 100%, 0 50%, 0% 0%)",
            background:
              "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
          }}
          className="inline-block relative z-10 px-6.5 md:px-20 2xl:pt-[22px] 2xl:pb-[19px] pr-10 lg:pl-[30px] lg:pr-[90px] xl:pl-[35px] xl:pr-[110px] 2xl:pl-[45px] 2xl:pr-[140px] py-2 md:h-full md:inline-flex md:items-center "
        >
          <Link href={"/"}>
            <Image
              src={"/logo.svg"}
              className="lg:w-[75px] lg:h-[75px] xl:w-[100px] xl:h-[100px] 2xl:w-[130px] 2xl:h-[130px]"
              alt="logo"
              width={64}
              height={64}
            />
          </Link>
        </span>
        <ul className=" flex flex-col 2xl:text-[26px] md:flex-row md:gap-6 lg:gap-8 xl:gap-16 2xl:gap-30 gap-2 pt-2 pb-5 list-none px-6.5 md:px-20 text-lg font-extrabold">
          <div className="2xl:mr-[102px]">
            <ActiveLink href={"/"}>Home </ActiveLink>
          </div>
          <div className="2xl:mr-[96px] text-[#868D9A]">
            <ActiveLink href={"/profile"}>Profile</ActiveLink>
          </div>
          <div className="2xl:mr-[68px] text-[#868D9A]">
            <ActiveLink href={"/products-and-services"}>
              Products/Services
            </ActiveLink>
          </div>
          <div className="2xl:mr-[89px] text-[#868D9A]">
            <ActiveLink href={"/case-study"}>Case Study</ActiveLink>{" "}
          </div>
          <div className="2xl:mr-[102px] text-[#868D9A]">
            <ActiveLink href={"/contact-us"}>Contact us</ActiveLink>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
