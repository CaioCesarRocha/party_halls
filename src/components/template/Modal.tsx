import {
    Modal, ModalOverlay, ModalContent,   ModalCloseButton, useDisclosure,
    ModalHeader, ModalFooter, ModalBody, Button, Text, Image
  } from '@chakra-ui/react'

import { useState } from "react";

import Dropzone from './Dropzone';
import { ThemeColors } from "../../pages/services/tema/themeColors";


interface propsRenderModal{
    textOpenButton: string
    title: string
    avatar?: string,
}

export default function RenderModal(props: propsRenderModal){
    const themeColors = ThemeColors()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedFile, setSelectedFile] = useState<File>();

    function sendAvatar(){
      const dataUser = new FormData();
      

      if(selectedFile) {
        dataUser.append('avatar', selectedFile)

        fetch("http://localhost:3000/api/receiveAvatar", {
          method: "POST",
          body: selectedFile.webkitRelativePath
        });
        console.log('avatar', selectedFile)
      } else{
        alert('Selecione uma foto')
      }
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
              <Button bgColor='green.400' mr={3} onClick={() => sendAvatar()}>
                Enviar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}