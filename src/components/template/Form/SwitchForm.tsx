import {FormLabel, Flex, Switch, Text} from "@chakra-ui/react";

interface propsSwitch{
    nameHMTLFOR: string,
    nameField:string,
    nameSwitch: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function SwitchForm(props: propsSwitch) {

    return(
        <>
            <Flex flexDirection='column'> 
                <FormLabel htmlFor={props.nameHMTLFOR}> 
                    {props.nameField}
                </FormLabel>
                <Flex 
                    flexDirection='row' 
                    justifyContent="center" alignItems='center' 
                >     
                        
                    <Switch 
                        size='md'
                        colorScheme='teal'
                        defaultChecked={true} 
                        name={props.nameSwitch}                   
                        onChange={props.onChange}
                    />                                                       
                </Flex> 
            </Flex>
        </>
    )
}