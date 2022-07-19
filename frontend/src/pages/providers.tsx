import {Flex, Text, } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Layout from "../components/template/Layout"
import ButtonBasic from "../components/template/Buttons/ButtonBasisc"
import Section from "../components/template/Section";
import { ThemeColors } from "./services/tema/themeColors";


export async function getStaticProps(){
  const resp = await fetch('http://localhost:3001/api/providers')
  const providers = await resp.json()

  return { 
    props: {providers} 
  }
}


export default function Providers(props) {
  const themeColors = ThemeColors();
  const [title, setTitle] = useState<string>('Casamento')
  const [seletctedProviders, setSelectedProviders] = useState<any[]>([]);


  function renderProviders(){
    if(seletctedProviders.length === 0) {
      return (
        <Text textAlign='center'mt={10}fontSize='4xl' color={themeColors.textBaseColor}>
          Nenhum fornecedor informado.
        </Text> 
      )
    }
    else{
      return seletctedProviders?.map(provider =>{
        return(      
          <Section
            key={provider.id}
            name={provider.name}
            description={provider.description}
            contact={provider.contact}
            address={provider.address}
            imgCompany=""
          />
        )
      })
    }
  }

  useEffect(() =>{
    const newList: any[] = []
    props.providers?.map(provider =>{
      if(provider.type === title)  newList.push(provider) 
    })
    setSelectedProviders(newList)
  }, [title])



  return (
    <Layout 
      title="Fornecedores"
      subtitle="Conheça os nossos parceiros que colaboram para fornecer as melhores experiências para você."
    > 
      <Flex 
        flexGrow={1} flexDirection={{base: 'column', md:'row'}} w='100%'
        justifyContent='center' alignItems='start' 
      > 
        <Flex flexDirection={{base:'row'}}>
          <ButtonBasic
            info='Casamento'
            onClick={() => setTitle('Casamento')}
          />

          <ButtonBasic
            info='Festa Infantil'
            onClick={() => setTitle('Festa Infantil')}
          />         
        </Flex>

        <Flex flexDirection={{base:'row'}}>
            <ButtonBasic
              info='Especial 15 anos'
              onClick={() =>  setTitle('Especial 15 anos')}
            />
            <ButtonBasic
              info='Formatura'
              onClick={() =>  setTitle('Formatura')}
            />
        </Flex>

        <ButtonBasic
          info='Corporativo'
          onClick={() =>  setTitle('Corporativo')}
        />
      </Flex>

      <Text m={4} fontSize='2xl' color={themeColors.textBaseColor}>
        {title}
      </Text>
        
      {renderProviders()}

    </Layout>
  )
}