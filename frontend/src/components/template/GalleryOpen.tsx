import {Modal, ModalOverlay, ModalContent,  ModalHeader, ModalFooter, Text,
        ModalBody, ModalCloseButton, useDisclosure, Button, Flex, Image
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { ThemeColors } from "../../pages/services/tema/themeColors";
import ButtonGalleryOpen from './Buttons/ButtonGalleryOpen';
import { typeGallery } from './Gallery'


export default function GalleryOpen(props: typeGallery) {
    const themeColors = ThemeColors();
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [page, setPage] = useState(0)
    const [buttonRemoveOff, setButtonRemoveOff] = useState<boolean>(false)
    const [buttonAddInternOff, setButtonAddInternOff] = useState<boolean>(false)
    const [buttonAddExternOff, setButtonAddExternOff] = useState<boolean>(false)

    
    useEffect(() =>{
        setPage(0)
    }, [props.title])

    useEffect(() =>{
        if(page === 0) setButtonRemoveOff(true);
        else if(buttonRemoveOff === true) setButtonRemoveOff(false);

        if(props.spacesIntern.length === page + 1) setButtonAddInternOff(true);  
        else if(buttonAddInternOff === true) setButtonAddInternOff(false);  
      
        if(props.spacesExtern.length === page + 1) setButtonAddExternOff(true);  
        else if(buttonAddExternOff === true) setButtonAddExternOff(false);                       
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
                                    {props.spacesIntern[`${page}`]?.description?.toUpperCase()}
                                </Text>
                                <Image
                                    w={470} h={450}
                                    src={`/uploads/${props.spacesIntern[`${page}`]?.url}`}
                                    alt="Imagem do espaço"
                                />
                            </>
                        :   
                            <>
                                <Text 
                                    fontWeight='black' borderRadius={8} mb={1}  px={2} py={1}
                                    color={themeColors.textButtonGallery} bgColor={themeColors.bgButtonGallery}
                                >
                                    {props.spacesExtern[`${page}`]?.description?.toUpperCase()}
                                </Text>
                                <Image
                                    w={500} h={450}                         
                                    src={`/uploads/${props.spacesExtern[`${page}`]?.url}`}
                                    alt="Imagem do espaço"
                                />
                            </>
                        }
                    </ModalBody>
        
                    <ModalFooter>            
                        <Flex flexDirection='row' w='30%' justifyContent='space-around'> 
                            <ButtonGalleryOpen
                                info={'Foto Anterior'}
                                disable={buttonRemoveOff}
                                onClick={() => removePage(page)}
                            />
                            {props.title === 'INTERN' ?
                                <ButtonGalleryOpen
                                    info={'Proxima Foto'}
                                    disable={buttonAddInternOff}
                                    onClick={() => addPage(page)}
                                />
                                :
                                <ButtonGalleryOpen
                                    info={'Proxima Foto'}
                                    disable={buttonAddExternOff}
                                    onClick={() => addPage(page)}
                                />
                            }
                        </Flex>         
                    </ModalFooter>
                </ModalContent>
            </Modal>
      </>
    )
}