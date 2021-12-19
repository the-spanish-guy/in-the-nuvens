import { ColorModeScript } from '@chakra-ui/react'
import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import customtheme from 'styles/theme'

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <link rel="shortcut icon" href="/assets/favicon.png" />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={customtheme.config.initialColorMode}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
