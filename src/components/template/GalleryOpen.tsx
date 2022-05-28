import {Modal, ModalOverlay, ModalContent,  ModalHeader, ModalFooter, Text,
        ModalBody, ModalCloseButton, useDisclosure, Button, Flex, Image
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { ThemeColors } from "../../pages/services/tema/themeColors";
import { typeGallery } from './Gallery'

export default function GalleryOpen(props: typeGallery) {
    const themeColors = ThemeColors();

    const [page, setPage] = useState(0)
    const [buttonRemoveOff, setButtonRemoveOff] = useState<boolean>(false)
    const [buttonAddOff, setButtonAddOff] = useState<boolean>(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    

    useEffect(() =>{
        setPage(0)
    }, [props.title])

    useEffect(() =>{
        if(page === 0) setButtonRemoveOff(true);
        else if(buttonRemoveOff === true) setButtonRemoveOff(false);
        if(props.spacesIntern.length === page + 1) setButtonAddOff(true);
        else if(buttonAddOff === true) setButtonAddOff(false);
    }, [page])


    function addPage(page: number){
        let newPage = page + 1
        setPage(newPage)
    }

    function removePage(page: number){
        let newPage = page - 1
        setPage(newPage)
    }

    return (
        <>
            <Button colorScheme='messenger' mr={5} onClick={onOpen} display={{base: 'none', md: 'block' }}>
                Abrir Galeria
            </Button>
    
            <Modal isOpen={isOpen} onClose={onClose} size='full'>
            <ModalOverlay />
                <ModalContent bgColor={themeColors.bgBaseColor}>
                    <ModalHeader fontSize='2xl'> Nosso espaço {props.title}O</ModalHeader>
                    <ModalCloseButton size='lg' />

                    <ModalBody display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
                        {props.title === 'INTERN' ?
                            <>
                                <Text  fontWeight='black' px={2} py={1} borderRadius={8}
                                     color={themeColors.textButtonGallery} bgColor={themeColors.bgButtonGallery}
                                >
                                    {props.spacesIntern[`${page}`].description.toUpperCase()}
                                </Text>
                                <Image
                                    w={470} h={450}
                                    src={props.spacesIntern[`${page}`].image}
                                    alt="Imagem do espaço"
                                />
                            </>
                        :   
                            <>
                                <Text 
                                    fontWeight='black' borderRadius={8} mb={1}  px={2} py={1}
                                    color={themeColors.textButtonGallery} bgColor={themeColors.bgButtonGallery}
                                >
                                    {props.spacesExtern[`${page}`].description.toUpperCase()}
                                </Text>
                                <Image
                                    w={500} h={450}
                                    src={props.spacesExtern[`${page}`].image}
                                    alt="Imagem do espaço"
                                />
                            </>
                        }
                    </ModalBody>
        
                    <ModalFooter>            
                        <Flex flexDirection='row' w='30%' justifyContent='space-between'> 
                            <Button colorScheme='blue' isDisabled={buttonRemoveOff} onClick={() => removePage(page)}>
                                Foto Anterior
                            </Button>
                            <Button colorScheme='blue' isDisabled={buttonAddOff} onClick={() => addPage(page)}>
                                Próxima foto
                            </Button>
                        </Flex>         
                    </ModalFooter>
                </ModalContent>
            </Modal>
      </>
    )
}