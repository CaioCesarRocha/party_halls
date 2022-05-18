import {useColorMode, useColorModeValue} from "@chakra-ui/react";



export function ThemeColors(){            //light     //dark
    const bgBaseColor = useColorModeValue("gray.300", "gray.700" )
    const textBaseColor = useColorModeValue("gray.900", "gray.300")

    const bgHoverColor = useColorModeValue("gray.400", "gray.600")
    const textHoverColor = useColorModeValue("gray.100", "gray.900")


    const bgMenu = useColorModeValue("gray.300", "gray.900")

    const exitItemColor = useColorModeValue("red.600", "red.300")
    const exitHoverItem = useColorModeValue("red.300",  "red.800")

    //cor do switchTheme
    const bgSwitchTheme = useColorModeValue('linear(to-r, #f8ff33, #f5640a)','linear(to-r, #e2e6e1, #2b2b2a)')

    

    const colors = {
        bgBaseColor, textBaseColor, 
        bgHoverColor, textHoverColor,
        bgMenu, 
        exitItemColor, exitHoverItem, 
        bgSwitchTheme
    }

    return colors;
}