/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import { contactValidation } from "../validations/contactValidation";
import React, { FormEvent, useState } from "react";
import { useFormik } from "formik";
import { sendContactForm } from "../lib/api";
import { ToastContainer } from "react-toastify";
import { notifyError, notifySuccess } from "../hooks/notify";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => setIsLoading((prevState) => !prevState);

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactValidation,
    onSubmit: async (values) => {
      try {
        toggleLoading();
        const res = await sendContactForm(values);

        if (res.ok) {
          validation.resetForm();
          notifySuccess("Email enviado com sucesso!");
        } else {
          notifyError("Ocorreu um erro ao enviar o email!");
        }
        toggleLoading();
      } catch (e) {
        // console.log(e)
        toggleLoading();
      }
    },
  });

  return (
    <div className="w-full lg:h-screen" id="contact">
      <ToastContainer />
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
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Nome</label>
                    <input
                      name="name"
                      onChange={validation.handleChange}
                      value={validation.values.name}
                      className={`border-2 rounded-lg p-3 flex ${
                        validation.errors.name && validation.touched.name
                          ? `border-red-500`
                          : `border-gray-300`
                      }  focus:outline-[#5651e5]`}
                      type="text"
                    />
                    {validation.touched.name && validation.errors.name ? (
                      <p className="text-red-500 ml-1">
                        <>{validation.errors.name}</>
                      </p>
                    ) : null}
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Telefone</label>
                    <input
                      name="phone"
                      onChange={validation.handleChange}
                      value={validation.values.phone}
                      className={`border-2 rounded-lg p-3 flex ${
                        validation.errors.phone && validation.touched.phone
                          ? `border-red-500`
                          : `border-gray-300`
                      }  focus:outline-[#5651e5]`}
                      type="text"
                    />
                    {validation.touched.phone && validation.errors.phone ? (
                      <p className="text-red-500 ml-1">
                        <>{validation.errors.phone}</>
                      </p>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>

                  <input
                    className={`border-2 rounded-lg p-3 flex ${
                      validation.errors.email && validation.touched.email
                        ? `border-red-500`
                        : `border-gray-300`
                    }  focus:outline-[#5651e5]`}
                    type="text"
                    name="email"
                    onChange={validation.handleChange}
                    value={validation.values.email}
                  />

                  {validation.touched.email && validation.errors.email ? (
                    <p className="text-red-500 ml-1">
                      <>{validation.errors.email}</>
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Assunto</label>
                  <input
                    className={`border-2 rounded-lg p-3 flex ${
                      validation.errors.subject && validation.touched.subject
                        ? `border-red-500`
                        : `border-gray-300`
                    }  focus:outline-[#5651e5]`}
                    type="text"
                    name="subject"
                    onChange={validation.handleChange}
                    value={validation.values.subject}
                  />

                  {validation.touched.subject && validation.errors.subject ? (
                    <p className="text-red-500 ml-1">
                      <>{validation.errors.subject}</>
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Mensagem</label>
                  <textarea
                    className={`border-2 rounded-lg p-3 flex ${
                      validation.errors.message && validation.touched.message
                        ? `border-red-500`
                        : `border-gray-300`
                    }  focus:outline-[#5651e5]`}
                    rows={10}
                    name="message"
                    onChange={validation.handleChange}
                    value={validation.values.message}
                  />

                  {validation.touched.message && validation.errors.message ? (
                    <p className="text-red-500 ml-1">
                      <>{validation.errors.message}</>
                    </p>
                  ) : null}
                </div>
                <input
                  type="submit"
                  value={isLoading ? "Enviando..." : "Enviar Mensagem"}
                  className="w-full p-4 text-gray-100 mt-4 hover:cursor-pointer hover:opacity-80 ease-in duration-200"
                />
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
