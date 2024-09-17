import Image from "next/image";
import HeroSection from "@/components/heroSection";
import AboutUs from "@/components/about-us";
import OurProductAndService from "@/components/our-product-and-service";
import Footer from "@/components/Footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title="KUWAIT CHEMICAL HOUSE COMPANY"
          headTitle="Beyond Boundaries. Beyond Limits."
          subTitle="The Sky is Not the Limit…"
          initialImage={1}
          images={[
            "hero-image-lg.jpg",
            "hero-1.jpeg",
            "hero-2.jpeg",
            "hero-3.jpeg",
          ]}
        />
        <AboutUs />
        <OurProductAndService />
        <span className="absolute top-[76%] opacity-50 right-0 z-[2]">
          <Image
            src={"/about-us-bg3.png"}
            alt="Logo"
            width={352}
            height={587}
          />
        </span>
      </main>

      <Footer />
    </>
  );
}
