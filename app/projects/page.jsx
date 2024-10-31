import React from "react";
import HeadingLabel from "../components/parts/HeadingLabel";
import { projectData2 } from "../data/data";
import ProjectCard from "../components/parts/ProjectCard";

const Projects = () => {
  return (
    <section className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 pb-24">
      <div className="space-y-12 w-full">
        {projectData2.map(({ label, heading, para }, index) => (
          <HeadingLabel
            key={index}
            label={label}
            heading={heading}
            para={para}
          />
        ))}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
