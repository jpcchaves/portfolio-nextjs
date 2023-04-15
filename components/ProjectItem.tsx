import Image, { StaticImageData } from "next/image";

import Link from "next/link";

interface Project {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  projectStack: string;
}

const ProjectItem = ({
  title,
  backgroundImg,
  projectUrl,
  projectStack,
}: Project) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-[#5651e5] transition duration-300">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="imagem de fundo"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{projectStack}</p>
        <Link href={projectUrl}>
          <p className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer">
            Mais Informações
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
