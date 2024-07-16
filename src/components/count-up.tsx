"use client";

import CountUp from "react-countup";

const CustomCountUp = ({ count }: { count: number }) => {
  return (
    <CountUp
      className="text-[40px] 2xl:text-[77px] 2xl:leading-[76px] font-extrabold"
      enableScrollSpy={true}
      end={count}
      duration={15}
      suffix="+"
    />
  );
};

export default CustomCountUp;
