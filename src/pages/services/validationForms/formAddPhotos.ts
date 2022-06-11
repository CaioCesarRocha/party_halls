import * as Yup from "yup";

export const schema = Yup.object().shape({ //validation com Yup
    url: Yup.string().required('O campo Nome é obrigatório'),
    description: Yup.string().required('Uma descrição é obrigatória'),  
})


export const initialValues = { url:'', description: ''};