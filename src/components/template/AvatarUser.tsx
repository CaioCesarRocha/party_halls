import {Image} from "@chakra-ui/react"
import Link from 'next/link'
import useAuth from "../../data/hooks/useAuth"

export default function AvatarUser() {

    const {user} = useAuth()

    return(
        <Link href="/perfil">
            <Image
                h={10} w={10} rounded='full' ml={2}
                cursor='pointer'
                src={user?.imgUrl ?? '/images/randomUser.png'} //se nao tiver imagem usa a random
                alt='Avatar do usuário'
            />
        </Link>
    )
}