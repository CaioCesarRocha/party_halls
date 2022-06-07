import {Flex, Box, Button, Image, Text, Input, Icon} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Layout from "../components/template/Layout";
import RenderModal from "../components/template/Modal";
import { ThemeColors } from "./services/tema/themeColors";
import  *  as icons from "../components/Icons";
import useUsers from "../data/hooks/useUsers";
import useAuth from '../data/hooks/useAuth';
import User from '../core/User';


export default function PerfilUser() {
  const {user} = useAuth()
  const handleUsers = useUsers()
  const themeColors = ThemeColors()
  const [nickname, setNickname] = useState('')
  const [ renderPage, setRenderPage] = useState<boolean>(false)
  const [ renderSuccessChange, setRenderSuccessChange] = useState<boolean>(false)


  useEffect(() =>{
    setNickname(handleUsers?.userLogged?.nickname)
  }, [handleUsers.userLogged?.nickname])


  async function changeNickname (nickname: string){
    const userLogged = handleUsers?.userLogged;
    if(userLogged?.id){
      const updateUser = new User(userLogged?.email, nickname, userLogged?.avatar, userLogged.id)
      await handleUsers.updateUser(updateUser)
    }
    else{
      var newUser = new User(userLogged?.email, nickname, '/uploads/2bc98b08e7e3-randomUser.png') 
      
      if(user?.imgUrl) newUser = new User(userLogged?.email, nickname, user.imgUrl)
  
      await handleUsers.saveUser(newUser)     
    }
    setRenderSuccessChange(true)   
  }

  async function fillPage(){
    var actualUser = new User(user?.email, user?.name,'/uploads/2bc98b08e7e3-randomUser.png' )

    if(!user?.name) actualUser = new User(user?.email, 'Insira um nome', '/uploads/2bc98b08e7e3-randomUser.png') 

    await handleUsers.getOneUser(actualUser)
    setRenderPage(true)
  }


  function renderSubtitle(subtitle: string){
    return( <Text m={2} fontSize='2xl'> {subtitle}  </Text> )
  }

  function renderCardImage(){
    return(
      <Flex flexDirection={{base: 'column', md: 'row'}} alignItems={{base: 'center', md: 'start'}} 
        bgColor='blackAlpha.700' rounded='2xl' h={{base: 300, md: 150}}  
      >
        <Image
          w={130} h={130} rounded='full' mt={{base: 4, md: 2}} m={2}
          src={user?.imgUrl ?? '/uploads/2bc98b08e7e3-randomUser.png'}
          alt='Imagem do usuário'
        />
        <Flex flexDirection='column' pt={{base: 5, md: 10}} 
          alignItems={{base: 'center', md: 'start'}} textAlign={{base: 'center', md: 'start'}}             
        >
          <RenderModal
            textOpenButton="Alterar Avatar"
            title="Avatar do Usuário"
            email={handleUsers?.userLogged?.email}
          />
          <Text p={5} color='yellow.400' fontSize={{base: 12, md: 15}}> 
            A imagem deve estar no formato JPEG, PNG ou GIF e não pode ter mais do que 10 MB. 
          </Text>
        </Flex>
      </Flex>
    )
  }

  function renderCardData(){
    return (
      <Flex flexDirection='column'  h={{base: 225, sm: 150}} mb={2}
      bgColor='blackAlpha.700' rounded='2xl'  
      >
        <Flex flexDirection={{base: 'column', sm: 'row'}} p={5}>
          <Text  color='yellow.400' > Usuário: </Text>
          <Input
            size='sm' rounded='full' width={{base: 44 , sm: 96}} ml={{base: 0, sm: 3}}
            bgColor={themeColors.bgButtonGallery} color={themeColors.textButtonGallery} 
            value={handleUsers.userLogged?.email } type='text' readOnly={true}
          />
        </Flex>
        <Flex flexDirection={{base: 'column', sm: 'row'}} pl={5} pt={3}>
          <Text color='yellow.400' > Nome de exibição:</Text>
          <Input
            size='sm' rounded='full' width={{base: 44 , sm: 96}} ml={{base: 0, sm: 3}}
            bgColor={themeColors.bgButtonGallery} color={themeColors.textButtonGallery} 
            onChange={e => setNickname(e.target.value)}
            value={nickname} type='text'
          />
          <Flex flexDirection='row'>
            <Button ml={1} p={0} size='sm' w={6} mt={{base: 1, sm: 0}}
              color={themeColors.textButtonGallery} bgColor={themeColors.bgButtonGallery}
              onClick={() => changeNickname(nickname)}
            >
              {icons.iconPencil}          
            </Button>
            {renderSuccessChange ? 
                <Icon color='green.300' ml={2} mt={{base: 1, sm: 0}} w={12} h={12}>
                  {icons.iconSuccess}
                </Icon>
            : 
              null
            }
          </Flex>       
        </Flex>         
      </Flex>
    )
  }

  return (
    <Layout 
      title="Perfil do Usuário"
      subtitle="Administre as suas informações de Usuário."
    >
      { renderPage ?      
        <Box width='95%' margin='0 auto' >
          <Flex flexDirection={'column'} width='85%'>

            {renderSubtitle('Imagem do Perfil')}
              
            {renderCardImage()}

            {renderSubtitle('Dados do Perfil')}

            {renderCardData()}   
          </Flex>
        </Box>  
       : 
        <Button colorScheme='linkedin' w={40} h={10} onClick={() => fillPage()} >
          Liberar Perfil
        </Button>
      }  
      
    </Layout>
  )
}