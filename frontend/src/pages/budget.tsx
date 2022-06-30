import {Flex, Box, Button, FormLabel, Textarea, Select} from "@chakra-ui/react";
import { useFormik } from 'formik';

import Layout from "../components/template/Layout";
import ErrorForm from "../components/template/Form/ErrorForm";
import InputForm from "../components/template/Form/Input";
import SwitchForm from "../components/template/Form/SwitchForm";
import { ThemeColors } from "./services/tema/themeColors";
import * as validationBudget from "./services/validationForms/formBudget";


export function getStaticProps(){
    return { props:{} }
  }


export default function Budget(props) {
    const themeColors = ThemeColors();

    const formik  = useFormik({
        initialValues: validationBudget.initialValues,
    
        validationSchema: validationBudget.schema,
    
        enableReinitialize: true,

        onSubmit: async (data) => {
            console.log('dados', data)       
            formik.resetForm();
            alert(`Pedido no nome ${data.name} enviado com sucesso!
                    Entraremos em contato em breve! Obrigado!
            `);
        }
    });
 

    return(
        <Layout
            title="Solicite seu orçamento"
            subtitle="Nossa equipe está sempre pronta para esclarecer as dúvidas, ouvir sugestões e opiniões. Para entrar em contato conosco, por favor. Preencha os campos com seus dados e clique no botão enviar."
        >
            <Box width='100%' margin='0 auto'>
                <Flex flexDirection='column'>
                    <form 
                        style={{margin: '8px auto', maxWidth: '550px', padding: 32, 
                          borderRadius: 12, backgroundImage: themeColors.bgForm
                        }}
                        onSubmit={formik.handleSubmit}
                    >
                        <InputForm
                            nameHMTLFOR="name" nameInput="name"
                            nameField="Nome"
                            type='text'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.name && formik.touched.name && (<ErrorForm> {formik.errors.name}</ErrorForm>)}

                        <InputForm
                            nameHMTLFOR="company" nameInput="company"
                            nameField="Empresa *"
                            type='text'
                            value={formik.values.company}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.company && formik.touched.company && (<ErrorForm> {formik.errors.company}</ErrorForm>)}

                        <InputForm
                            nameHMTLFOR="contact" nameInput="contact"
                            nameField="Contato"
                            type='number'
                            value={formik.values.contact}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.contact && formik.touched.contact && (<ErrorForm> {formik.errors.contact}</ErrorForm>)}

                        <InputForm
                            nameHMTLFOR="desireDate" nameInput="desiredDate"
                            nameField="Data desejada"
                            type='date'
                            value={formik.values.desiredDate}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.desiredDate && formik.touched.desiredDate && (<ErrorForm> {formik.errors.desiredDate}</ErrorForm>)}

                        <InputForm
                            nameHMTLFOR="numberParticipants" nameInput="numberParticipants"
                            nameField="Número de Participantes (Máximo 420)"
                            type='number'
                            value={formik.values.numberParticipants}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.numberParticipants && formik.touched.numberParticipants && (<ErrorForm> {formik.errors.numberParticipants}</ErrorForm>)}

                        <FormLabel htmlFor='typeParty' mt={2}>Selecione o tipo da Festa</FormLabel>                
                        <Select name="typeParty"  onChange={formik.handleChange} >
                            <option value="Casamento">Casamento</option>
                            <option value="Corporativo">Corporativo</option>
                            <option value="Especial 15 anos">Especial 15 Anos</option>
                            <option value="Formatura">Formatura</option>
                            <option value="Festa Infantil">Festa Infantil</option>                       
                        </Select>

                        <Flex flexDirection='row' mt={5}>
                            <Flex flexDirection='column'> 
                                <SwitchForm
                                    nameHMTLFOR="buffet"
                                    nameField="Buffet Incluído?"
                                    nameSwitch="buffet"
                                    onChange={formik.handleChange}
                                />                     
                            </Flex>
                            <Flex flexDirection='column' ml={12}> 
                                <SwitchForm
                                    nameHMTLFOR="decoration"
                                    nameField="Decoração Incluída?"
                                    nameSwitch="decoration"
                                    onChange={formik.handleChange}                              
                                />
                            </Flex>
                        </Flex>
                      
                        <FormLabel htmlFor='description' mt={3}> Observações </FormLabel>
                         <Textarea
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            placeholder='Conte mais sobre o evento!'
                            size='sm'
                        />

                        <Button type='submit' mt={5} >
                            Solicitar Orçamento
                        </Button>                                   
                    </form>      
                </Flex>
            </Box>
        </Layout>
    )
}