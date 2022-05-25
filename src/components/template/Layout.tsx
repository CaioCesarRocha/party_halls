
import {Flex, Box } from "@chakra-ui/react";

import { ThemeColors } from "../../pages/tema/themeColors";
import SideMenu from './SideMenu';
import TopBar from './TopBar';
import Content from './Content';
import ForceAuthentication from '../auth/ForceAuthentication';
import BottomBar from './BottomBar';

interface LayoutProps {
    title: string, 
    subtitle: string,
    children?:any
}

export default function Layout (props: LayoutProps){

    const themeColors = ThemeColors();
    
    return(
        <ForceAuthentication> 
            <Flex
            h={{base:'93.3vh', xl:'88.5vh'}}
                //h='93.3vh' 
                overflow='auto'
                bgColor={themeColors.bgBaseColor}
            >
                <SideMenu/>

                <Box 
                    flexDirection='column' 
                    w='full'  p={4}          
                    bgColor={themeColors.bgBaseColor}
                    ml={81}
                >
                    <TopBar
                        title={props.title}
                        subtitle={props.subtitle}
                    />

                    <Content>
                        {props.children}
                    </Content>                                                          
                </Box>      
            </Flex>

            <Box  
                bgColor={themeColors.bgBaseColor}
            >
                <BottomBar/>
            </Box>   
        </ForceAuthentication>
    )
}