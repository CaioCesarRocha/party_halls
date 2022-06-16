import {Flex, Box, Button, FormLabel, Textarea, Select } from "@chakra-ui/react";
import { useState } from "react";
import { useFormik } from 'formik';

import Layout from "../components/template/Layout";
import ErrorForm from "../components/template/Form/ErrorForm";
import Dropzone from "../components/template/Dropzone";
import { ThemeColors } from "./services/tema/themeColors";
import api from "./services/api";

import * as validationAddPhotos from "./services/validationForms/formAddPhotos";


export function getStaticProps(){
    return { props:{} }
  }


export default function AddPhotos(props) {
    const themeColors = ThemeColors();
    const [selectedFile, setSelectedFile] = useState<File>();
    const [errorImg, setErrorImg] = useState<boolean>(false);


    async function sendNewPhoto(data, typeSpace: string){   
        if(selectedFile){
            const dataPhoto = new FormData();
            dataPhoto.append('photo', selectedFile) 

            //3001 quando backend estiver rodando....
            const result = await fetch("http://localhost:3001/api/receivePhoto", {
                method: "POST",
                body: dataPhoto
            })        
            var dataResult = await result.json().then(response => dataResult = response);
    
            await api.post('photos', {
                url: `${dataResult?.newPhoto}`,
                description: data?.description,
                typeSpace: typeSpace
            });

            return true
        }
        else{
            setErrorImg(true)
            return false;
        }
    }


    const formik  = useFormik({
        initialValues: validationAddPhotos.initialValues,
    
        validationSchema: validationAddPhotos.schema,
    
        enableReinitialize: true,
        
        onSubmit: async (data) => {
            const typeSpace = data?.typeSpace || 'Intern'
            
            let response = await sendNewPhoto(data, typeSpace);
            if (response === true){     
                formik.resetForm();
                setErrorImg(false)
                const name = selectedFile.name
                alert(`Foto  ${name} - ${data.description} - ${typeSpace} - enviado com sucesso!`);
            }        
        }
    });
    

    return(
        <Layout
            title="Adicionando novas fotos"
            subtitle="Preencha o formulário abaixo para enviar adicionar novas fotos"
        >
             <Box width='100%' margin='0 auto'>
                <Flex flexDirection='column' >
                    <form 
                        style={{margin: '8px auto', maxWidth: '550px', padding: 32, 
                          borderRadius: 12, backgroundImage: themeColors.bgForm
                        }}
                        onSubmit={formik.handleSubmit}
                    >
                        <FormLabel htmlFor='description' mt={3}> Nova foto </FormLabel>
                        <Dropzone 
                            onFileUploaded={setSelectedFile}
                            message=' Selecionar  nova Foto'
                            rounded='2xl'
                        />
                        {errorImg ? <ErrorForm> É preciso selecionar uma imagem </ErrorForm> : null}

                        <FormLabel htmlFor='typeSpace' mt={2}>Selecione o tipo do Espaço</FormLabel>                
                        <Select name="typeSpace"  onChange={formik.handleChange} >
                            <option value="Intern">Interno</option>
                            <option value="Extern">Externo</option>                      
                        </Select>

                        <FormLabel htmlFor='description' mt={3}> Descrição </FormLabel>
                        <Textarea
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            placeholder='Informação do espaço na foto'
                            size='lg' fontSize={15}
                        />
                        {formik.errors.description && formik.touched.description && (<ErrorForm> {formik.errors.description}</ErrorForm>)}

                        <Button type='submit' mt={5}>
                            Enviar Foto
                        </Button> 
                    </form>
                </Flex>
            </Box>
        </Layout>
    );
}