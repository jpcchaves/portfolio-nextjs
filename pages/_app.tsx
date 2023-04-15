import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
