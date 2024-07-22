"use client";

import React from "react";
import Image from "next/image";
import "hero-slider/dist/index.css";
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";

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

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className={[
        "right-0 top-1/2 translate-y-[-50%] 2xl:w-[100px] 2xl:h-[100px] xl:w-[70px] xl:h-[70px]",
        "border absolute z-10 border-white rounded-full inline-flex items-center justify-center",
      ].join(" ")}
      onClick={() => onClick.current && onClick.current()}
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

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className={[
        "absolute left-[-10%] top-1/2 translate-y-[-50%] 2xl:w-[100px] 2xl:h-[100px] xl:w-[70px] xl:h-[70px] z-10",
        "border border-white rounded-full inline-flex items-center justify-center",
      ].join(" ")}
      style={{
        ...style,
        border: "1px solid white",
        background: "none",
        borderRadius: "50%",
        padding: 4,
      }}
      onClick={() => onClick.current && onClick.current()}
    >
      <Image src="/leftArrow.svg" alt="left right" width={50} height={50} />
    </button>
  );
}

export default function HeroSection({
  title = "",
  subTitle = "",
  headTitle = "",
  initialImage = 1,
}) {
  const nextSlideHandler = React.useRef<any>();
  const previousSlideHandler = React.useRef<any>();
  return (
    <div>
      <HeroSlider
        style={{
          backgroundColor: "#000",
        }}
        height={"90vh"}
        controller={{
          initialSlide: initialImage,
          slidingDuration: 1500,
          slidingDelay: 100,
          goToNextSlidePointer: nextSlideHandler,
          goToPreviousSlidePointer: previousSlideHandler,
        }}
        autoplay={{
          autoplayDuration: 5000,
        }}
        accessibility={{
          shouldDisplayButtons: false,
          orientation: "vertical",
        }}
      >
        <Overlay className="">
          <div className="pl-6.5 md:px-20 2xl:px-2xl-2  xl:pl-[150px] flex bg-[rgba(18,18,18,0.35)] flex-col justify-center 2xl:justify-end text-white absolute top-0 left-0 right-0 bottom-0">
            <div className="basis-[50%]" />
            <div className=" basis-[50%]">
              <div className="relative w-full ">
                <div className="xl:w-2/3 2xl:w-3/4">
                  {title && (
                    <p
                      data-aos-duration="1000"
                      data-aos="fade-up"
                      className="aos text-xs md:text-lg xl:text-xl 2xl:text-[30px] font-medium"
                    >
                      Kuwait Chemical House Company
                    </p>
                  )}
                  {headTitle && (
                    <h1
                      data-aos-duration="1000"
                      data-aos-delay="500"
                      data-aos="fade-up"
                      className="aos text-[48px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[115px] leading-tight	"
                    >
                      {headTitle}
                    </h1>
                  )}
                  {subTitle && (
                    <p
                      data-aos-duration="1000"
                      data-aos-delay="1000"
                      data-aos="fade-up"
                      className="text-lg aos  xl:text-3xl xl:mt-5 2xl:text-[48px] font-medium"
                    >
                      The Sky is Not the Limit…
                    </p>
                  )}
                </div>
                <PrevArrow onClick={previousSlideHandler} />
                <NextArrow onClick={nextSlideHandler} />
              </div>
            </div>
          </div>
        </Overlay>
        <Slide
          background={{
            backgroundImageSrc: "/hero-image-lg.jpg",
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "10000",
          }}
        />
        <Slide
          background={{
            backgroundImageSrc: "/profile_hero-bg1.jpg",
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "10000",
          }}
        />

        <Slide
          background={{
            backgroundImageSrc: "/hero-3.jpg",
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "10000",
          }}
        />

        <Slide
          background={{
            backgroundImageSrc: "/hero-bg-4.jpg",
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "10000",
          }}
        />
        <Slide
          background={{
            backgroundImageSrc: "/hero-bg-5.jpg",
            backgroundAnimation: "zoom",
            backgroundAnimationDuration: "10000",
          }}
        />
      </HeroSlider>
      {/* <PrevArrow />
      <NextArrow />
      <Swiper
        grabCursor={true}
        effect={"creative"}
        autoplay={true}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
        speed={2000}
      >
        {carouselImg.map((item) => {
          return (
            <SwiperSlide
              className="relative w-full h-[410px] lg:h-[845px]"
              key={item.id}
            >
              <picture>
                <source media="(max-width: 649px)" srcSet={item.img} />
                <source media="(min-width: 650px)" srcSet={item.imgLg} />
                <Image
                  src={item.img}
                  alt="hero image"
                  fill
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  quality={100}
                  sizes="100vw"
                  objectFit="cover"
                  objectPosition="bottom"
                  // srcset={`${item.img} 480w, ${item.imgLg} 768w`}
                />
              </picture>
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
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </div>
  );
}

// function NextArrow(props: CustomArrowProps) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={[className, "border border-white rounded-full"].join(" ")}
//       onClick={onClick}
//       style={{
//         ...style,
//         border: "1px solid white",
//         background: "none",
//         borderRadius: "50%",
//         padding: 4,
//       }}
//     >
//       <Image src="/rightArrow.svg" alt="arrow right" width={50} height={50} />
//     </button>
//   );
// }

// function PrevArrow(props: CustomArrowProps) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={[className, "border border-white rounded-full top-96"].join(
//         " "
//       )}
//       style={{
//         ...style,
//         border: "1px solid white",
//         background: "none",
//         borderRadius: "50%",
//         padding: 4,
//       }}
//       onClick={onClick}
//     >
//       <Image src="/leftArrow.svg" alt="left right" width={50} height={50} />
//     </button>
//   );
// }

// export default function HeroSection() {
//   const sliderRef = React.useRef<Slider>(null);
//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           dots: true,
//         },
//       },
//     ],
//   };
//   return (
//     <Slider {...settings}>
//       {carouselImg.map((item) => {
//         return (
//           <div className="relative w-full h-[410px] lg:h-[845px]" key={item.id}>
//             <picture>
//               <source media="(max-width: 649px)" srcSet={item.img} />
//               <source media="(min-width: 650px)" srcSet={item.imgLg} />
//               <Image
//                 src={item.img}
//                 alt="hero image"
//                 fill
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                 }}
//                 quality={100}
//                 sizes="100vw"
//                 objectFit="cover"
//                 objectPosition="bottom"
//                 // srcset={`${item.img} 480w, ${item.imgLg} 768w`}
//               />
//             </picture>
//             <div className="pl-6.5 md:px-20 2xl:px-2xl-2  xl:pl-[150px] flex bg-[rgba(18,18,18,0.35)] flex-col justify-center 2xl:justify-end text-white absolute top-0 left-0 right-0 bottom-0">
//               <div className="xl:w-2/3 2xl:w-3/4 2xl:mb-48">
//                 <p className="text-xs md:text-lg xl:text-xl 2xl:text-[30px] font-medium">
//                   Kuwait Chemical House Company
//                 </p>
//                 <h1 className="text-[48px] md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[115px] leading-tight	">
//                   Beyond Boundaries. Beyond Limits.
//                 </h1>
//                 <p className="text-lg xl:text-3xl xl:mt-5 2xl:text-[48px] font-medium">
//                   The Sky is Not the Limit…
//                 </p>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </Slider>
//   );
// }
