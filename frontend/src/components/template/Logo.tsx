import {Box, Image} from "@chakra-ui/react";
import Link from 'next/link';

interface logoProps{
    url: string
}

export default function Logo(props: logoProps){
    const urlImg ='https://pngroyale.com/wp-content/uploads/2021/12/house-party-png-Png-Download-5-300x300.png' 
    
    return (
        <Box
            display='flex' flexDirection="column" 
            alignItems='center' justifyContent='center'
            h={14} w={14} borderRadius='full'
            
        >   
            <Link href={props.url}>
                <Image 
                    src={urlImg}
                    alt='Logo App' 
                    boxSize='98px'
                />
            </Link>

        </Box>
    )
}