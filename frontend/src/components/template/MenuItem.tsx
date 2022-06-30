import {Text, List , ListItem, } from "@chakra-ui/react";
import { ThemeColors } from "../../pages/services/tema/themeColors";
import Link from 'next/link';

interface MenuItemProps { 
    text: string,
    icon: any,
    url?: string, 
    exit?: boolean,
    onClick?: (event: any) => void //onClick sera um evento do tipo any e de retorno void
}



export default function MenuItem (props: MenuItemProps){

    const themeColors = ThemeColors();


    function renderLink(){
        return(
            <a style={{
                display:'flex', flexDirection: 'column',  
                justifyContent: 'center', alignItems: 'center', 
                height: 80, width: 80,
            }}> 
                {props.icon}
                
                {props.exit ?
                        <Text 
                            fontSize='xs'
                            color={themeColors.exitItemColor}
                            _hover={{color: themeColors.exitHoverItem}}
                        >
                            {props.text}
                        </Text>               
                    :
                        <Text                       
                            fontSize='xs'
                            color={themeColors.textBaseColor} 
                            _hover={{color: themeColors.textHoverColor}}                     
                        >
                            {props.text}
                        </Text>
                }       
            </a>
        )
    }



    return(
        <List>
            <ListItem 
                _hover={{background: themeColors.bgHoverColor}} 
                cursor="pointer"
                onClick={props.onClick}
            >   

                {props.url ? (
                    <Link href={props.url}> 
                        {renderLink()}
                    </Link>
                    ):(
                    renderLink()
                )}          
            </ListItem>
        </List>
    )
}
