import {Flex, Image, Text, Box, Button, theme } from "@chakra-ui/react";
import { useState } from "react";

import { ThemeColors } from "../pages/tema/themeColors";
import Layout from "../components/template/Layout"
import Gallery from '../components/template/Gallery';
import ButtonBasic from "../components/template/Buttons/ButtonBasisc";



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

          <ButtonBasic
            info='Interno'
            onClick={() => setTypeGallery('INTERN')}
          />

          <ButtonBasic
            info='Externo'
            onClick={() => setTypeGallery('EXTERN')}
          />

        </Flex>
              
        <Gallery
          title={typeGallery}
        />
      </Box>
         
     
    </Layout>
  )
}