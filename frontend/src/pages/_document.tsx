
import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from './services/tema/themeDark';

//CONFIGS NECESSÁRIOS PARA FUNCIONAR O USO DO THEME EM TODA APLICAÇÃO
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}