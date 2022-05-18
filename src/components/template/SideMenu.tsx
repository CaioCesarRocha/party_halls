import {Box, List, Menu, Flex} from "@chakra-ui/react";

import { ThemeColors } from "../../pages/tema/themeColors";
import MenuItem from "./MenuItem";
import Logo from './Logo';
import  *  as icons from "../Icons";
import useAuth from "../../data/hooks/useAuth";

export default function SideMenu (){
    const themeColors = ThemeColors();

    const { logoutGoogle } = useAuth();


    return(
        <Menu >
            <Flex 
                flexDirection='column' 
                color={themeColors.bgMenu} 
            >
                <Box
                    display='flex' flexDirection="column" 
                    alignItems='center' justifyContent='center'
                    bgGradient='linear(to-r, #cb20fa, #7818f5)'
                    cursor='pointer'
                    h={20} w={20}
                >
                    <Logo/>
                </Box>

        
                <List color={themeColors.textBaseColor}>
                    <MenuItem url="/spaces" text="Espaços" icon={icons.iconSpace}/>
                    <MenuItem url="/" text="Clients" icon={icons.iconClients}/>
                    <MenuItem url="/providers" text="Fornecedores" icon={icons.iconProviders}/>
                    <MenuItem url="/schedules" text="Agendamento" icon={icons.iconSchedules}/>             
                </List>

                <List flex={1} position='absolute' bottom={0} color={themeColors.exitItemColor} >
                    <MenuItem 
                        text="Sair" 
                        icon={icons.iconOut}
                        exit={true}
                        onClick={logoutGoogle}
                    />
                </List>            
            </Flex>
        </Menu>
    )
}