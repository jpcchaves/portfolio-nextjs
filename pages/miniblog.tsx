import Image from "next/image";
import React from "react";

import MiniblogImg from "../public/assets/projects/miniblog.png";

import { RiRadioButtonFill } from "react-icons/ri";

import Link from "next/link";
import { miniBlogTechList } from "../data/miniBlogTechList";

const miniblog = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          alt="/"
          src={MiniblogImg}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">MiniBLOG</h2>
          <h3>ReactJS / Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>MiniBLOG</p>
          <h2 className="py-2">Overview</h2>
          <p>
            Esse é um Mini Blog criado com a tecnologia ReactJS. O intuito do
            projeto foi integrar o FrontEnd (criado em ReactJS) com o Backend
            (Firebase). Realizando a comunicação com o servidor (firebase) para
            armazenar os cadastros dos usuários e os posts do blog.
          </p>
          <a
            href="https://miniblog-reactjs.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/jpcchaves/miniBlogProject"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Tecnologias</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {(miniBlogTechList || []).map(({ id, name }) => (
                <p key={id} className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" />
                  {name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Voltar</p>
        </Link>
      </div>
    </div>
  );
};

export default miniblog;
