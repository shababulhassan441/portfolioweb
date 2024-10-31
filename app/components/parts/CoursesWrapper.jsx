import React from "react";
import { courses } from "@/app/data/data";
const CoursesWrapper = () => {
  return courses.map((course, index) => (
    <div
      key={index}
      className="max-w-full text-pretty font-sans text-sm scroll-mb-16"
    >
      <h3 className="text-[18px] text-black/80 capitalize font-bold leading-7">
        {course.university}
      </h3>
      {course.courses.map(({ code, title, link }, index) => (
        <a key={index} href={link}>
          <p className="mt-[10px] underline leading-5 capitalize dark:text-white/90 font-semibold text-[#232c41]">
            {code} - {title}
          </p>
        </a>
      ))}
    </div>
  ));
};

export default CoursesWrapper;
