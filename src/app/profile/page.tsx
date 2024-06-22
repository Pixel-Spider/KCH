import Footer from "@/components/Footer";
import ChairManMessage from "@/components/chairman-message";
import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import OurTeam from "@/components/our-team";
import OurMission from "../../../public/ourMission.svg";
import OurVision from "../../../public/ourVision.svg";
import OurValues from "../../../public/ourValues.svg";
import QualityIcon from "../../../public/quality.svg";
import ExcellenceIcon from "../../../public/excelence.svg";
import OurCertification from "@/components/ourCertification";
import ProfileHeroSection from "@/components/profile-hero-section";

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileHeroSection />
      <div className="px-6.5 md:px-20 xl:px-[150px] 2xl:px-[185px]">
        <ChairManMessage />
        <OurTeam />
        <section className="mt-[54px] mb-[35px] 2xl:my-[65px]">
          <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-3">
            <div className="align-start">
              <div className="w-full lg:w-10/12">
                <div className="relative text-center h-[200px] flex flex-col justify-between">
                  <OurMission className="mx-auto" />
                  <h6 className="text-[28px] text-primary">
                    OUR <span className="text-[#EB801B]">MISSION</span>
                  </h6>
                  <div className="bg-[#808080] w-[1.3px] h-full absolute right-[-25px] top-0" />
                </div>
                <div className="text-lg text-primary md:text-md lg:text-lg 2xl:text-xl 2xl:leading-[32px]  font-normal mt-6 ">
                  <p>
                    To be a leading market brand in our chosen sphere of work
                    with quality chemical products and services, cost effective
                    manufacturing, state of the art technology and environment
                    friendly practices, creating value for our stakeholders.
                  </p>
                  <p>
                    Developing and delivering innovative products that meet
                    customers needs.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full lg:w-10/12 ">
                <div className="relative h-[200px] flex flex-col justify-between">
                  <OurVision className="mx-auto" />
                  <h6 className="text-[28px] text-center text-primary">
                    OUR <span className="text-[#EB801B]">VISION</span>
                  </h6>
                  <div className="bg-[#808080] w-[1.3px] h-full absolute right-[-25px] top-0" />
                </div>
                <div className="text-lg text-primary md:text-md lg:text-lg 2xl:text-xl 2xl:leading-[32px]  font-normal mt-6 ">
                  <p>
                    To become the preferred supplier of chemical products on the
                    global scale ultimately leading our endeavors to build
                    stakeholder’s pride.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="w-12/12 text-center">
                <div className="h-[200px] relative flex flex-col justify-between">
                  <OurValues className="mx-auto" />
                  <h6 className="text-[28px] text-primary">
                    OUR <span className="text-[#EB801B]">VALUES</span>
                  </h6>
                </div>
                <div className="text-lg text-primary text-left md:text-md lg:text-lg 2xl:text-xl 2xl:leading-[32px] font-normal mt-6">
                  <p className="text-[#EB801B] font-semibold">
                    Customer’s Satisfaction:
                  </p>
                  <p>
                    {" "}
                    We continuously seek ways to exceed the expectations of our
                    customers, and are solely focused on their success.
                  </p>
                  <p className="text-[#EB801B] flex gap-4 md:block items-center relative mt-4 font-semibold">
                    <QualityIcon className="md:absolute scale-75 md:scale-100 left-0 md:translate-x-[-150%]" />
                    Quality:
                  </p>
                  <p>
                    {" "}
                    At KCHC, we only provide the products that are of the utmost
                    excellence.
                  </p>
                  <p className="text-[#EB801B] flex items-center gap-4 md:block relative mt-4 font-semibold">
                    <ExcellenceIcon className="md:absolute  scale-75 md:scale-100 left-0 md:translate-x-[-150%]" />
                    Excellence:
                  </p>
                  <p>
                    We set high expectations, holding ourselves accountable for
                    results. We work with a strong sense of urgency and strive
                    for fawless execution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <OurCertification />
      </div>
      <Footer />
    </>
  );
};

export default Profile;
