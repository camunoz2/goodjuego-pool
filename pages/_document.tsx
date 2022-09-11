import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es" className="bg-green-200">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/eff6ujs.css" />
      </Head>

      <body className="font-body">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
