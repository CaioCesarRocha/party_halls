
import {Flex, Box } from "@chakra-ui/react";

import { ThemeColors } from "../../pages/tema/themeColors";
import SideMenu from './SideMenu';
import TopBar from './TopBar';
import Content from './Content';
import ForceAuthentication from '../auth/ForceAuthentication';

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
                h='calc(100vh)' 
            >
                <SideMenu/>
                <Box 
                    flexDirection='column' 
                    w='full'  p={5}           
                    bg={themeColors.bgBaseColor}
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
        </ForceAuthentication>
    )
}