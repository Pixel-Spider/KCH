"use client";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import ProfileHeroSection from "@/components/profile-hero-section";
import TargetPoint from "../../../public/point.svg";
import Image from "next/image";
import React, { useState } from "react";
// import { useQueryState } from "next-usequerystate";

const serviceList = [
  {
    id: 1,
    title: "OIL FIELD CHEMICALS",
    bg: "1.png",
  },
  {
    id: 2,
    title: "WATER TREATMENT CHEMICALS",
  },
  {
    id: 3,
    title: "CONSTRUCTION CHEMICALS",
  },
  {
    id: 4,
    title: "AVIATION CHEMICALS",
  },
  {
    id: 5,
    title: "PAINT & COATING  CHEMICALS",
  },
  {
    id: 6,
    title: "FOOD & BEVERAGE CHEMICALS",
  },
  {
    id: 7,
    title: "SOIL REMEDIATION CHEMICALS",
  },
  {
    id: 8,
    title: "INDUSTRIAL CLEANING & MARINE CHEMICALS",
  },
  {
    id: 9,
    title: "ASPHALT CHEMICALS ",
  },
  {
    id: 10,
    title: "AVIATION CHEMICALS",
  },
  {
    id: 11,
    title: "ENVIRONMENTAL & GREEN CHEMICALS",
  },
  {
    id: 12,
    title: "LABORATORY CHEMICALS",
  },
  {
    id: 13,
    title: "BASIC INDUSTRIAL  CHEMICALS",
  },
];

const ProductAndServices = () => {
  const [active, setActive] = useState("active");
  console.log("active", active, typeof active);
  return (
    <>
      <Header />
      <ProfileHeroSection />
      <section className="pb-[400px] flex bg-service-bg-img bg-service-bg-img-size bg-no-repeat bg-about-us-position">
        <div className="xl:w-[380px] xl:pr-[60px] xl2:pr-[70px] 2xl:pr-[80px]  xl2:w-[440px] 2xl:w-[480px] shrink-0 text-center">
          <div
            style={{
              clipPath:
                "polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0)",
            }}
            className="xl:w-[200px] xl2:w-[220px] 2xl:w-[276px] ml-auto pb-4 bg-secondary-linear"
          >
            <h3 className="xl:text-2xl 2xl:text-[34px] leading-tight py-4 px-3 text-center text-white">
              What We Offer For You
            </h3>
          </div>
          <ul className="mt-[70px] flex flex-col gap-[44px] uppercase">
            {serviceList.map((item) => {
              return (
                <li
                  key={item.id}
                  role="button"
                  onClick={() => setActive(String(item.id))}
                  className="inline-flex justify-end items-center gap-[17px]"
                >
                  <span
                    className={
                      Number(active) === item.id
                        ? "w-[43px]"
                        : "w-[43px] rotate-90"
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
        </div>
        <div className="w-full">
          <div
            style={{
              backgroundImage: "url('/1.png')",
            }}
            className="xl:pl-[100px] 2xl:pl-[140px]"
          >
            <div
              style={{
                backgroundImage:
                  "linear-gradient(90deg, rgb(46 49 144 / 70%) 0%, rgb(3 95 157 / 88%) 100%)",
              }}
              className="w-full xl:pl-[146px] 2xl:pl-[196px] pt-[76px] pb-[96px]"
            >
              <div className="relative 2xl:max-w-[801px] xl:max-w-[601px]">
                <h4
                  style={{
                    transformOrigin: "0 0",
                    transform: "rotate(270deg)",
                    bottom: 0,
                    width: "100%",
                    marginLeft: "auto",
                    textAlign: "left",
                  }}
                  className="xl:text-[29px] xl2:text-[34px] 2xl:text-[41px] xl:left-[-80px] 2xl:left-[-120px] absolute text-white font-extrabold"
                >
                  {active && serviceList[Number(active) - 1]?.title}
                </h4>
                <h3 className="text-secondary xl:text-[26px] xl2:text-[29px] 2xl:text-[38px] font-extrabold">
                  Fueling the Future: Navigate Oil Fields with Our Advanced
                  Chemical Solutions
                </h3>
                <p className="text-white font-normal mt-3 mb-6 xl:text-2xl 2xl:text-[29px]">
                  Specialized chemicals for the oil and gas industry, covering
                  drilling fluids, production chemicals, and cementing chemicals
                  supporting various stages of oil & gas exploration, extraction
                  & refining.
                </p>

                <ul className="text-white list-disc pl-6">
                  <li className="font-normal xl:text-2xl 2xl:text-[29px]">
                    Drilling Fluids and Additives
                  </li>
                  <li className="font-normal xl:text-2xl 2xl:text-[29px]">
                    Specialty Chemicals
                  </li>
                  <li className="font-normal xl:text-2xl 2xl:text-[29px]">
                    Mud Chemicals
                  </li>
                  <li className="font-normal xl:text-2xl 2xl:text-[29px]">
                    Cementing Additives
                  </li>
                  <li className="font-normal xl:text-2xl 2xl:text-[29px]">
                    Production Chemicals
                  </li>
                  <li className="font-normal xl:text-2xl 2xl:text-[29px]">
                    Well Completion and Stimulation Chemicals
                  </li>
                  <li className="font-normal xl:text-2xl 2xl:text-[29px]">
                    Enhanced Oil Recovery (EOR) Chemicals
                  </li>
                  <li className="font-normal xl:text-2xl 2xl:text-[29px]">
                    Wellbore Cleaners
                  </li>
                  <li className="font-normal xl:text-2xl 2xl:text-[29px]">
                    Gas Treatment Chemicals
                  </li>
                  <li className="font-normal xl:text-2xl 2xl:text-[29px]">
                    Refinery Chemicals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <span className="absolute xl:top-full opacity-50 right-0 z-10">
        <Image src={"/about-us-bg3.png"} alt="Logo" width={352} height={587} />
      </span>
      <Footer />
    </>
  );
};

export default ProductAndServices;
