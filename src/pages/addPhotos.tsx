import {Flex, Box, Button, FormLabel, Textarea, Select} from "@chakra-ui/react";
import { useState } from "react";
import { useFormik } from 'formik';

import Layout from "../components/template/Layout";
import Dropzone from "../components/template/Dropzone";
import { ThemeColors } from "./services/tema/themeColors";

import * as validationAddPhotos from "./services/validationForms/formAddPhotos";


export function getStaticProps(){
    return { props:{} }
  }


export default function AddPhotos(props) {
    const themeColors = ThemeColors();
    const [selectedFile, setSelectedFile] = useState<File>();

    const formik  = useFormik({
        initialValues: validationAddPhotos.initialValues,
    
        validationSchema: validationAddPhotos.schema,
    
        enableReinitialize: true,

        onSubmit: async (data) => {
            console.log('dados', data)       
            formik.resetForm();
            alert(`Foto ${data.description} enviado com sucesso!`);
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
                        />

                        <FormLabel htmlFor='description' mt={3}> Descrição </FormLabel>
                        <Textarea
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            placeholder='Informação do espaço na foto'
                            size='lg' fontSize={15}
                        />

                        <Button type='submit' mt={5} >
                            Enviar Foto
                        </Button> 

                    </form>
                </Flex>
            </Box>
        </Layout>
    );
}