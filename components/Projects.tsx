import React from "react";

import ProjectItem from "./ProjectItem";

import SoftreamingImg from "../public/assets/projects/softreaming.png";
import SoftpetsImg from "../public/assets/projects/softpets.png";
import MovieslibImg from "../public/assets/projects/movieslib.png";
import MiniblogImg from "../public/assets/projects/miniblog.png";

const Projects = () => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">Projetos que desenvolvi</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Softreaming"
            backgroundImg={SoftreamingImg}
            projectUrl="/softreaming"
            projectStack="ReactJS"
          />
          <ProjectItem
            title="Softpets"
            backgroundImg={SoftpetsImg}
            projectUrl="/softpets"
            projectStack="ReactJS"
          />
          <ProjectItem
            title="MoviesLib"
            backgroundImg={MovieslibImg}
            projectUrl="/movieslib"
            projectStack="ReactJS"
          />
          <ProjectItem
            title="MiniBLOG"
            backgroundImg={MiniblogImg}
            projectUrl="/miniblog"
            projectStack="ReactJS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
