import React from "react";
import HeadingLabel from "../components/parts/HeadingLabel";
import { notesHead } from "../data/data";
import CoursesWrapper from "../components/parts/CoursesWrapper";

const Notes = () => {
  return (
    <section className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 pb-24">
      <div className="space-y-12 w-full">
        {notesHead.map(({ label, heading, para }, index) => (
          <HeadingLabel
            key={index}
            label={label}
            heading={heading}
            para={para}
          />
        ))}
        <CoursesWrapper />
      </div>
    </section>
  );
};

export default Notes;
