import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-screen text-center" id="home">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            {t("main.text-1")}
          </p>
          <h1 className="py-4 text-gray-700">
            {t("main.text-2")}
            <span className="text-[#5651e5]"> João</span>
          </h1>
          <h1 className="py-2 text-gray-700">{t("main.text-3")}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {t("main.briefing")}
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
