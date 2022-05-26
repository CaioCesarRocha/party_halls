import {Flex} from "@chakra-ui/react"
import { ThemeColors } from "../../pages/tema/themeColors";

interface ContentProps {
    children?: any
}

export default function Content(props: ContentProps){

    const themeColors = ThemeColors();

    return(
        <Flex
            flexDirection='column'
            w='full'
            mt={7}
            color={themeColors.textBaseColor}
            bgColor={themeColors.bgBaseColor}
        >
            {props.children}
        </Flex>
    )
}