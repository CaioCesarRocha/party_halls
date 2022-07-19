import {Flex, Box } from "@chakra-ui/react";
import { useState } from "react";

import Layout from "../components/template/Layout"
import Gallery from '../components/template/Gallery';
import ButtonBasic from "../components/template/Buttons/ButtonBasisc";
import GalleryOpen from "../components/template/GalleryOpen";
import api from '../pages/services/api';


export async function getStaticProps(){
  /*const resp = await fetch('http://localhost:3001/api/spacesIntern')
  const spacesIntern = await resp.json()*/
  const photosIntern = await api.get('photos/Intern')
  const spacesIntern = photosIntern.data
  /*const resp1 = await fetch('http://localhost:3001/api/spacesExtern')
  const spacesExtern= await resp1.json()*/
  const photosExtern = await api.get('photos/Extern')
  const spacesExtern = photosExtern.data
  
    return { 
      props: {
        spacesIntern, spacesExtern     
      } 
    }
}

export default function Spaces(props) {
  const [typeGallery, setTypeGallery] = useState<'INTERN' | 'EXTERN'>('INTERN')
  const [spaces, setSpaces] = useState<any[]>([])

  
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