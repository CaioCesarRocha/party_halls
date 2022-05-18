import {Box, Image} from "@chakra-ui/react";


export default function Logo(){
    return (
        <Box
            display='flex' flexDirection="column" 
            alignItems='center' justifyContent='center'
            h={14} w={14} borderRadius='full'
            
        >   
            <Image 
                src='https://pngroyale.com/wp-content/uploads/2021/12/house-party-png-Png-Download-5-300x300.png' 
                alt='Logo App' 
                boxSize='98px'
            />

        </Box>
    )
}