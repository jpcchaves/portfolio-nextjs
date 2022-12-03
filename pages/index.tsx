import Head from "next/head";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>João Paulo | Web Developer</title>
        <meta name="description" content="Criado utilizando NextJS" />
        <link rel="icon" href="/favicon.io" />
      </Head>
      <Navbar />
      <Main />
    </div>
  );
}
