import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Bebas_Neue } from "@next/font/google";

const BebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${BebasNeue.variable} font-sans`}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
