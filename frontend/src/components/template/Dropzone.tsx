import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload} from 'react-icons/fi';
import {Box,Icon, Text, Image, Flex, propNames,} from '@chakra-ui/react'

import { ThemeColors } from "../../pages/services/tema/themeColors";


interface propsDropzone{
    onFileUploaded: (file: File) => void;
    message: string;
    rounded: string;
  }
  

const Dropzone: React.FC<propsDropzone>= ({onFileUploaded, message, rounded}) => {
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
            justifyContent='center' alignItems='center' bgColor={themeColors.bgMenu}
            borderRadius={10} outline={0}  rounded={rounded} margin='0 auto'
            h={{base: 200, sm: 300}} w={{base: 200, sm: 300}}      
        >
            <input {...getInputProps()} accept='image/*' name="avatar"/>

            {selectedFileUrl ?
                <Image 
                    h={220} w={340} rounded={rounded}
                    src={selectedFileUrl} 
                    alt="Mechanical thumbnail"
                />
            :
                (
                <Flex cursor='pointer' flexDirection='column' justifyContent='center' alignItems='center' textAlign='center'>
                    <Icon h={45} w={45}> 
                        <FiUpload/> 
                    </Icon>
                    {message}
                </Flex>
                )
            }          
        </Flex>
    )
}

export default Dropzone;