import { Html, Head, Main, NextScript } from "next/document";
import { Meta } from "@/components/Meta/Meta";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Meta />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
