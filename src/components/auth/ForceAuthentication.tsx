import {Flex} from "@chakra-ui/react"
import Head from "next/head";
import Script from "next/script";
import Image from 'next/image'
import router from "next/router";

import loadingGIF from '../../../public/Images/loadingGIF.gif';
import useAuth from "../../data/hooks/useAuth";


export default function ForceAuthentication(props) {

    const {loading, user} = useAuth();

    
    
    function renderContent(){  //se nao tiver o dado do user no cookie, ent tem q logar denovo.
        return (
            <>  
               <Script
                    id="handleLogin"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{ //para rodar um html aqui
                        __html:`
                            if(!document.cookie?.includes("admin-party-halls-cod3r-auth")){
                                window.location.href = "/authentication"
                            }
                        `
                    }}
                />
    
                {props.children}
            </>
        )
    }

     
    function renderLoading(){
        return (
            <Flex
                justify='center' alignItems='center'  h='100vh'
            >
                <Image src={loadingGIF} alt='Carregando tela' />
            </Flex>
        )
    }


    if(!loading && user?.email){ //se tiver carregando e usuário setado entao renderiza conteudo
           
        return renderContent();
    }else if(loading){
        return renderLoading(); //se tiver só carregando entao libera o gif Loading...
    }
    else{
        console.log('passei no errado DASTA FORCE')
        router.push('/authentication'); //se nao tiver carregando, entao tem q logar novamente
        return null
    }
}