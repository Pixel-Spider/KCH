"use client";

import useOnClickOutside from "@/hooks/onOutsideClick";
import { useRef, useState } from "react";

const ReadMoreBtn = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setActive(false));
  return (
    <div ref={ref} className="relative">
      <button
        data-aos-duration="1500"
        data-aos-delay="1300"
        data-aos="fade-up"
        style={{
          clipPath: "polygon(0 0, 95% 0, 100% 100%, 5% 100%)",
          background: "linear-gradient(90deg, #2E3190 0%, #045E9D 100%)",
        }}
        onClick={() => setActive(!active)}
        className="bg-primary butn butn__new px-16 py-3 leading-[20px] text-white font-semibold mt-5"
      >
        READ MORE
      </button>
      {active && (
        <div className="prose w-[600px] xl2:w-[700px] 2xl:w-[1100px] dark:prose-invert absolute top-16 left-10 z-10">
          <div
            style={{
              clipPath:
                "polygon(0 38%, 100% 100%, 100% 100%, 33% 100%, 0% 38%)",
              background: "#fff",
            }}
            className="w-20 h-10"
          />
          <div className="flex w-full">
            <div className="flex bg-white flex-col items-center px-10 gap-5 2xl:px-20 2xl:gap-20 md:flex-row  dark:bg-card rounded-lg shadow-md p-6 relative">
              <div className="flex-1 basis-1/2">
                <h2 className="text-2xl flex items-center font-semibold text-secondary">
                  <span className="w-2 h-2 inline-block bg-secondary rounded-full mr-2" />{" "}
                  <span>We Expand to IRAQ</span>
                </h2>
                <p className="text-muted-foreground mt-2 text-lg text-primary">
                  Kuwait Chemical House Company also established a branch in
                  Basra, Iraq to serve the chemical requirements of Oil Service
                  Companies located in Iraq.
                </p>
                <p className="text-muted-foreground mt-4 text-lg text-primary ">
                  Kuwait Chemical House Company played a tremendous role in the
                  supply of chemicals to the US Army during the early 2000s
                  period through Kellogg Brown & Root (KBR).
                </p>
              </div>
              <div className="flex basis-1/2 justify-center items-center mt-4 md:mt-0 md:ml-4">
                <img
                  aria-hidden="true"
                  alt="Iraq Registration Certificate"
                  src="/certificate.jpeg"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadMoreBtn;
