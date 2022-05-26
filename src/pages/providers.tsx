import {Flex, Text, } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import Layout from "../components/template/Layout"
import ButtonBasic from "../components/template/Buttons/ButtonBasisc"
import Section from "../components/template/Section";

import * as teste from '../components/testes';
import { ThemeColors } from "./services/tema/themeColors";



export default function Providers() {
  const themeColors = ThemeColors();
  const [title, setTitle] = useState<string>('Casamento')
  const [providers, setProviders] = useState<any[]>([]);


  async function getProviders(provider: string){
    setTitle(provider)    
  }

  useEffect(() =>{
    const type: any[] = []
    if(title === 'Casamento') type.push(...teste.casamento) 
    else if(title === 'Formatura') type.push(...teste.Formatura) 
    else if(title === 'Festa Infantil') type.push(...teste.Festa_Infantil) 
    else setProviders([])
    
    setProviders(type)
  }, [title])

  return (
    <Layout 
      title="Fornecedores"
      subtitle="Conheça os nossos parceiros que colaboram para fornecer as melhores experiências para você."
    > 
      <Flex 
        flexGrow={1} flexDirection={{base: 'column', sm:'row'}} w='100%'
        justifyContent='center' alignItems='start' 
      > 
        <Flex flexDirection={{base: 'column', md:'row'}}>
          <ButtonBasic
            info='Casamento'
            onClick={() => getProviders('Casamento')}
          />

          <ButtonBasic
            info='Festa Infantil'
            onClick={() => getProviders('Festa Infantil')}
          />         
        </Flex>

        <Flex flexDirection={{base: 'column', md:'row'}}>
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


      {providers.map(provider =>{
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
      })}

      {providers.length === 0 ? 
        <Text textAlign='center'mt={10}fontSize='4xl' color={themeColors.textBaseColor}>
          Nenhum fornecedor informado.
        </Text> 
      : 
        null
      }
    </Layout>
  )
}