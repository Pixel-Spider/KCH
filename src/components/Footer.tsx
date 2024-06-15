import Image from "next/image";

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
        <ul className="text-[#868D9A] flex flex-col md:flex-row md:gap-6 lg:gap-8 xl:gap-16 2xl:gap-30 gap-2 pt-2 pb-5 list-none px-6.5 text-lg font-extrabold">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
