import * as Yup from "yup";

export const schema = Yup.object().shape({ //validation com Yup
    name: Yup.string().required('O campo Nome é obrigatório'),
    company: Yup.string(),
    contact: Yup.number().required('Informe o telefone de contato').min(8, 'O telefone tem mais de 8 números'),
    desiredDate: Yup.date().required('Informe a data desejada').min(10, 'Data inserida não existe, um exemplo de data certa é 10/10/2020'),
    numberParticipants: Yup.number().required('Informe o número aproximado de participantes').max(420, 'Número maximo de participantes é 320'),
    typeParty: Yup.string().required('Selecione o tipo de festa desejado'),
    buffet: Yup.boolean(),
    decoration: Yup.boolean(),
    description: Yup.string(),  
})


export const initialValues = { name: '', company: '', contact: '', desiredDate: '', 
numberParticipants: '', typeParty: 'Casamento' , buffet: true, decoration: true, 
description: ''};