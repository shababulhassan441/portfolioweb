import React from "react";

const HeadingLabel = ({ label, heading, para }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <div className="inline-block rounded-lg dark:bg-white dark:text-black bg-black text-white capitalize px-3 py-1 text-sm">
          {label}
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl ">
          {heading}
        </h2>
        <p className="text-[#737373] dark:text-white/70 md:text-xl lg:text-base xl:text-xl">
          {para}
        </p>
      </div>
    </div>
  );
};

export default HeadingLabel;
