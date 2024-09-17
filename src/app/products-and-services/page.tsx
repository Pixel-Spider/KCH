"use client";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import ProfileHeroSection from "@/components/profile-hero-section";
import TargetPoint from "../../../public/point.svg";
import Image from "next/image";
import React, { Suspense, useState } from "react";
import HeroSection from "@/components/heroSection";
import Project1 from "./1";
import Project2 from "./2";
import Project3 from "./3";
import Project4 from "./4";
import Project5 from "./5";
import Project6 from "./6";
import Project7 from "./7";
import Project8 from "./8";
import Project9 from "./9";
import Project10 from "./10";
import Project11 from "./11";
import Project12 from "./12";
import { useQueryState } from "next-usequerystate";

const serviceList = [
  {
    id: 1,
    title: "OIL FIELD CHEMICALS",
    component: <Project1 />,
  },
  {
    id: 2,
    title: "WATER TREATMENT CHEMICALS",
    component: <Project2 />,
  },
  {
    id: 3,
    title: "CONSTRUCTION CHEMICALS",
    component: <Project3 />,
  },
  {
    id: 4,
    title: "AVIATION CHEMICALS",
    component: <Project4 />,
  },
  {
    id: 5,
    title: "PAINT & COATING  CHEMICALS",
    component: <Project5 />,
  },
  {
    id: 6,
    title: "FOOD & BEVERAGE CHEMICALS",
    component: <Project6 />,
  },
  {
    id: 7,
    title: "SOIL REMEDIATION CHEMICALS",
    component: <Project7 />,
  },
  {
    id: 8,
    title: "INDUSTRIAL CLEANING & MARINE CHEMICALS",
    component: <Project8 />,
  },
  {
    id: 9,
    title: "ASPHALT CHEMICALS ",
    component: <Project9 />,
  },
  {
    id: 10,
    title: "ENVIRONMENTAL & GREEN CHEMICALS",
    component: <Project10 />,
  },
  {
    id: 11,
    title: "LABORATORY CHEMICALS",
    component: <Project11 />,
  },
  {
    id: 12,
    title: "BASIC INDUSTRIAL  CHEMICALS",
    component: <Project12 />,
  },
];

const ProductAndServices = () => {
  const [active, setActive] = useQueryState("active");
  console.log("active", active, typeof active);
  return (
    <>
      <Header />
      <HeroSection
        headTitle="Tailoring Solutions:"
        subTitle="Transforming Industries with Our Chemical Expertise"
        initialImage={3}
        images={[
          "hero-image-lg.jpg",
          "profile_hero-bg1.jpg",
          "hero-3.jpg",
          "hero-bg-4.jpg",
          "hero-bg-5.jpg",
        ]}
      />
      <div id="products" className="scroll-mt-[130px] 2xl:scroll-mt-[150px]" />
      <section className="pb-[900px] flex bg-service-bg-img bg-service-bg-img-size-2 bg-no-repeat bg-about-us-position">
        <div className="xl:w-[380px] xl2:w-[440px] 2xl:w-[480px] shrink-0 text-center">
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0)",
            }}
            className="xl:w-[200px] xl:mr-[60px] xl2:mr-[70px] 2xl:mr-[80px] xl2:w-[220px] 2xl:w-[276px] ml-auto pb-4 bg-secondary-linear"
          >
            <h3 className="xl:text-2xl 2xl:text-[34px] leading-tight py-4 px-3 text-center text-white">
              What We Offer For You
            </h3>
          </div>
          <ul className="mt-[70px] xl:mr-[60px] xl2:mr-[70px] 2xl:mr-[80px] flex flex-col gap-[44px] uppercase">
            {serviceList.map((item) => {
              return (
                <li
                  key={item.id}
                  role="button"
                  onClick={() => {
                    setActive(String(item.id));
                  }}
                  className="inline-flex justify-end items-center gap-[17px]"
                >
                  <span
                    className={
                      Number(active) === item.id
                        ? "w-[43px] transition-all duration-300"
                        : "w-[43px] transition-all duration-300 rotate-90"
                    }
                  >
                    <TargetPoint
                      color={Number(active) === item.id ? "#F0801B" : "#8396AE"}
                    />
                  </span>
                  <span className="text-xl 2xl:text-2xl xl:w-[220px] 2xl:w-[257px] text-primary">
                    {item.title}
                  </span>
                </li>
              );
            })}
          </ul>
          {!active && (
            <>
              <div className="bg-product-service-bg bg-no-repeat bg-cover h-[1400px]" />
              <div className="bg-product-service-bg bg-no-repeat bg-cover h-[1400px]" />
              <div className="bg-product-service-bg bg-no-repeat bg-cover h-[1400px]" />
              <div className="bg-product-service-bg bg-no-repeat bg-cover h-[1400px]" />
              <div className="bg-product-service-bg bg-no-repeat bg-cover h-[1400px]" />
              <div className="bg-product-service-bg bg-no-repeat bg-cover h-[1400px]" />
              <div className="bg-product-service-bg bg-no-repeat bg-cover h-[1400px]" />
              <div className="bg-product-service-bg bg-no-repeat bg-cover h-[1400px]" />
            </>
          )}
        </div>
        <div className="w-full">
          {Number(active) ? (
            serviceList[Number(active) - 1].component
          ) : (
            <>
              <Project1 />
              <Project2 />
              <Project3 />
              <Project4 />
              <Project5 />
              <Project6 />
              <Project7 />
              <Project8 />
              <Project9 />
              <Project10 />
              <Project11 />
              <Project12 />
            </>
          )}
        </div>
      </section>
      <span className="absolute xl:top-full opacity-50 right-0 z-10">
        <Image src={"/about-us-bg3.png"} alt="Logo" width={352} height={587} />
      </span>
      <Footer />
    </>
  );
};

function ProductAndServicesWrappedSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductAndServices />
    </Suspense>
  );
}

export default ProductAndServicesWrappedSuspense;
