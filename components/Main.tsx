import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-full h-screen text-center" id="home">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Vamos desenvolver algo juntos?
          </p>
          <h1 className="py-4 text-gray-700">
            Olá, me chamo <span className="text-[#5651e5]">João</span>
          </h1>
          <h1 className="py-2 text-gray-700">Sou Desenvolvedor de Software</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Com dedicação total ao desenvolvimento de softwares, desenvolvo
            projetos utilizando as tecnologias Java, Spring Boot, ReactJS e
            TypeScript.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://www.linkedin.com/in/joaopaulo-chaves/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://github.com/jpcchaves"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="mailto:jpcchaves@outlook.com"
            >
              <AiOutlineMail />
            </a>
            <a
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="#contact"
            >
              <BsFillPersonLinesFill />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
