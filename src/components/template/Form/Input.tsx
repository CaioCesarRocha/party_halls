
import {FormLabel, Input} from "@chakra-ui/react";

interface propsInput{
    nameHMTLFOR: string,
    nameField:string,
    type: string,
    value: string,
    onChange?: () => void
}


export default function InputForm(props: propsInput) {

    return(
        <>
            <FormLabel htmlFor={props.nameHMTLFOR}>
                {props.nameField}
            </FormLabel>

            <Input
                size='md'
                type={props.type}
                value={props.value}
                onChange={props.onChange}
            />
        </>
    )
}