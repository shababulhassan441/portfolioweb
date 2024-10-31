import React from "react";
import { hackathonsHead } from "../data/data";
import HeadingLabel from "../components/parts/HeadingLabel";
import HackathonsCard from "../components/parts/HackathonsCard";

const page = () => {
  return (
    <section className="min-h-screen font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 pb-24 ">
        <div className="space-y-12 w-full">
        {hackathonsHead.map(({ label, heading, para }, index) => (
          <HeadingLabel
            key={index}
            label={label}
            heading={heading}
            para={para}
          />
        ))}
        <HackathonsCard />
      </div>
    </section>
  );
};

export default page;
