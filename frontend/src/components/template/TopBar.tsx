import {Flex} from "@chakra-ui/react";

import Title from './Title'
import ButtonChangeTheme from './Buttons/ButtonChangeTheme';
import AvatarUser from "./AvatarUser";

interface TopBarProps{
    title: string,
    subtitle: string,
}


export default function TopBar(props: TopBarProps){

    return(        
        <Flex >   
            <Title
                title= {props.title}
                subtitle={props.subtitle}
            />
            <Flex flex={1} justifyContent='end' alignItems={{base: 'start', sm:' center'}} >
                <ButtonChangeTheme/>   
                <AvatarUser/>                       
            </Flex>
        </Flex>
    )
}