import {Flex, Box, Button, Image, Text, Input} from "@chakra-ui/react";

import Layout from "../components/template/Layout"
import useAuth from "../data/hooks/useAuth";
import { ThemeColors } from "./services/tema/themeColors";
import  *  as icons from "../components/Icons";

export default function PerfilUser() {
  const themeColors = ThemeColors()
  const {user} = useAuth()

  return (
    <Layout 
      title="Perfil do Usuário"
      subtitle="Administre as suas informações de Usuário."
    >
      <Box width='95%' margin='0 auto' >
        <Flex flexDirection={'column'} width='85%'>

          <Text ml={2} mb={2} fontSize='2xl'> 
            Imagem de Perfil      
          </Text>
        
            <Flex flexDirection={{base: 'column', md: 'row'}} alignItems={{base: 'center', md: 'start'}} 
            bgColor='blackAlpha.700' rounded='2xl' h={{base: 300, md: 150}}  
            >
              <Image
                w={130} h={130} rounded='full' mt={{base: 4, md: 2}} m={2}
                src={user?.imgUrl ?? ''}
                alt='Imagem do usuário'
              />
              <Flex flexDirection='column' pt={{base: 5, md: 10}} 
                alignItems={{base: 'center', md: 'start'}} textAlign={{base: 'center', md: 'start'}}             
              >
                <Button bgColor={themeColors.bgButtonGallery} ml={{base: 0, sm: 5}} w={40}> Alterar imagem</Button>
                <Text p={5} color='yellow.400' fontSize={{base: 12, md: 15}}> 
                  A imagem deve estar no formato JPEG, PNG ou GIF e não pode ter mais do que 10 MB. 
                </Text>
              </Flex>
            </Flex>
       
          <Text m={2} fontSize='2xl'> 
            Dados do Perfil      
          </Text>

          <Flex flexDirection='column'  h={{base: 170, sm: 150}} mb={2}
            bgColor='blackAlpha.700' rounded='2xl'  
            >
            <Flex flexDirection={{base: 'column', sm: 'row'}} p={5}>
              <Text  color='yellow.400' > Usuário: </Text>
              <Text ml={3} color={themeColors.textBaseColor}>{user?.email ?? ''}</Text>
            </Flex>
            <Flex flexDirection={{base: 'column', sm: 'row'}} pl={5} pt={3}>
              <Text color='yellow.400' > Nome de exibição:</Text>
              <Input
                size='sm' rounded='full' width={{base: 48 , sm: 96}} ml={{base: 0, sm: 3}}
                bgColor={themeColors.bgButtonGallery}
                value={user?.name ?? ''}
              />
              <Button ml={1} p={0} size='sm' color={themeColors.textBaseColor}>{icons.iconPencil}</Button>
            </Flex>         
          </Flex>
        </Flex>
      </Box>
    </Layout>
  )
}