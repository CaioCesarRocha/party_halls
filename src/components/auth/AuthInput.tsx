import {Input, Box} from "@chakra-ui/react"


interface AuthInputProps{
    label: string,
    value: any,
    required?: boolean,
    notRender?: boolean,
    type?: 'text' | 'password' | 'email'   
    changeValue: (newValue: any) => void
}

export default function AuthInput(props: AuthInputProps){

    return props.notRender ? null : (
       <Box mt={4}>
            <label style={{fontFamily:'bold', color:'#dfe1e6'}}> 
                {props.label} 
            </label>

            <Input
                rounded='lg'
                focusBorderColor="blue.900" color="gray.300" errorBorderColor="crimson"

                type={props.type ?? 'text'} //se nao passar o type, será  do tipo text 
                value={props.value}
                required={props.required}
                onChange={e => props.changeValue?.(e.target.value)} // se mudou valor entao passa o newvalue
            />
       </Box>
    )
}