import React from "react";
import { hackathonsCardData } from "@/app/data/data";
import Image from "next/image";

const HackathonsCard = () => {
  return (
    <div>
      <div>
        <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
          {hackathonsCardData.map(
            ({ event, date, location, project, image, source }, index) => (
              <div key={index}>
                <li className="relative ml-10 py-4">
                  <div className="absolute -left-16 top-2 flex items-center justify-center bg-white rounded-full">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full border size-12 m-auto">
                      <span className="flex h-full w-full items-center justify-center rounded-full ">
                        <Image
                          alt="profile"
                          src={image}
                          placeholder="blur"
                        />
                      </span>
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-start gap-1">
                    <p className=" text-[12px] font-normal dark:text-white/70 text-[#6e6e6e]">
                      {date}
                    </p>
                    <h2 className="font-semibold leading-none">{event}</h2>
                    <p>{location}</p>
                    <span className="text-sm dark:text-white/70 font-normal text-[#6e6e6e]">
                      {project}
                    </span>
                  </div>
                  {source && (
                    <div className="flex gap-3 flex-wrap items-center pt-2 px-2 pb-2">
                      {source.map((item, index) => (
                        <div key={index} className="flex flex-wrap gap-1">
                          <a target="_blank" href="https://chatcollect.com">
                            <div className="items-center rounded-md border font-semibold  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 dark:bg-[#181818] border-transparent bg-black text-white shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[12px]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-globe size-3"
                              >
                                <circle cx={12} cy={12} r={10} />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                              </svg>
                              {item}
                            </div>
                          </a>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              </div>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default HackathonsCard;
