import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { ready } = useTranslation();

  return (
    <>
      {ready ? (
        <div>
          <Main />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      ) : (
        <>Loading...</>
      )}
    </>
  );
}
