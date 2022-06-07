import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload} from 'react-icons/fi';
import {Box,Icon, Text, Image, Flex,} from '@chakra-ui/react'

import { ThemeColors } from "../../pages/services/tema/themeColors";


interface propsDropzone{
    onFileUploaded: (file: File) => void;
  }
  

const Dropzone: React.FC<propsDropzone>= ({onFileUploaded}) => {
    const themeColors = ThemeColors()
    const [selectedFileUrl, setSelectedFileUrl] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];

        const fileURL = URL.createObjectURL(file); //criar a url do arquivo

        setSelectedFileUrl(fileURL);
        onFileUploaded(file)
    }, [onFileUploaded])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        //accept: 'image/*', //aceitar qualquer tipo de imagem
    })

    return(
        <Flex {...getRootProps()}
            justifyContent='center' alignItems='center'
            h={300} w={300} borderRadius={10} outline={0}
            bgColor={themeColors.bgMenu} rounded='full'
        >
            <input {...getInputProps()} accept='image/*' name="avatar"/>

            {selectedFileUrl ?
                <Image 
                    h={300} w={300} rounded='full'
                    src={selectedFileUrl} 
                    alt="Mechanical thumbnail"
                />
            :
                (
                <Flex cursor='pointer' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Icon h={45} w={45}> 
                        <FiUpload/> 
                    </Icon>
                    Selecione um novo Avatar
                </Flex>
                )
            }          
        </Flex>
    )
}

export default Dropzone;