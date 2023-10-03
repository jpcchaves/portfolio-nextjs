import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "node_modules/flag-icons/css/flag-icons.min.css";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "../ni18n.config";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);
