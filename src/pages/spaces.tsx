import {Flex, Box } from "@chakra-ui/react";
import { useState } from "react";

import { ThemeColors } from "./services/tema/themeColors";
import Layout from "../components/template/Layout"
import Gallery from '../components/template/Gallery';
import ButtonBasic from "../components/template/Buttons/ButtonBasisc";
import GalleryOpen from "../components/template/GalleryOpen";


export function getStaticProps(){
  return {
    props:{
    }
  }
}


export default function Home() {
  const themeColors = ThemeColors();
  const [typeGallery, setTypeGallery] = useState<'INTERN' | 'EXTERN'>('INTERN')

  return (
    <Layout 
      title="Espaço Disponível"
      subtitle="Conheça todas áreas disponíveis para o evento"
      
    > 
      <Box w='100%'  >
        <Flex flexDirection='row' justifyContent='space-between'>

          <Flex justifyContent='center'> 
            <ButtonBasic
              info='Interno'
              onClick={() => setTypeGallery('INTERN')}
            />
              <ButtonBasic
              info='Externo'
              onClick={() => setTypeGallery('EXTERN')}
            />
          </Flex>  

          <GalleryOpen title={typeGallery} />
        </Flex>
           
        <Gallery
          title={typeGallery}
        />
      </Box>
         
     
    </Layout>
  )
}