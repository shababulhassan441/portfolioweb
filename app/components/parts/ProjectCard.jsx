import React from "react";
import { projectCardData } from "@/app/data/data";
const ProjectCard = () => {
  return projectCardData.map(
    ({ video, link, title, time, para, technology, source },index) => (
      <div key={index} className="rounded-lg bg-card text-card-foreground flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
        <a className="block cursor-pointer" href={link}>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline=""
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        </a>
        <div className="flex flex-col px-2">
          <div className="space-y-1">
            <h3 className="font-semibold capitalize tracking-tight mt-1 text-base">
              {title}
            </h3>
            <time className="font-sans text-xs">{time}</time>
            <div className="hidden font-sans text-xs underline print:visible" />
            <div className="prose max-w-full text-pretty dark:text-white/70 font-sans text-xs text-[#737373] dark:prose-invert">
              {para}
            </div>
          </div>
        </div>
        <div className="text-pretty font-sans text-sm text-muted-foreground mt-auto flex flex-col px-2">
          <div className="mt-2 flex flex-wrap gap-1">
            {technology.map((type, index) => (
              <div
                key={index}
                className="inline-flex items-center capitalize rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-[#f7f7f7] dark:bg-[#202020] text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[11px]"
              >
                {type}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-1 px-2 flex-wrap">
          {source.map((item,index) => (
            <div key={index} className="flex items-center pt-2 pb-2">
              <div className="flex gap-1">
                <a target="_blank" href="https://chatcollect.com">
                  <div className="items-center rounded-md border font-semibold  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-black text-white shadow hover:bg-black/80 dark:bg-white dark:text-black flex gap-2 px-2 py-1 text-[12px]">
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
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default ProjectCard;
