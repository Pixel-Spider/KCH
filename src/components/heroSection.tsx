"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import Image from "next/image";

const carouselImg = [
  {
    id: 1,
    img: "/hero-image-m-1.jpg",
    imgLg: "/hero-image-lg.jpg",
  },
  {
    id: 2,
    img: "/hero-image-m-1.jpg",
    imgLg: "/hero-image-lg.jpg",
  },
];

function NextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <button
      className={[className, "border border-white rounded-full"].join(" ")}
      onClick={onClick}
      style={{
        ...style,
        border: "1px solid white",
        background: "none",
        borderRadius: "50%",
        padding: 4,
      }}
    >
      <Image src="/rightArrow.svg" alt="arrow right" width={50} height={50} />
    </button>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  return (
    <button
      className={[className, "border border-white rounded-full top-96"].join(
        " "
      )}
      style={{
        ...style,
        border: "1px solid white",
        background: "none",
        borderRadius: "50%",
        padding: 4,
      }}
      onClick={onClick}
    >
      <Image src="/leftArrow.svg" alt="left right" width={50} height={50} />
    </button>
  );
}

export default function HeroSection() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <Slider {...settings}>
      {carouselImg.map((item) => {
        return (
          <div className="relative w-full h-[410px] lg:h-dvh" key={item.id}>
            <Image
              src={item.img}
              alt="hero image"
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              srcset={`${item.img} 480w, ${item.imgLg} 768w`}
            />
            <div className="pl-6.5 xl:pl-[150px] flex bg-[rgba(18,18,18,0.35)] flex-col justify-center text-white absolute top-0 left-0 right-0 bottom-0">
              <div className="xl:w-2/3">
                <p className="text-xs md:text-lg xl:text-xl 2xl:text-2xl">
                  Kuwait Chemical House Company
                </p>
                <h1 className="text-[48px] md:text-[60px] lg:text-[70px] xl:text-[90px] 2xl:text-[119px]  leading-tight	">
                  Beyond Boundaries. Beyond Limits.
                </h1>
                <p className="text-lg xl:text-3xl xl:mt-5 2xl:text-4xl">
                  The Sky is Not the Limit…
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
