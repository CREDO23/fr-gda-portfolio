import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@material-tailwind/react";
import { ConfigProvider } from "antd";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const JsxComponent = Component as any;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ff5722",
          colorError: "#FE4D4F",
        },
      }}
    >
      <ThemeProvider>
        <main className={poppins.className}>
          <JsxComponent {...pageProps} />
        </main>
      </ThemeProvider>
    </ConfigProvider>
  );
}
