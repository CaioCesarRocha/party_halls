import {Flex} from "@chakra-ui/react";

import Title from './Title'
import ButtonChangeTheme from './ButtonChangeTheme';
import AvatarUser from "./AvatarUser";

interface TopBarProps{
    title: string,
    subtitle: string,
}


export default function TopBar(props: TopBarProps){

    return(
        
        <Flex>   
            <Title
                title= {props.title}
                subtitle={props.subtitle}
            />
            <Flex flex={1} justifyContent='end' alignItems='center'>
                <ButtonChangeTheme/>
                <AvatarUser/>
            </Flex>

        </Flex>
    )
}