import {Text, Box} from "@chakra-ui/react"
import { ThemeColors } from "../../pages/tema/themeColors";

interface LayoutProps {
    title: string, 
    subtitle: string,
}

export default function Title (props: LayoutProps){

    const themeColors = ThemeColors();

    return(
        <Box w='80%'>
            <Text
                fontFamily='black' fontSize='4xl'
                color={themeColors.textBaseColor}
            >
                {props.title}
            </Text>

            <Text
                fontFamily="light" fontSize={'mm'}
               
                
                color={themeColors.textBaseColor}
            >
                {props.subtitle}
            </Text>
        </Box>
    )
}