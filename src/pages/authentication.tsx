import {Flex, Text, Button, Box, Image} from "@chakra-ui/react"

import { useState , useEffect} from "react"
import AuthInput from "../components/auth/AuthInput";
import { iconGoogle } from "../components/Icons"
import * as errorAuth from "../components/auth/ErrorsAuthMsg";
import useAuth from "../data/hooks/useAuth";



export function getStaticProps(){
    return { props:{} }
  }


export default function Authetication() {
    const {registerUser, loginNormal, loginGoogle} = useAuth()

    const [ screen, setScreen] = useState<'Login' | 'Register'>('Login')
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')
    const [ confirmPassword, setConfirmPassword] = useState('')
    const [ notRenderConfirm, setNotRenderConfirm] = useState<boolean>(false)
    const [ msgError, setMsgError] = useState<string>(null)
    

    const handlSendData = async() =>{
        try{
            if(screen=== 'Login') await loginNormal(email, password)
            else {
                if(password === confirmPassword) await registerUser(email, password)
                else setMsgError(errorAuth.notSamePassword)
            }
        } catch(e){
            setMsgError(e?.message ?? errorAuth.unknowError)
        }
       
    }

    useEffect(() =>{
        if(screen === 'Register') setNotRenderConfirm(false) 
        else setNotRenderConfirm(true)
    }, [screen])

    return(
        <Flex 
            h='100vh'
            alignItems='center' justifyContent='center' 
            backgroundColor='gray.300'
        >   
            <Box>
                <Image
                    h='100vh' w='full' objectFit='cover' display={{base: 'none', md: 'block' }}
                    src="https://mothershiphire.com/wp-content/uploads/2019/03/QOH-Room2-HighRes-7K8B5226-900x510.jpg"
                    alt="Imagem da Tela de Autenticação"
                />
            </Box>
            
            <Box w={{ base: 'full', md: '60%', lg:"40%"}} h='100vh' ml={1} bgColor='teal.600' p={10} >
                <Text
                    fontFamily='bold' fontSize='3xl' mb={5}
                    color='#dfe1e6'
                >
                    {screen === 'Login' ? 'Entre com a sua conta' : 'Cadastra-se na plataforma'}
                </Text>


                <errorAuth.ErrorMsg mensage={msgError} /> 
      

                <AuthInput
                    label="Email"
                    value={email}
                    type='email'
                    changeValue={setEmail}
                    required // passando essa prop adidionada no componente = campo obrigatorio
                />

                <AuthInput
                    label="Senha"
                    value={password}
                    type='password'
                    changeValue={setPassword}
                    required
                />

                <AuthInput
                    label="Confirmar Senha"
                    value={confirmPassword}
                    type='password'
                    changeValue={setConfirmPassword}
                    required
                    notRender={notRenderConfirm} // quando for tela de login, passa true por exemplo
                />

                <Button
                    w='full' rounded='lg' px={4} py={3} mt={10}
                    color='gray.100'
                    bgColor='blue.900' _hover={{backgroundColor: 'blue.600'}}
                    onClick={() => handlSendData()}
                >
                    {screen === 'Login' ? 'Entrar' : 'Cadastrar'}
                </Button>

                <Button
                    w='full' rounded='lg' px={4} py={3} mt={5}
                    color='gray.100'
                    bgColor='red.500' _hover={{backgroundColor: 'red.400'}}
                    onClick={loginGoogle}
                >
                    Entrar com Google                 
                    <i style={{marginLeft: 5}}>{iconGoogle}</i>
                </Button>
            

            
                {screen === 'Login' ? 
                    <Text mt={3}>
                        Novo por aqui?
                        <a 
                            style={{color:'#2a2773', marginLeft: 5, cursor: 'pointer'}}
                            onClick={() => {setScreen('Register'); setMsgError(null)}}
                        >
                            Crie uma conta grautitamente.
                        </a>
                    </Text>
                :
                    <Text mt={3} ml={3}>
                        Já tem uma conta?
                        <a 
                            style={{color:'#2a2773' , marginLeft: 5, cursor: 'pointer'}}
                            onClick={() => setScreen('Login')}
                        >
                            Faça login aqui.
                        </a>
                    </Text>              
                }
            </Box>
        </Flex>
    )
}