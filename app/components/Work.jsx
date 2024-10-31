import React from "react";
import AccordionItem from "./parts/AccordionItem";
import { workExperienceData } from "../data/data";

const Work = () => {
  return (
    <section>
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Work Experience</h2>
        {workExperienceData.map(
          ({ company, image, position, duration, description }, index) => (
            <AccordionItem
              key={index}
              company={company}
              position={position}
              duration={duration}
              description={description}
              image={image}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Work;
