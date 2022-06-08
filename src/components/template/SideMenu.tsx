import {Box, List, Menu, Flex} from "@chakra-ui/react";
import { useContext} from "react"

import { ThemeColors } from "../../pages/services/tema/themeColors";
import MenuItem from "./MenuItem";
import Logo from './Logo';
import  *  as icons from "../Icons";
import useAuth from "../../data/hooks/useAuth";
import {ContextUserLogged} from '../../data/context/userLoggedContext'

export default function SideMenu (){
    const themeColors = ThemeColors();

    const { logoutGoogle } = useAuth();

    const {stateUserLogged, dispatch} = useContext(ContextUserLogged);
    
    function logout(){
        dispatch({
            type: 'NEW',
            payload:{
                newUser:{
                  id: '',
                  email: '',
                  nickname:  '',
                  avatar: ''
                }
            }
        })
        logoutGoogle()
    }

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
                    <MenuItem url="/location" text="Localização" icon={icons.iconLocation}/> 
                    <MenuItem url="/budget" text="Orçamento" icon={icons.iconBudget}/>            
                </List>

                <List 
                    color={themeColors.exitItemColor} bgColor='blackAlpha.400'
                >
                    <MenuItem 
                        text="Sair" 
                        icon={icons.iconOut}
                        exit={true}
                        onClick={() => logout()}
                    />
                </List>            
            </Flex>
        </Menu>
    )
}