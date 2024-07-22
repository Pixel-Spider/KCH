import Footer from "@/components/Footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Image from "next/image";
import InstaIcon from "../../../public/insta.svg";
import FacebookIcon from "../../../public/facebook.svg";
import XIcon from "../../../public/x.svg";
import LinkedInIcon from "../../../public/linkedIn.svg";

const ContactUs = () => {
  return (
    <>
      <Header />
      <HeroSection
        initialImage={5}
        headTitle="Get in Touch:"
        subTitle="Let's Create Chemical Excellence Together"
      />
      <section className="pt-[54px] pb-[134px]  bg-white">
        <div className="mx-auto w-[63.28px] h-[3px] bg-secondary" />
        <h3
          data-aos="fade-up"
          data-aos-duration="1500"
          className="text-4xl 2xl:text-[50.11px] leading-[63px] mt-4 mb-[46px] text-primary font-extrabold text-center"
        >
          CONNECT WITH US
        </h3>
        <div className="flex justify-center">
          <Image src="/logo.svg" alt="logo" width={216} height={224} />
          <div className="h-[147.79px] ml-[46px] mr-[57px] bg-[#a5a3a4] w-[5.33px]" />
          <div className="text-primary">
            <h3 className="font-extrabold leading-[48px] text-2xl 2xl:text-[35px] ">
              KUWAIT CHEMICAL HOUSE COMPANY
            </h3>
            <p className="font-extrabold leading-[40px] text-xl 2xl:text-[29px] ">
              Tel: +965 23725423 ob: +965-94455112{" "}
            </p>
            <p className="font-extrabold leading-[64px] text-[#D45107] text-4xl 2xl:text-[47px]">
              Hotline: 0808 0909
            </p>
            <p className="font-extrabold text-xl leading-[40px] 2xl:text-[29px]">
              Email: alsoberie@kuwaitchemicalhouse.com
            </p>
            <p className="font-extrabold text-xl  leading-[40px] 2xl:text-[29px]">
              Address: P.O Box: 116 Fintas Code no: 51002 Kuwait
            </p>
          </div>
        </div>
        <p className="text-primary text-center text-xl font-normal mt-[79px] mb-[43px]  2xl:text-[30px]">
          Dive into the Chemistry Conversation on Social Media
        </p>
        <div className="flex justify-center gap-6 mb-[96px] 2xl:gap-[40px]">
          <XIcon />
          <InstaIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
        <div className="h-[966px] w-full relative flex">
          <div className="w-[60vw] h-[966px] relative">
            <Image src="/door-opening.jpg" alt="contact-us" fill />
          </div>

          <div>
            <h4 className="text-primary relative mt-[68px] ml-2 translate-x-[-40%] whitespace-nowrap text-5xl 2xl:text-[79px] text-center inline-block">
              <span className="inline-block absolute top-[-20px] left-0 w-[100px] h-[5px] bg-secondary" />
              <span className="text-white">UNLOCK</span> POSSIBILITIES
            </h4>
            <br />
            <h5 className="text-white -indent-[15px] after:content-['”'] before:content-['”'] -translate-x-full absolute bottom-0 z-20 leading-relaxed pb-20 text-4xl 2xl:text-[49px] w-min">
              Join the Chemistry Champions: Explore Exciting Career
              Opportunities
            </h5>
          </div>
          <div className="absolute bottom-0 z-10 w-full h-full bg-contactUsBg bg-no-repeat bg-contain bg-contact-us-position" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
