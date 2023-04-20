import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="scroll-smooth touch-auto">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&family=Poppins:wght@400;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <title>Maurício Gedrat</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
