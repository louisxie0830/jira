import type { AppProps } from "next/app";
// import '@/styles/globals.scss';
import { NormalizeStyles } from "@/lib/component/NormalizeStyles";
import { BaseStyles } from "@/lib/component/BaseStyles";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <NormalizeStyles />
    <BaseStyles/>
    <Component {...pageProps} />
  </>
);

export default App;
