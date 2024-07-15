"use client";
import "hero-slider/dist/index.css";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
const Test = () => {
  return (
    <>
      <HeroSlider
        orientation="horizontal"
        initialSlide={1}
        style={{
          backgroundColor: "#000",
        }}
        settings={{
          slidingDuration: 500,
          slidingDelay: 100,
          shouldAutoplay: true,
          shouldDisplayButtons: true,
          autoplayDuration: 5000,
          height: "100vh",
        }}
      >
        <Overlay>
          <div className="pl-6.5 md:px-20 2xl:px-2xl-2  xl:pl-[150px] flex bg-[rgba(18,18,18,0.35)] flex-col justify-center 2xl:justify-end text-white absolute top-0 left-0 right-0 bottom-0">
            <div className="xl:w-2/3 2xl:w-3/4 2xl:mb-48">
              <p className="text-xs md:text-lg xl:text-xl 2xl:text-[30px] font-medium">
                Kuwait Chemical House Company
              </p>
              <h1 className="text-[48px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[115px] leading-tight	">
                Beyond Boundaries. Beyond Limits.
              </h1>
              <p className="text-lg xl:text-3xl xl:mt-5 2xl:text-[48px] font-medium">
                The Sky is Not the Limit…
              </p>
            </div>
          </div>
        </Overlay>
        <Slide
          label="Giau Pass - Italy"
          background={{
            backgroundImageSrc: "/profile_hero-bg1.jpg",
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "10000",
          }}
        />

        <Slide
          label="Bogliasco - Italy"
          background={{
            backgroundImageSrc: "/hero-image-lg.jpg",
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "10000",
          }}
        />

        <Slide
          label="County Clare - Ireland"
          background={{
            backgroundImageSrc: "/hero-image-lg.jpg",
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "10000",
          }}
        />

        <Slide
          label="Crater Rock, OR - United States"
          background={{
            backgroundImageSrc: "/hero-image-lg.jpg",
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "10000",
          }}
        />
      </HeroSlider>
    </>
  );
};

export default Test;
