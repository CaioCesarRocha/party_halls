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
            mt={7}
            color={themeColors.textBaseColor}
        >
            {props.children}
        </Flex>
    )
}