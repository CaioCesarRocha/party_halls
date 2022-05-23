
import {FormLabel, Input} from "@chakra-ui/react";

interface propsInput{
    nameHMTLFOR: string,
    nameField:string,
    nameInput:string,
    type: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}


export default function InputForm(props: propsInput) {

    return(
        <>
            <FormLabel htmlFor={props.nameHMTLFOR} mt={2}>
                {props.nameField}
            </FormLabel>

            <Input
                name={props.nameInput}
                size='md'
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
        </>
    )
}