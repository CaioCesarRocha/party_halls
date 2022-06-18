import * as Yup from "yup";

export const schema = Yup.object().shape({ //validation com Yup
    description: Yup.string().required('Uma descrição é obrigatória').max(80),  
    typeSpace: Yup.string(),  
})


export const initialValues = { description: '', typeSpace: ''};