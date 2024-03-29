import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { useRouter } from "next/router";

import navLogo from "../public/assets/navLogo.png";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslation } from "react-i18next";
import { navbarLinks } from "../data/navLinks";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/softreaming" ||
      router.asPath === "/searchhub" ||
      router.asPath === "/taskmanager" ||
      router.asPath === "/miniblog"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav((prev) => !prev);
  };

  const hideNav = () => {
    setNav(false);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 xl:px-16">
        <Link href="/">
          <Image src={navLogo} alt="/" width="70" height="50" />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            {MakeNavLinks({
              handleClick: null!,
              classes: "ml-10 text-sm uppercase hover:border-b",
            })}
            <Link href={"#"}>
              <li className="ml-10 text-sm uppercase hover:border-b ">
                <LocaleSwitcher />
              </li>
            </Link>
          </ul>
          <div className="md:hidden" onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[65] md:w-[45%] h-screen bg-[#ecf0f3] p-10 xxs:p-5 ease-in duration-500"
              : "fixed left-[-100%] p-10 xxs:p-5 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={navLogo} alt="logotipo" width="70" height="35" />
              </Link>
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Vamos desenvolver algo juntos?
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col sm:py-2">
            <ul className="uppercase">
              {MakeNavLinks({ handleClick: hideNav, classes: "py-4 text-sm" })}
            </ul>
            <div className="pt-20 xs:pt-10 xxs:pt-5">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Vamos nos conectar!
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
                  href="https://www.linkedin.com/in/joaopaulo-chaves/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
                  href="https://github.com/jpcchaves"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
                  href="mailto:jpcchaves@outlook.com"
                >
                  <AiOutlineMail />
                </a>
                <a
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
                  href="#contact"
                >
                  <BsFillPersonLinesFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const MakeNavLinks = ({
  handleClick,
  classes,
}: {
  handleClick?: () => void;
  classes: string;
}) => {
  const { t } = useTranslation();

  return (navbarLinks || []).map(({ translateKey, path }, idx) => (
    <Link key={idx} href={path}>
      <li
        className={classes}
        onClick={handleClick ? () => handleClick() : null!}
      >
        {t(translateKey)}
      </li>
    </Link>
  ));
};
