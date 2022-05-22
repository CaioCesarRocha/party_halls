
import {Text, } from "@chakra-ui/react";


export default function ErrorForm(props) {

    return(
       <Text
            color='red.800'
       >
           {props.children}
       </Text>
    )
}