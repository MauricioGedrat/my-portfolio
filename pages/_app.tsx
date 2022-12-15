import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FormspreeProvider } from "@formspree/react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <FormspreeProvider>
      <div className="snap-y">
        <Component {...pageProps} />
      </div>
    </FormspreeProvider>
  );
}
