const Project4 = () => {
  return (
    <div id="product-4" className="w-full">
      <div
        style={{
          backgroundImage: "url('/4.png')",
        }}
        className="xl:pl-[100px] min-h-[770px] bg-cover bg-no-repeat 2xl:pl-[140px]"
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(46 49 144 / 70%) 0%, rgb(3 95 157 / 88%) 100%)",
          }}
          className="w-full xl:pl-[146px] 2xl:pl-[196px] min-h-[770px] pt-[76px] pb-[96px]"
        >
          <div className="relative 2xl:max-w-[801px] xl:max-w-[601px]">
            <span
              style={{
                transformOrigin: "0 0",
                transform: "rotate(270deg) translateX(-100%) translateY(-20%)",
                marginLeft: "auto",
                textAlign: "right",
                width: "500px",
                display: "block",
                top: 0,
              }}
              className="xl:text-[29px] xl2:text-[34px] 2xl:text-[41px] xl:left-[-80px] 2xl:left-[-120px] absolute text-white font-extrabold"
            >
              AVIATION CHEMICALS
            </span>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="text-secondary xl:text-[26px] xl2:text-[29px] 2xl:text-[38px] font-extrabold"
            >
              Elevate Safety and Performance with Our Premium Aviation
              Chemicals&quot;
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="text-white font-normal mt-3 mb-6 xl:text-2xl 2xl:text-[29px]"
            >
              Essential chemicals for the maintenance, safety, and operational
              efficiency of aircraft, contributing to the stringent standards
              and regulations that govern the aerospace industry.
            </p>

            <ul className="text-white list-disc pl-6">
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Deicing and Anti-Icing Fluids:
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="450"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Aviation Sealants and Adhesives
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Fuel System Icing Inhibitors (FSII):
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="550"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Aircraft Decontamination Chemicals:
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="550"
                className="font-normal xl:text-2xl list-none 2xl:text-[29px]"
              >
                - Lubricants:
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project4;
