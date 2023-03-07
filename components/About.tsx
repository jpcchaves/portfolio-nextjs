/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="puppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Quem sou eu?</h2>
          <p className="py-2 text-gray-600">
            Com 1 ano de experiência no desenvolvimento web, tenho dedicado meu
            tempo e esforços para me tornar um Desenvolvedor Front-End. Em 2021,
            iniciei meus estudos focando nas tecnologias HTML e CSS para ter o
            primeiro contato com o desenvolvimento de websites e, a partir daí,
            me apaixonei por programação e busquei cada vez mais melhorar minhas
            skills e aprender novas tecnologias.
          </p>
          <p className="py-2 text-gray-600">
            Após meu primeiro contato com o desenvolvimento Front-End em 2021,
            iniciei meus estudos em JavaScript para adicionar dinâmica e
            interações com o usuário aos sites que eu desenvolvia enquanto
            estudava. Aliado a isso, aprendi também frameworks e bibliotecas
            (TypeScript, ReactJS, NextJS, TailwindCSS, NodeJS, Express) que
            ajudam no processo desenvolvimento, otimizando o tempo e construindo
            aplicações web mais otimizadas e performáticas.
          </p>
          <a
            href="#projects"
            className="py-2 text-gray-600 underline cursor-pointer"
          >
            Veja alguns dos meus projetos mais recentes.
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
            alt="foto de um notebook"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
