import React from "react";
import HeadingLabel from "./parts/HeadingLabel";
import { projectData } from "../data/data";
import ProjectCard from "./parts/ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className="space-y-12 w-full py-12">
        {projectData.map(({ label, heading, para }, index) => (
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
