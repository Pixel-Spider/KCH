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
