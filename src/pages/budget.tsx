import {Flex, Box, Button, FormControl, FormLabel, Textarea, Radio, RadioGroup, HStack, Select, FormErrorMessage} from "@chakra-ui/react";
import { useFormik } from 'formik';
import * as Yup from "yup";

import Layout from "../components/template/Layout";
import ErrorForm from "../components/template/Form/ErrorForm";
import InputForm from "../components/template/Form/Input";


const schema = Yup.object().shape({ //validation com Yup
    name: Yup.string().required('O campo Nome é obrigatório'),
    company: Yup.string(),
    contact: Yup.number().required('Informe o telefone de contato').min(8, 'O telefone tem mais de 8 números'),
    desiredDate: Yup.date().required('Informe a data desejada').min(10, 'Data inserida não existe, um exemplo de data certa é 10/10/2020'),
    numberParticipants: Yup.number().required('Informe o número aproximado de participantes'),
    typeParty: Yup.string().required('Selecione o tipo de festa desejado'),
    buffet: Yup.boolean().required('Informe se desejará Buffet incluído'),
    decoration: Yup.boolean().required('Informe se desejará Decoração incluída'),
    description: Yup.string(),  
})


export default function Budget() {
    const initialValues = { name: '', company: '', contact: '', desiredDate: '', 
    numberParticipants: '', typeParty: '' , buffet: false, decoration: false, 
    description: ''};

    const formik  = useFormik({
        initialValues: initialValues,
    
        validationSchema: schema,
    
        enableReinitialize: true,

        onSubmit: async (data) => {   
            console.log('passei no data');
            console.log('data', data)    
            formik.resetForm();
            alert(`Pedido registrado`);
        }
    });
 

  /*<FormControl margin='10px auto' width='470px' 
                        bgColor='blue.800' rounded='2xl' p={8}
                        onSubmit={formik.handleSubmit}
                    >                
    </FormControl>*/

   
    return(
        <Layout
            title="Solicite seu orçamento"
            subtitle="Nossa equipe está sempre pronta para esclarecer as dúvidas, ouvir sugestões e opiniões. Para entrar em contato conosco, por favor. Preencha os campos com seus dados e clique no botão enviar."
        >
            <Box width='100%' margin='0 auto'>
                <Flex flexDirection='column'>
                    <form 
                        style={{margin: '10px auto', width: '500px', padding: 32, 
                          borderRadius: 12, backgroundColor: 'black' 
                        }}
                        onSubmit={formik.handleSubmit}
                    >
                        <InputForm
                            nameHMTLFOR="name"
                            nameField="Nome"
                            type='text'
                            value={formik.values.name}
                        />
                        {formik.errors.name && formik.touched.name && (<ErrorForm> {formik.errors.name}</ErrorForm>)}

                        <InputForm
                            nameHMTLFOR="company"
                            nameField="Empresa *"
                            type='text'
                            value={formik.values.company}
                        />
                        {formik.errors.company && formik.touched.company && (<ErrorForm> {formik.errors.company}</ErrorForm>)}

                        <InputForm
                            nameHMTLFOR="contact"
                            nameField="Contato"
                            type='number'
                            value={formik.values.contact}
                        />
                        {formik.errors.contact && formik.touched.contact && (<ErrorForm> {formik.errors.contact}</ErrorForm>)}

                        <InputForm
                            nameHMTLFOR="desireDate"
                            nameField="Data desejada"
                            type='date'
                            value={formik.values.desiredDate}
                        />
                        {formik.errors.desiredDate && formik.touched.desiredDate && (<ErrorForm> {formik.errors.desiredDate}</ErrorForm>)}

                        <InputForm
                            nameHMTLFOR="numberParticipants"
                            nameField="Número de Participantes"
                            type='number'
                            value={formik.values.numberParticipants}
                        />
                        {formik.errors.numberParticipants && formik.touched.numberParticipants && (<ErrorForm> {formik.errors.numberParticipants}</ErrorForm>)}


                        <FormLabel htmlFor='typeParty' mt={2}>Selecione o tipo da Festa</FormLabel>
                        <Select id='typeParty'>
                            <option>Casamento</option>
                            <option>Corporativo</option>
                            <option>Especial 15 Anos</option>
                            <option>Formatura</option>
                            <option>Festa Infantil</option>                       
                        </Select>

                        <Flex flexDirection='row' mt={5}>
                            <Flex flexDirection='column'> 
                                <FormLabel htmlFor='buffet' >Buffet Incluído?</FormLabel>                    
                                <RadioGroup defaultValue='true'>
                                    <HStack spacing='24px'>
                                        <Radio value='true'> Sim</Radio>
                                        <Radio value='false'> Não</Radio>
                                    </HStack>
                                </RadioGroup>
                            </Flex>
                            <Flex flexDirection='column' ml={12}> 
                                <FormLabel htmlFor='decoration'>
                                    Decoração Incluída?
                                </FormLabel>                    
                                <RadioGroup defaultValue='true'>
                                    <HStack spacing='24px'>
                                        <Radio value='true'> Sim</Radio>
                                        <Radio value='false'> Não</Radio>
                                    </HStack>
                                </RadioGroup>
                            </Flex>
                        </Flex>

                       
                        <FormLabel htmlFor='description' mt={3}> Observações </FormLabel>
                         <Textarea
                            value={formik.values.description}
                            placeholder='Conte mais sobre o evento!'
                            size='sm'
                        />

                        <Button
                            type='submit' mt={5} 
                        >
                            Solicitar Orçamento
                        </Button>
                                              
                    </form>      
                </Flex>
            </Box>
        </Layout>

    )

}