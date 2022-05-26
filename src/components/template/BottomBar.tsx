import {Flex, Image, Text, Box } from "@chakra-ui/react";
import { ThemeColors } from "../../pages/services/tema/themeColors";

export default function BottomBar(){
    const themeColors = ThemeColors();
    return(  
        <Box  >     
            <Flex
                flexDirection='row'            
               // w='100%'  
                justifyContent='center' alignItems='end' p={1}
                bgColor={themeColors.bgMenu}
            >   
           
                <Text
                        display={{base: 'none', sm: 'block' }}
                        mb={2}
                >
                    Entre em contato via:
                    </Text>

                <Image
                        h={8} w={8} rounded='full' ml={3} mb={1}
                        cursor='pointer'
                        src="/images/logo_whatsapp.png"
                        alt="Logo do WhatsApp"
                />

                    <Image
                        h={10} w={10} rounded='full' ml={3}
                        cursor='pointer'
                        src="/images/logo_instagram.png"
                        alt="Logo do Instagram"
                />

                    <Image
                        h={10} w={10} rounded='full' ml={2} 
                        cursor='pointer'
                        src="/images/logo_facebook.png"
                        alt="Logo do Facebook"
                />
           
            </Flex>
            
        </Box>
    )
}