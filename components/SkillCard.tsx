import Image, { StaticImageData } from "next/image";
import React from "react";

interface SkillCardProps {
  path: StaticImageData;
  skill: string;
}

const SkillCard = ({ path, skill }: SkillCardProps) => {
  console.log(path, skill);
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={path} alt="foto de uma skill" width="64" height="64" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3>{skill}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
