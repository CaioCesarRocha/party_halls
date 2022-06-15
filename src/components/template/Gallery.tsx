import {Flex, Container, Image} from "@chakra-ui/react";


export type typeGallery ={
    title: 'INTERN' | 'EXTERN', 
    spacesIntern: any[],
    spacesExtern: any[]
}

export default function Gallery(props: typeGallery) {

    return(     
        <Flex
            display='grid' gridTemplateColumns='repeat(auto-fill, minmax(20rem, 1fr))'
            mt={5} 
        >          
            {props.title === 'INTERN' ?                  
                props.spacesIntern?.map((img) => (
                    <Container m={0} p={2} key={img.id}>                 
                        <Image
                            sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                            w={{base:250, sm:400}} h={{base:230, sm:350}}
                            src={img.image}
                            alt="Foto do espaço"
                        />
                    </Container>
                ))                        
            :
                props.spacesExtern?.map((img) => (
                    <Container m={0} p={2} key={img._id}>               
                         <Image
                            sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                            w={{base:250, sm:400}} h={{base:230, sm:350}}
                            src={`/uploads/${img.url}`}
                            alt="Foto do espaço"
                        />           
                    </Container>
                ))            
            }      
        </Flex>           
    )  
}

