import React from "react";
import { educationData } from "../data/data";
import AccordionItem from "./parts/AccordionItem";

const Education = () => {
  return (
    <section>
      <div className="flex min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-bold">Education</h2>
        {educationData?.map(
          ({ institution, image, degree, years }, index) => (
            <AccordionItem
              key={index}
              company={institution}
              position={degree}
              duration={years}
              description={null}
              image={image}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Education;
