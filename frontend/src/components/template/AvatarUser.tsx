import {Image} from "@chakra-ui/react"
import Link from 'next/link'
import { useEffect,  useContext } from "react"

import useAuth from "../../data/hooks/useAuth"
import useUsers from "../../data/hooks/useUsers"
import User from "../../core/User"
import {ContextUserLogged} from '../../data/context/userLoggedContext'

export default function AvatarUser() {
    const {user} = useAuth()
    const handleUsers = useUsers()
    const {stateUserLogged, dispatch} = useContext(ContextUserLogged);

    useEffect(() =>{
        if(!stateUserLogged.userLogged.user.avatar) {
            var actualUser = new User(user?.email, user?.name,'/images/randomUser.png')
            if(user?.imgUrl) actualUser = new User(user?.email, user?.name, user.imgUrl)
            if(!user?.name) actualUser = new User(user?.email, 'Insira um nome', '/images/randomUser.png') 
            handleUsers.getOneUser(actualUser)
        }
    }, [])
  


    return(
        <Link href="/perfil">
            <Image
                h={10} w={10} rounded='full' ml={2}
                cursor='pointer'
                src={stateUserLogged.userLogged.user.avatar}
                alt='Avatar do usuário'
            />
        </Link>
    )
}