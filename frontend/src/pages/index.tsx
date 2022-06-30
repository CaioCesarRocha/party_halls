
import {Text, Box, Image, Icon} from "@chakra-ui/react";
import Layout from "../components/template/Layout"

import * as icon from '../components/Icons'
import { ThemeColors } from "./services/tema/themeColors";

export function getStaticProps(){
  return { props:{} }
}

export default function Home() {
  const themeColors = ThemeColors();

  //https://casalucci.com.br/casamento/wp-content/uploads/2021/08/01-Espaco-Casa-Lucci-Morumbi-1024x683.png
  
  return (
    <Layout 
      title="Seja bem vindo"
      subtitle=""
    >   
      <Box display={{base: 'none', lg: 'block'}}>
        <video 
          className="videoHome"
          autoPlay
          style={{ width: '100%',maxWidth: '100%', }}
        >
          <source
            type="video/mp4"
            src='/videos/video_home.mp4'
          />
        </video>
      </Box>
                     
      <Image  
        position='absolute' 
        display={{base: 'none', lg: 'block'}}     
        w={{base:'20', md:'24', lg:'36' }} h={{base: '20', md:'24', lg:'36' }}    
        src={themeColors.logoEvento}
        alt='Logo do Evento'
      />

      <Box 
        w='100%' display='flex' flexDirection='column' 
        justifyContent='center' alignItems='center' margin='0 auto' 
      >
        <Text 
            textAlign='center' margin='0 auto' mt={{base:2, lg:8}}
            fontSize={{base: '2xl', sm: '4xl', md:'5xl'}} fontFamily='heading' 
          >
          Bem vindo ao House Parties
        </Text>
        <Text 
          fontSize={{base: 'xl', sm:'2xl'}} justifyItems='stretch'
          mt={8} margin='8 auto' w={{lg: '4xl'}}
        > 
            <Icon color='green.400' mr={2} mb={1}> {icon.iconBallons} </Icon>
            Somos uma empresa especializada em comemorações festivas sempre buscando oferecer o melhor pra você.
          <br/><br/>
            <Icon color='green.400' mr={2} mb={1}> {icon.iconMenu} </Icon>
            Você pode navegar pelo nosso site utilizando o Menu ao lado.
          <br/><br/>
            <Icon color='green.400' mr={2} mb={1}> {icon.iconMoney} </Icon>
            Confira os espaços disponíveis para festas, siga nossos parceiros e aproveite para fazer o orçamento.
          <br/><br/>
            <Icon color='green.400' mr={2} mb={1}> {icon.iconPeople} </Icon>
            Contamos com uma equipe com mais de 40 funcionários, entre em contato para tirar as dúvidas!
        </Text>
      </Box>
     
    </Layout>
  )
}
