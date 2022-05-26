import {Box, List, Menu, Flex} from "@chakra-ui/react";

import { ThemeColors } from "../../pages/services/tema/themeColors";
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
                bgColor={themeColors.bgMenu}
                position='absolute'
            >
                <Box
                    display='flex' flexDirection="column" 
                    alignItems='center' justifyContent='center'
                    bgGradient='linear(to-r, #cb20fa, #7818f5)'
                    cursor='pointer'
                    h={20} w={20}
                >
                    <Logo  url="/" />
                </Box>

        
                <List color={themeColors.textBaseColor} >
                    <MenuItem url="/spaces" text="Espaços" icon={icons.iconSpace}/>                  
                    <MenuItem url="/providers" text="Fornecedores" icon={icons.iconProviders}/>
                    <MenuItem url="/schedules" text="Agendamento" icon={icons.iconSchedules}/> 
                    <MenuItem url="/budget" text="Orçamento" icon={icons.iconBudget}/>            
                </List>

                <List 
                    color={themeColors.exitItemColor} bgColor={themeColors.bgMenu}
                >
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