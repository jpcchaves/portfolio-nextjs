/* eslint-disable @next/next/no-img-element */
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
            Olá! Sou João Paulo, desenvolvedor de software apaixonado por
            transformar ideias em realidade. Com uma sólida experiência no
            desenvolvimento de aplicações, concentro meus esforços em aprimorar
            a experiência do usuário por meio da combinação das tecnologias
            ReactJS e TypeScript no Front-end e Java e Spring Boot no Back-end.
          </p>
          <p className="py-2 text-gray-600">
            No Back-end, minha expertise se concentra no ecossistema Java e
            Spring Boot. Trabalho com essas tecnologias para desenvolver
            soluções eficientes e escaláveis que suportem as demandas dos
            projetos. Através da aplicação de boas práticas de programação,
            construo APIs seguras e eficientes, garantindo a integridade e
            confiabilidade dos sistemas.
          </p>
          <p className="py-2 text-gray-600">
            Como desenvolvedor Front-end, minha missão é criar interfaces
            intuitivas e responsivas que proporcionem aos usuários uma
            experiência agradável e envolvente. Através do ReactJS, aproveito a
            modularidade e a reutilização de componentes para criar aplicações
            dinâmicas e escaláveis. Além disso, minha experiência com TypeScript
            permite um desenvolvimento mais robusto, garantindo a detecção de
            erros durante a fase de compilação e a melhoria da manutenibilidade
            do código.
          </p>
          <a
            href="#projects"
            className="py-2 text-gray-600 underline cursor-pointer"
          >
            Veja alguns dos meus projetos mais recentes
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
