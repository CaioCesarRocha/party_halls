// 1. importa a função `extendTheme`
import { extendTheme,  type ThemeConfig} from '@chakra-ui/react'   




// 2. Adicione sua configuração de modo de cor
const config : ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
  
// 3. estender o tema
const theme = extendTheme ({config}) 

export default theme