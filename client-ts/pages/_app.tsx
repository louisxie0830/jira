import type { AppProps } from "next/app";
import { NormalizeStyles } from "@/lib/component/NormalizeStyles";
import { BaseStyles } from "@/lib/component/BaseStyles";
import Head from "next/head";
import { Fragment } from "react";
import { Toast } from "@/lib/component/Toast";

const App = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
      />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8; X-Content-Type-Options=nosniff" />
      <meta httpEquiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="google" content="notranslate" />
      <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE" />
      <title>Jira</title>
    </Head>
    <NormalizeStyles />
    <BaseStyles/>
    <Toast />
    <Component {...pageProps} />
  </Fragment>
);

export default App;
