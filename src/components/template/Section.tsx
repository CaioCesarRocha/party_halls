import { Box, Flex, Text, Image, Divider} from "@chakra-ui/react";
import { ThemeColors } from "../../pages/services/tema/themeColors";

interface propsSection {
    name: string,
    description: string,
    imgCompany?: string,
    address: string,
    contact: string
}


const Section = (props: propsSection) =>{
    const themeColors = ThemeColors();

    return(
        <Box m={2}>
            <Divider bgColor={themeColors.bgButtonGallery}/>
            <Flex flexDirection='row' mt={2}>
                <Image
                    width={{ base: 150, sm:200, md:250}} height={{base: 150, sm:200, md: 250}}
                    src='https://picsum.photos/300/300'
                    alt="Imagem da Empresa"
                />
                <Flex flexDirection='column' ml={4}>
                    <Text fontSize={{base: 'xl', sm: '2xl', md: '3xl'}} mt={2}
                        color={themeColors.textBaseColor}
                    >
                        {props.name}
                    </Text>
                    <Text mt={2} color={themeColors.textBaseColor}>
                        {props.description}
                    </Text>
                    <Text mt={2} color={themeColors.textBaseColor}>
                        {props.address}
                    </Text>
                    <Text mt={2} color={themeColors.textBaseColor}>
                        {props.contact}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    )
}


export default Section;