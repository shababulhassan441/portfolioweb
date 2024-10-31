import React from "react";
import HeadingLabel from "./parts/HeadingLabel";
import { contactData } from "../data/data";

const GetInTouch = () => {
  return (
    <section>
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        {contactData.map(({ label, heading, para },index) => (
          <HeadingLabel key={index} label={label} heading={heading} para={para} />
        ))}
      </div>
    </section>
  );
};

export default GetInTouch;
