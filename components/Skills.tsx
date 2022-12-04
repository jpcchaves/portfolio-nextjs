import React from "react";
import SkillCard from "./SkillCard";

import { SkillsData } from "../data/skillsListData";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2" id="skills">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">Tecnologias que utilizo</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SkillsData &&
            SkillsData.map(({ id, name, path }) => (
              <SkillCard key={id} skill={name} path={path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
