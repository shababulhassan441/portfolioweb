import React from "react";
import { aboutData } from "../data/data";
const About = () => {
  return aboutData.map(({ heading, para },index) => (
    <section key={index} className="">
      <h2 className="text-[20px] font-bold">{heading}</h2>
      {para}
    </section>
  ));
};

export default About;
