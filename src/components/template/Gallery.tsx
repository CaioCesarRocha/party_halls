import {Flex, Text, Box, Container} from "@chakra-ui/react";
import Imgix from "react-imgix";


export type typeGallery ={
    title: 'INTERN' | 'EXTERN' 
}

export default function Gallery(props: typeGallery) {

    const ImagesIntern = [
        {id: 1, image: 'https://picsum.photos/300/300'},
        {id: 2, image: 'https://picsum.photos/300/300'},
        {id: 3, image: 'https://picsum.photos/300/300'},
        {id: 4, image: 'https://picsum.photos/300/300'},
        {id: 5, image: 'https://picsum.photos/300/300'},
        {id: 6, image: 'https://picsum.photos/300/300'},
        {id: 7, image: 'https://picsum.photos/300/300'},
        {id: 8, image: 'https://picsum.photos/300/300'},
    ]

    const ImagesExtern = [
        {id: 1, image:'https://picsum.photos/720/720'},
        {id: 2, image:'https://picsum.photos/720/720'},
        {id: 3, image:'https://picsum.photos/720/720'},
        {id: 4, image:'https://picsum.photos/720/720'},
        {id: 5, image:'https://picsum.photos/720/720'},
        {id: 6, image:'https://picsum.photos/720/720'},
        {id: 7, image:'https://picsum.photos/720/720'},
        {id: 8, image:'https://picsum.photos/720/720'},
    ]


    return(     
        <Flex
            display='grid' gridTemplateColumns='repeat(auto-fill, minmax(20rem, 1fr))'
            mt={5} 
        >          
            {props.title === 'INTERN' ?                  
                ImagesIntern.map((img) => (
                    <Container m={0} p={2} key={img.id}>                 
                        <Imgix                           
                            sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                            src={img.image}
                            imgixParams={{
                                fit: "crop",
                                fm: "jpg"
                            }}                               
                            width={500}
                            height={500}
                        />
                    </Container>
                ))                        
            :
                ImagesExtern.map((img) => (
                    <Container m={0} p={2} key={img.id}>               
                        <Imgix     
                            sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                            src={img.image}
                            title={'Carrousel'}
                            imgixParams={{
                                fit: "crop",
                                fm: "jpg"
                            }}
                            width={500}
                            height={500}
                        />                  
                    </Container>
                ))            
            }      
        </Flex>           
    )  
}

