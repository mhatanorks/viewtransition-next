import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from "next/font/google";
import Layout from "./components/layout/Layout";
import { useRouter } from "next/router";
import { useEffect } from "react";

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // ブラウザバック対応
  useEffect(() => {
    router.beforePopState(({ as }) => {
      if (!(document as any).startViewTransition) {
        return true;
      }

      (document as any).startViewTransition(async () => {
        await router.push(as);
      });
      return false;
    });
  }, [router]);

  return (
    <main className={noto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
