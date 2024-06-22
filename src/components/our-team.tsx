const OurTeam = () => {
  return (
    <div className="block my-7  md:flex md:h-[206px] lg:h-[246px] xl:h-[286px]  xl2:h-[366px] 2xl:h-[396px] text-white gap-[1px] md:gap-2 2xl:gap-[9px] w-full">
      <div className="w-full block  sm:flex gap-[1px] md:gap-2 2xl:gap-[9px]">
        <div className="bg-[#808794] pr-5 w-full text-[32px] md:w-1/2  rounded-tl-[32px] md:rounded-tl-[50px] pt-6.5 pb-6.5 pl-6.6 2xl:rounded-tl-[70px] pl-[30px] lg:pl-[32px] lg:pt-[28px] xl:pl-[35px] xl:pt-[31px] 2xl:pl-[53px] 2xl:pt-[44px] font-normal md:text-[32px] lg:text-[36px] xl:text-[44px] xl2:text-[48px] md:leading-[32px] lg:leading-[36px] xl:leading-[44px] 2xl:leading-[54px] 2xl:text-[57px]">
          <div>
            <div>OUR TEAM</div> <div className="font-extrabold">IN ACTION</div>
          </div>
        </div>
        <div className="w-full md:w-1/2  flex md:flex-col gap-[1px] mt-[1px] md:mt-0 md:gap-2 2xl:gap-[9px] md:h-full">
          <div className="bg-[#D60080] w-full h-[104px] md:h-1/2">P1</div>
          <div className="bg-[#D60080] w-full h-[104px]  md:h-1/2">P2</div>
        </div>
      </div>
      <div className="bg-[#D60080] w-full h-[104px] md:h-full mt-[1px] md:mt-0">
        P3
      </div>
    </div>
  );
};

export default OurTeam;
