import { ChakraProvider,  } from '@chakra-ui/react' 

import theme from './services/tema/themeDark'
import { AuthProvider } from '../data/context/AuthContext'
import { ContextUserLoggedProvider} from '../data/context/userLoggedContext'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ContextUserLoggedProvider>
        <ChakraProvider theme={theme}>        
          <Component {...pageProps} />   
        </ChakraProvider>
      </ContextUserLoggedProvider>
    </AuthProvider>
  )
}

export default MyApp
