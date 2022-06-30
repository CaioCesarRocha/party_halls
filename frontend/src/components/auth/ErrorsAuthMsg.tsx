//mensagens  de erro para ser usada na autenticação
import {Box, Text, Icon} from "@chakra-ui/react"
import { iconError } from "../Icons"


export const notSamePassword = ('Confirmação de senha diferente.')

export const min6character = ('Senha deve ter no minimo 6 caracteres.')

export const wrongEmail = ('Nenhuma conta cadastrada neste e-mail.')

export const wrongPassword = ('Senha incorreta.')

export const sameEmail = ('Não foi possível cadastrar neste e-mail.')

export const unknowError = ('Erro desconhecido!')

interface ErrorMsgProps{
    mensage?: string
}


export const ErrorMsg = (props: ErrorMsgProps) =>{

    return(
        <div>
        
            {props.mensage ? 
                 <Box display='flex' bgColor='crimson' color='gray.100' p={2} rounded='lg'>
                    <Icon fontSize={25}>
                        {iconError}
                    </Icon>
                    
                    <Text ml={5}>
                        {props.mensage}
                    </Text>
                 </Box>           
            :
                null
            }
           
        </div>
        
    )
}


