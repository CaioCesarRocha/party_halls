import {Flex, Image, Text, Box, Button, theme } from "@chakra-ui/react";
import { useState } from "react";

import { ThemeColors } from "../pages/tema/themeColors";
import Layout from "../components/template/Layout"
import Gallery from '../components/template/Gallery';



export default function Home() {
  const themeColors = ThemeColors();
  const [typeGallery, setTypeGallery] = useState<'INTERN' | 'EXTERN'>('INTERN')

  return (
    <Layout 
      title="Espaço Disponível"
      subtitle="Conheça todas áreas disponíveis para o evento"
      
    > 
      <Box bgColor={themeColors.bgBaseColor} w='100%'  >
        <Flex flexDirection='row' >
          <Button
            bgColor={themeColors.bgButtonGallery} color={themeColors.textButtonGallery}
            _hover={{bgColor: themeColors.hoverBGButtonGallery}}
            onClick={() => setTypeGallery('INTERN')}
          >
            Interno
          </Button>

          <Button
            ml={5}
            bgColor={themeColors.bgButtonGallery} color={themeColors.textButtonGallery}
            _hover={{bgColor: themeColors.hoverBGButtonGallery}}
            onClick={() => setTypeGallery('EXTERN')}
          >
            Externo
          </Button>
        </Flex>
              
        <Gallery
          title={typeGallery}
        />
      </Box>
         
     
    </Layout>
  )
}