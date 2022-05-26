import {Modal, ModalOverlay, ModalContent,  ModalHeader, ModalFooter,
        ModalBody, ModalCloseButton, useDisclosure, Button, Flex, Image
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { ThemeColors } from "../../pages/services/tema/themeColors";
import { typeGallery } from './Gallery'

export default function GalleryOpen(props: typeGallery) {
    const themeColors = ThemeColors();

    const [page, setPage] = useState(0)
    const [buttonOff, setButtonOff] = useState<boolean>(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() =>{
        setPage(0)
    }, [props.title])

    useEffect(() =>{
        if(page === 0) setButtonOff(true)
        if(buttonOff === true && page > 0) setButtonOff(false)
    }, [page])


    const INTERN = [
        'https://picsum.photos/300/300',
        'https://veja.abril.com.br/wp-content/uploads/2019/12/amazonia-floresta-coraccca7ao.jpg.jpg',
        'https://tm.ibxk.com.br/2020/01/30/30021141299110.jpg?ims=1120x420',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
    ]

    const EXTERN = [
        'https://picsum.photos/720/720',
        'https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg',
        'https://i.pinimg.com/564x/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
    ]

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

                <ModalBody display='flex' justifyContent='center'>
                    {props.title === 'INTERN' ?
                        <Image
                            w={460} h={460}
                            src={INTERN[`${page}`]}
                            alt="Imagem do espaço"
                        />
                    :
                        <Image
                            w={460} h={460}
                            src={EXTERN[`${page}`]}
                            alt="Imagem do espaço"
                        />
                    }
                </ModalBody>
    
                <ModalFooter>
                
                    <Flex flexDirection='row' w='30%' justifyContent='space-between'> 
                        <Button colorScheme='blue' isDisabled={buttonOff} onClick={() => removePage(page)}>
                            Foto Anterior
                        </Button>
                        <Button colorScheme='blue' onClick={() => addPage(page)}>
                            Próxima foto
                        </Button>
                    </Flex>
               
                </ModalFooter>
            </ModalContent>
            </Modal>
      </>
    )
}