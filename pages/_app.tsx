import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "node_modules/flag-icons/css/flag-icons.min.css";

import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "../ni18n.config";
import Head from "next/head";
import { useTranslation } from "react-i18next";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { t, ready } = useTranslation();
  return (
    <>
      <Head>
        {ready ? (
          <title>João Paulo | {t("job_role")}</title>
        ) : (
          <title>João Paulo | Software Engineer</title>
        )}
        <meta name="description" content="NextJS APP" />
        <link rel="icon" href="/favicon.io" />
      </Head>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}

export default appWithI18Next(MyApp, ni18nConfig);
