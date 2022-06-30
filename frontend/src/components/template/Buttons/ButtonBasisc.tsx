import {Button} from "@chakra-ui/react";
import { ThemeColors } from "../../../pages/services/tema/themeColors";

interface propsButton {
    info: string,
    onClick: () => void,
}


const ButtonBasic = (props: propsButton) =>{
    const themeColors = ThemeColors();

    return(
        <Button
            ml={{base: 2, sm: 5}} mt={{ base:3, md:0}}
            width='130px'
            bgColor={themeColors.bgButtonGallery} color={themeColors.textButtonGallery}
            _hover={{bgColor: themeColors.hoverBGButtonGallery}}
            onClick={props.onClick}
        >
                {props.info}
        </Button>
    )
}


export default ButtonBasic;