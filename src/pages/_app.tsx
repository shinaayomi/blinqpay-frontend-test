import { store } from "@/app/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Airbnb</title>
          <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
