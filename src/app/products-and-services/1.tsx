const Project1 = () => {
  return (
    <div id="product-1" className="w-full">
      <div
        style={{
          backgroundImage: "url('/1.png')",
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
              OIL FIELD CHEMICALS
            </span>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="text-secondary xl:text-[26px] xl2:text-[29px] 2xl:text-[38px] font-extrabold"
            >
              Fueling the Future: Navigate Oil Fields with Our Advanced Chemical
              Solutions
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="text-white font-normal mt-3 mb-6 xl:text-2xl 2xl:text-[29px]"
            >
              Specialized chemicals for the oil and gas industry, covering
              drilling fluids, production chemicals, and cementing chemicals
              supporting various stages of oil & gas exploration, extraction &
              refining.
            </p>

            <ul className="text-white list-disc pl-6">
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Drilling Fluids and Additives
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="450"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Specialty Chemicals
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Mud Chemicals
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="550"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Cementing Additives
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Production Chemicals
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="650"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Well Completion and Stimulation Chemicals
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="700"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Enhanced Oil Recovery (EOR) Chemicals
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="750"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Wellbore Cleaners
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Gas Treatment Chemicals
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="850"
                className="font-normal xl:text-2xl 2xl:text-[29px]"
              >
                Refinery Chemicals
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;
