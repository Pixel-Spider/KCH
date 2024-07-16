const Project9 = () => {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: "url('/9.jpg')",
        }}
        className="xl:pl-[100px] bg-cover bg-no-repeat 2xl:pl-[140px]"
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
              ASPHALT CHEMICALS
            </h4>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="text-secondary xl:text-[26px] xl2:text-[29px] 2xl:text-[38px] font-extrabold"
            >
              Paving the Future: Explore Our Dynamic Range of Asphalt Chemicals
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="text-white font-normal mt-3 mb-6 xl:text-2xl 2xl:text-[29px]"
            >
              Asphalt chemicals play a crucial role in the construction and
              mainte- nance of roads, pavements, roofing, and various other
              applications where asphalt is used. These chemicals enhance the
              performance, durability, and functionality of asphalt materials.
            </p>

            <div className="flex gap-4">
              <ul className="text-white list-disc pl-6">
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="font-normal xl:text-2xl 2xl:text-[29px]"
                >
                  Asphalt Modifiers:
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="450"
                  className="font-normal xl:text-2xl 2xl:text-[29px]"
                >
                  Asphalt Emulsifiers
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                  className="font-normal xl:text-2xl 2xl:text-[29px]"
                >
                  Asphalt Additives:
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="550"
                  className="font-normal xl:text-2xl 2xl:text-[29px]"
                >
                  Asphalt Anti-Strip Agents
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                  className="font-normal xl:text-2xl 2xl:text-[29px]"
                >
                  Asphalt Fillers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project9;
