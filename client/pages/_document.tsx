import NextDocument, { Html, Head, Main, NextScript } from "next/document";


export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className="notranslate" translate="no" prefix="og: https://ogp.me/ns#">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
