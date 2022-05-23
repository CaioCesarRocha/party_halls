import {useColorMode, useColorModeValue} from "@chakra-ui/react";



export function ThemeColors(){            //light     //dark
    const bgBaseColor = useColorModeValue("gray.100", "gray.700")
    const textBaseColor = useColorModeValue("gray.900", "gray.300")

    const bgHoverColor = useColorModeValue("gray.200", "gray.600")
    const textHoverColor = useColorModeValue("gray.500", "gray.900")

    const bgMenu = useColorModeValue("#acacb0", "gray.900") 

    const exitItemColor = useColorModeValue("red.600", "red.300")
    const exitHoverItem = useColorModeValue("red.300",  "red.800")

    //cor do switchTheme
    const bgSwitchTheme = useColorModeValue('linear(to-r, #f8ff33, #f5640a)','linear(to-r, #e2e6e1, #2b2b2a)')

    //cor Buttons da gallery (tela Spaces)
    const bgButtonGallery = useColorModeValue("teal.900", "teal.500")
    const textButtonGallery = useColorModeValue("gray.100", "gray.800")
    const hoverBGButtonGallery = useColorModeValue("teal.500", "teal.800")
    
    //cor do Form #010d1a, #012345
    const bgForm = useColorModeValue( 'linear-gradient(to right, #acacb0, #404042  )'
    , 'linear-gradient(to right, #171923, #3e495e)')

    

    const colors = {
        bgBaseColor, textBaseColor, 
        bgHoverColor, textHoverColor,
        bgMenu, 
        exitItemColor, exitHoverItem, 
        bgSwitchTheme,
        bgButtonGallery, textButtonGallery, hoverBGButtonGallery,
        bgForm,
    }

    return colors;
}