import {Button} from "@chakra-ui/react";

interface propsButton {
    info: string,
    disable?: boolean,
    onClick: () => void,
}


const ButtonGalleryOpen = (props: propsButton) =>{

    return(
        <Button      
            colorScheme='blue'
            disabled={props.disable}
            onClick={props.onClick}
        >
            {props.info}
        </Button>
    )
}


export default ButtonGalleryOpen ;