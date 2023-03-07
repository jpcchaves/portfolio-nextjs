/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import { contactValidation } from "../validations/contactValidation";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FieldValues } from "react-hook-form";

import { sendContactForm } from "../lib/api";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formOptions = { resolver: yupResolver(contactValidation) };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = async (data: FieldValues) => {
    try {
      setIsLoading(true);

      await sendContactForm(data);

      reset();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full lg:h-screen" id="contact">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Entre em contato</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  alt="notebook image"
                />
              </div>
              <div>
                <h2 className="py-2">João Paulo</h2>
                <p>Desenvolvedor Front-End</p>
                <p className="py-4">
                  Estou disponível para trabalhos voltados ao Front-End. Entre
                  em contato!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Conecte-se comigo</p>

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
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nome</label>
                    {errors.name ? (
                      <input
                        className="border-2 rounded-lg p-3 flex border-red-500 focus:outline-[#5651e5]"
                        type="text"
                        {...register("name")}
                      />
                    ) : (
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-[#5651e5]"
                        type="text"
                        {...register("name")}
                      />
                    )}
                    {errors.name && (
                      <p className="text-red-500 ml-1">
                        <>{errors.name?.message}</>
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Telefone</label>
                    {errors.phone ? (
                      <input
                        className="border-2 rounded-lg p-3 flex border-red-500 focus:outline-[#5651e5]"
                        type="number"
                        {...register("phone")}
                      />
                    ) : (
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-[#5651e5]"
                        type="number"
                        {...register("phone")}
                      />
                    )}
                    {errors.phone && (
                      <p className="text-red-500 ml-1">
                        <>{errors.phone?.message}</>
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  {errors.email ? (
                    <input
                      className="border-2 rounded-lg p-3 flex border-red-500 focus:outline-[#5651e5]"
                      type="email"
                      {...register("email")}
                    />
                  ) : (
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-[#5651e5]"
                      type="email"
                      {...register("email")}
                    />
                  )}
                  {errors.email && (
                    <p className="text-red-500 ml-1">
                      <>{errors.email?.message}</>
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Assunto</label>
                  {errors.subject ? (
                    <input
                      className="border-2 rounded-lg p-3 flex border-red-500 focus:outline-[#5651e5]"
                      type="text"
                      {...register("subject")}
                    />
                  ) : (
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 focus:outline-[#5651e5]"
                      type="text"
                      {...register("subject")}
                    />
                  )}
                  {errors.subject && (
                    <p className="text-red-500 ml-1">
                      <>{errors.subject?.message}</>
                    </p>
                  )}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Mensagem</label>
                  {errors.message ? (
                    <textarea
                      className="border-2 rounded-lg p-3 border-red-500 focus:outline-[#5651e5]"
                      rows={10}
                      {...register("message")}
                    />
                  ) : (
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300 focus:outline-[#5651e5]"
                      rows={10}
                      {...register("message")}
                    />
                  )}
                  {errors.message && (
                    <p className="text-red-500 ml-1">
                      <>{errors.message?.message}</>
                    </p>
                  )}
                </div>
                {isLoading && (
                  <input
                    type="submit"
                    value="Enviando..."
                    disabled
                    className="w-full p-4 text-gray-100 mt-4 hover:cursor-pointer hover:opacity-80 ease-in duration-200"
                  />
                )}
                {!isLoading && (
                  <input
                    type="submit"
                    value="Enviar Mensagem"
                    className="w-full p-4 text-gray-100 mt-4 hover:cursor-pointer hover:opacity-80 ease-in duration-200"
                  />
                )}
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                size={30}
                className="m-auto text-[#5651e5]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
