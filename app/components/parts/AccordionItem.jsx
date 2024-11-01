"use client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

const AccordionItem = ({ company, position, duration, description, image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-start mb-1 rounded-lg">
      <div className="w-[150px] flex-[1]">
        <Image placeholder="blur" className=" w-full rounded-full" alt="profile" src={image} />
      </div>
      <div className="group flex-[9]">
        <div
          className="flex justify-between items-center p-4 py-2 cursor-pointer rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <h2 className="text-[15px] dark:text-white font-semibold text-black">
                {company}
              </h2>
              <IoIosArrowForward
                className={`opacity-0 group-hover:opacity-100 text-sm text-accent transition-transform ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </div>
            <p className=" dark:text-white/70  text-[12px] text-gray-600">{position}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">{duration}</span>
          </div>
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          {description && (
            <div className="p-4 pt-0 text-[14px] dark:text-white text-gray-700">
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
