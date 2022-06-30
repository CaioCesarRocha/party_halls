import {Text, Box,} from "@chakra-ui/react";
import Layout from "../components/template/Layout"
import {AspectRatio} from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout 
      title="Localização"
      subtitle="Confira a nossa localização abaixo!"
    >

      <AspectRatio ratio={{base: 9/16, md: 21/9}} mb={2}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d480349.38604555617!2d-44.37570691432562!3d-19.85139189149332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690579661f0d5%3A0xa3e72bab75e2fab6!2sGin%C3%A1sio%20Mineirinho!5e0!3m2!1spt-BR!2sbr!4v1653603351707!5m2!1spt-BR!2sbr" />
      </AspectRatio>



    </Layout>
  )
}