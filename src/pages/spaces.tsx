import {Flex, Box } from "@chakra-ui/react";
import { useState } from "react";

import Layout from "../components/template/Layout"
import Gallery from '../components/template/Gallery';
import ButtonBasic from "../components/template/Buttons/ButtonBasisc";
import GalleryOpen from "../components/template/GalleryOpen";


export async function getStaticProps(){
  console.log('passei no static')
  const resp = await fetch('http://localhost:3000/api/spacesIntern')
  const spacesIntern = await resp.json()
  const resp1 = await fetch('http://localhost:3000/api/spacesExtern')
  const spacesExtern= await resp1.json()
    return { 
      props: {
          spacesIntern, spacesExtern     
        } 
    }
}


export default function Spaces(props) {
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

          <GalleryOpen 
            title={typeGallery} 
            spacesIntern={props.spacesIntern}
            spacesExtern={props.spacesExtern}
          />
        </Flex>
           
        <Gallery
          title={typeGallery}
          spacesIntern={props.spacesIntern}
          spacesExtern={props.spacesExtern}
        />
      </Box>            
    </Layout>
  )
}