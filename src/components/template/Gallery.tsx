import {Flex, Image, } from "@chakra-ui/react";

import Imgix from "react-imgix";

export type typeGallery ={
    title: 'INTERN' | 'EXTERN'
}

export default function Gallery(props: typeGallery) {


    const ImagesIntern = [
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
        'https://picsum.photos/300/300',
    ]

    const ImagesExtern = [
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
        'https://picsum.photos/720/720',
    ]

    return(
        <Flex
            display='grid' gridTemplateColumns='repeat(auto-fill, minmax(20rem, 1fr))'
            mt={5} 
        >
            {props.title === 'INTERN' ?           
                ImagesIntern.map((images, index) => (
                    <Imgix
                        key={index}
                        sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                        src={images}
                        imgixParams={{
                            fit: "crop",
                            fm: "jpg"
                        }}
                        width={500}
                        height={500}
                    />
                ))           
            :
                ImagesExtern.map((images, index) => (
                    <Imgix
                        key={index}
                        sizes="(min-width: 960px) 33vw, (min-width: 640px) 50vw, 100vw"
                        src={images}
                        imgixParams={{
                            fit: "crop",
                            fm: "jpg"
                        }}
                        width={500}
                        height={500}
                    />
                ))            
            }
            
        </Flex>
    )

   

}

/*
 
</Flex>*/