import React from "react";
import { heroData } from "../data/data";
const Hero = () => {
  return heroData.map(({ heading, para, image },index) => (
    <section key={index} className="flex justify-between items-start gap-[6px] ">
      <div className=" text-3xl sm:text-5xl xl:text-6xl max-w-[504px] ">
        <h2 className=" dark:text-white font-bold tracking-tighter leading-11 ">{heading} </h2>
        <p className="mt-[6px] text-[16px] leading-6 md:text-[20px] md:leading-7 max-w-[477px]">
          {para}
        </p>
      </div>
      <div className="w-[120px]">
        <span className="relative flex shrink-0 overflow-hidden rounded-full size-28 border">
          <img className=" aspect-square h-full w-[100%]" src={image} alt="" />
        </span>
      </div>
    </section>
  ));
};

export default Hero;
