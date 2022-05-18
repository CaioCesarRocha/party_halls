import {Button, useColorMode} from "@chakra-ui/react";
import { ThemeColors } from "../../pages/tema/themeColors";



const ButtonChangeTheme = () =>{

    const themeColors = ThemeColors();

    const { colorMode, toggleColorMode } = useColorMode();

    function changeThema() {
        toggleColorMode();
    }


    return (
        <Button
            bgGradient={themeColors.bgSwitchTheme}
            _hover={{bgGradient: themeColors.bgSwitchTheme}}
            rounded='full'
            size= 'sm'
            display={{base: 'none', sm: 'block' }}
            onClick={() => changeThema()}
        >
            {colorMode.toUpperCase()}
        </Button>
    )
}

export default ButtonChangeTheme;