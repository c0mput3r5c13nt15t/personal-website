import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SimpleBar style={{ maxHeight: "100vh" }}>
      <Component {...pageProps} />
    </SimpleBar>
  );
}
