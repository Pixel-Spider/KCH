import Image from "next/image";
import SettingsIcon from "../../../public/settings.svg";
import TagIcon from "../../../public/tag.svg";
import CalendarIcon from "../../../public/calendar.svg";
import UserIcon from "../../../public/user.svg";
import Header from "@/components/header";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div>
      <Header />
      <section className="pt-[54px] pb-[134px]  bg-neutral">
        <div className="mx-auto w-[63.28px] h-[3px] bg-secondary" />
        <h3 className="text-4xl 2xl:text-[50.11px] leading-[63px] mt-4 mb-[46px] text-primary font-extrabold text-center">
          SUCCESSFUL PROJECTS
        </h3>
        <div
          style={{
            boxShadow: "5.33px 5.33px 8.28px 0px #8F969BCC",
          }}
          className="bg-white  mb-[42px] items-center w-9/12 2xl:w-[1446.77px] mx-auto p-6 2xl:py-[40px] 2xl:px-[42px] flex gap-[37px]"
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
        <div
          style={{
            boxShadow: "5.33px 5.33px 8.28px 0px #8F969BCC",
          }}
          className="bg-white mb-[42px] items-center w-9/12 2xl:w-[1446.77px] mx-auto p-6 2xl:py-[40px] 2xl:px-[42px] flex gap-[37px]"
        >
          <Image
            src="/project-2.jpg"
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
                <span className="block font-normal">
                  Black Powder Removal from Crude Oil Pipe Line
                </span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[29px]">
              <span className="basis-[52px] shrink-0">
                <TagIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Category:
                <span className="block font-normal">Oil & Gas</span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[37px]">
              <span className="basis-[52px] shrink-0">
                <UserIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Client:
                <span className="block font-normal">Kuwait Oil Company</span>
              </h4>
            </div>
            <div className="flex gap-4">
              <span className="basis-[52px] justify-self-center shrink-0">
                <CalendarIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Year:
                <span className=" font-normal"> 2016</span>
              </h4>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "5.33px 5.33px 8.28px 0px #8F969BCC",
          }}
          className="bg-white mb-[42px] items-center w-9/12 2xl:w-[1446.77px] mx-auto p-6 2xl:py-[40px] 2xl:px-[42px] flex gap-[37px]"
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
                <span className="block font-normal">
                  Soil Remediation North & South West Kuwait{" "}
                </span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[29px]">
              <span className="basis-[52px] shrink-0">
                <TagIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Category:
                <span className="block font-normal">Oil & Gas</span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[37px]">
              <span className="basis-[52px] shrink-0">
                <UserIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Client:
                <span className="block font-normal">Kuwait Oil Company</span>
              </h4>
            </div>
            <div className="flex gap-4">
              <span className="basis-[52px] justify-self-center shrink-0">
                <CalendarIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Year:
                <span className=" font-normal"> 2021</span>
              </h4>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "5.33px 5.33px 8.28px 0px #8F969BCC",
          }}
          className="bg-white mb-[42px] items-center w-9/12 2xl:w-[1446.77px] mx-auto p-6 2xl:py-[40px] 2xl:px-[42px] flex gap-[37px]"
        >
          <Image
            src="/project-4.jpg"
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
                <span className="block font-normal">
                  Demulsifer Bottle Test
                </span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[29px]">
              <span className="basis-[52px] shrink-0">
                <TagIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Category:
                <span className="block font-normal">Oil & Gas</span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[37px]">
              <span className="basis-[52px] shrink-0">
                <UserIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Client:
                <span className="block font-normal">Kuwait Oil Company</span>
              </h4>
            </div>
            <div className="flex gap-4">
              <span className="basis-[52px] justify-self-center shrink-0">
                <CalendarIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Year:
                <span className=" font-normal"> 2018 - 2019</span>
              </h4>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "5.33px 5.33px 8.28px 0px #8F969BCC",
          }}
          className="bg-white mb-[42px] items-center w-9/12 2xl:w-[1446.77px] mx-auto p-6 2xl:py-[40px] 2xl:px-[42px] flex gap-[37px]"
        >
          <Image
            src="/project-5.jpg"
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
                <span className="block font-normal">Viscosity Reducer</span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[29px]">
              <span className="basis-[52px] shrink-0">
                <TagIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Category:
                <span className="block font-normal">Oil & Gas</span>
              </h4>
            </div>
            <div className="flex gap-4 mb-[37px]">
              <span className="basis-[52px] shrink-0">
                <UserIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Client:
                <span className="block font-normal">Kuwait Oil Company</span>
              </h4>
            </div>
            <div className="flex gap-4">
              <span className="basis-[52px] justify-self-center shrink-0">
                <CalendarIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Year:
                <span className=" font-normal"> 2018</span>
              </h4>
            </div>
          </div>
        </div>
        <div
          style={{
            boxShadow: "5.33px 5.33px 8.28px 0px #8F969BCC",
          }}
          className="bg-white mb-[42px] items-center w-9/12 2xl:w-[1446.77px] mx-auto p-6 2xl:py-[40px] 2xl:px-[42px] flex gap-[37px]"
        >
          <Image
            src="/project-6.jpg"
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
                <span className="block font-normal">Sulfur Project</span>
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
                  Kuwait Petroleum Corporation
                </span>
              </h4>
            </div>
            <div className="flex gap-4">
              <span className="basis-[52px] justify-self-center shrink-0">
                <CalendarIcon className="mx-auto" />
              </span>
              <h4 className="text-2xl 2xl:text-[34px] font-semibold text-primary">
                Year:
                <span className=" font-normal"> 2021</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
