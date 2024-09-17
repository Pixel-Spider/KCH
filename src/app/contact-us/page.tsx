import Footer from "@/components/Footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import Image from "next/image";
import InstaIcon from "../../../public/insta.svg";
import FacebookIcon from "../../../public/facebook.svg";
import XIcon from "../../../public/x.svg";
import LinkedInIcon from "../../../public/linkedIn.svg";
import Input from "@/components/input";
import TextArea from "@/components/textArea";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
      <Header />
      <HeroSection
        initialImage={5}
        headTitle="Get in Touch:"
        subTitle="Let's Create Chemical Excellence Together"
        images={[
          "hero-image-lg.jpg",
          "profile_hero-bg1.jpg",
          "hero-3.jpg",
          "hero-bg-4.jpg",
          "hero-bg-5.jpg",
        ]}
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
              Tel: +965 94455112 ob: +965-94455112{" "}
            </p>
            <p className="font-extrabold leading-[64px] text-[#D45107] text-4xl 2xl:text-[47px]">
              Hotline:{" "}
              <Link className="cursor-pointer" href="tel:08080909">
                0808 0909
              </Link>
            </p>
            <p className="font-extrabold text-xl leading-[40px] 2xl:text-[29px]">
              Email:{" "}
              <Link
                className="cursor-pointer"
                href="mailto:alsoberie@kuwaitchemicalhouse.com"
              >
                alsoberie@kuwaitchemicalhouse.com
              </Link>
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

          <Link
            href={
              "https://www.instagram.com/kuwaitchemicalhousecompany?igsh=MTh0dmttbDR3Z29mcw=="
            }
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <InstaIcon />
          </Link>
          <Link
            href={
              "https://www.facebook.com/share/cESovM3daNvzJPPG/?mibextid=qi2Omg"
            }
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </Link>
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
            <div className="text-white  -translate-x-full absolute bottom-0 z-20 leading-relaxed pb-20 text-4xl 2xl:text-[49px] w-min">
              <div
                className=" -indent-[15px] before:content-['”']"
                data-aos="fade-up"
              >
                Join the
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="1500"
              >
                Chemistry
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                Champions:
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="150"
                data-aos-duration="1500"
              >
                Explore
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Exciting
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="250"
                data-aos-duration="1500"
              >
                Career
              </div>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1500"
                className="after:content-['”']"
              >
                Opportunities
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 z-10 w-full h-full bg-contactUsBg bg-no-repeat bg-contain bg-contact-us-position" />
        </div>
      </section>
      <section id="quote" className="flex scroll-mt-[250px] mb-[100px]">
        <div className="basis-1/2">
          <h5 className="text-[#2E3186] text-center leading-normal max-w-[593px] mx-auto text-3xl font-extrabold 2xl:text-[49px]">
            GET A QUOTE FROM OUR GLOBAL SUPPLIERS
          </h5>
          <img
            src="/Group-logo.png"
            alt="logo"
            width={"100%"}
            height={"100%"}
            className="max-w-[650px] mx-auto mt-[73px]"
          />
        </div>
        <div className="basis-1/2">
          <div className="max-w-[678px] mx-auto">
            <div className="flex w-full gap-[18px]">
              <Input label="First Name" />
              <Input label="Last Name" />
            </div>
            <Input label="Company" />
            <Input label="Email" />
            <Input label="Phone number" />
            <Input label="Subject" />
            <TextArea label="Message" />

            <p className="text-primary flex items-center font-normal text-[19px] my-6">
              <input
                id="checkbox"
                className="size-4 mr-4 rounded-none border-black"
                type="checkbox"
              />
              <label htmlFor="checkbox" className="cursor-pointer">
                By Selecting This you Agree our{" "}
                <Link href={"#"} className="text-secondary">
                  Terms & Conditions
                </Link>
              </label>
            </p>
            <button
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #ED801B 0%, #E57114 38%, #D45107 100%)",
              }}
              className="bg-secondary w-full mx-auto py-[10px] text-xl text-white font-semibold active:translate-y-1 transition-all duration-200"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
