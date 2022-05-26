import { ChakraProvider,  } from '@chakra-ui/react' 

import theme from './services/tema/themeDark'
import { AuthProvider } from '../data/context/AuthContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
        <ChakraProvider theme={theme}>        
            <Component {...pageProps} />   
        </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
