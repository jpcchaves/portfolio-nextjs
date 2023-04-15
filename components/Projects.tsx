import React from "react";

import ProjectItem from "./ProjectItem";
import { projectsDataList } from "../data/projectsDataList";

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Projetos que desenvolvi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {(projectsDataList || []).map(
            ({ projectUrl, projectStack, id, title, backgroundImg }) => (
              <ProjectItem
                key={id}
                title={title}
                backgroundImg={backgroundImg}
                projectUrl={projectUrl}
                projectStack={projectStack}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
