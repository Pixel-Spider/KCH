const Project11 = () => {
  return (
    <div id="product-11" className="w-full">
      <div
        style={{
          backgroundImage: "url('/11.jpg')",
        }}
        className="xl:pl-[100px] min-h-[770px] bg-cover bg-no-repeat 2xl:pl-[140px]"
      >
        <div
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgb(46 49 144 / 70%) 0%, rgb(3 95 157 / 88%) 100%)",
          }}
          className="w-full xl:pl-[146px] min-h-[770px] 2xl:pl-[196px] pt-[76px] pb-[96px]"
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
              LABORATORY CHEMICALS
            </span>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="text-secondary xl:text-[26px] xl2:text-[29px] 2xl:text-[38px] font-extrabold"
            >
              Precision in Every Element: Explore Our Laboratory Chemicals
              Collection
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="text-white font-normal mt-3 mb-6 xl:text-2xl 2xl:text-[29px]"
            >
              A diverse group of chemicals used in scientific research,
              experimentation, and analysis.
            </p>

            <ul className="text-white list-disc pl-6">
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Solvents & Acids and Bases
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="450"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Inorganic Salts
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Buffers
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="550"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Indicators
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Organic Chemicals
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="650"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Specialty Reagents
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project11;
