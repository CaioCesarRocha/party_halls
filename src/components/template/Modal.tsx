import {
    Modal, ModalOverlay, ModalContent,   ModalCloseButton, useDisclosure,
    ModalHeader, ModalFooter, ModalBody, Button, Text, Icon
  } from '@chakra-ui/react'
import { useState} from "react";
import  *  as icons from "../Icons";

import Dropzone from './Dropzone';
import { ThemeColors } from "../../pages/services/tema/themeColors";
import User from '../../core/User';
import useUsers from '../../data/hooks/useUsers'


interface propsRenderModal{
    textOpenButton: string
    title: string,
    user: User,   
}

export default function RenderModal(props: propsRenderModal){
    const themeColors = ThemeColors()
    const handleUsers = useUsers()
    const [renderSuccess, setRenderSuccess] = useState<boolean>(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedFile, setSelectedFile] = useState<File>();


    async function sendAvatar(){
      if(selectedFile) {
        const dataUser = new FormData();
        dataUser.append('avatar', selectedFile)   

        const result = await fetch("http://localhost:3000/api/receiveAvatar", {
          method: "POST",
          body: dataUser
        })
        
        var dataResult = await result.json().then(response => dataResult = response);

        const updateUser = new User(
          props.user.email,
          props.user.nickname,
          `/uploads/${dataResult?.newAvatar}`, 
          props.user.id
        )
        await handleUsers.updateUser(updateUser); 
        setRenderSuccess(true) 
      } 
      else{ alert('Selecione uma foto') }
    }

    return (
      <>
        <Button 
            ml={{base: 0, sm: 5}} w={40}
            bgColor={themeColors.bgButtonGallery} color={themeColors.textButtonGallery} 
            onClick={onOpen}
        >
            {props.textOpenButton}
        </Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody m='0 auto'>
              <Dropzone
                  onFileUploaded={setSelectedFile}
              />
            </ModalBody>
  
            <ModalFooter>
              {renderSuccess ?
                <>
                  <Text color='green.300' > Avatar atualizado! </Text>
                  <Icon color='green.300' mr={2} ml={2}  mt={{sm: 3}} w={12} h={12}> 
                    {icons.iconSuccess}
                  </Icon>
                </>  
              :
                null
              }
                   
              <Button bgColor='green.400' mr={3} onClick={() => sendAvatar()}>
                Enviar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}