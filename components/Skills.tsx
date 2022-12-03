import React from "react";
import SkillCard from "./SkillCard";
import { skillsList } from "../utils/skillsList";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">Tecnologias que utilizo</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsList &&
            skillsList.map(({ id, path, name }) => (
              <SkillCard key={id} path={path} skill={name} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
