import { useState, useEffect } from 'react';

import useAuth from './useAuth';
import User from '../../core/User';
import UserRepository from "../../core/UserRepository";
import CollectionUser from '../../db/CollectionUser';


export default function useUsers(){
    const repo: UserRepository = new CollectionUser()
    const {user} = useAuth()
    const [userLogged, setUserLogged] = useState<User>(User.empty())
    const [noCreate, setNoCreate] = useState<boolean>(false)


    /*useEffect(() =>{
        const actualUser = new User(user?.uid, user?.email, user?.name)
        setUserLogged(actualUser)
      }, [])*/

    async function saveUser(user: User){
        await repo.save(user)
    }
    
    async function updateUser(user: User){
        await repo.update(user)
    }

    async function getOneUser(email: string){
        await repo.getOne(email).then(setUserLogged)
        if(userLogged.email !== ''){
            console.log('FIZ TRUE', userLogged.email)
            setNoCreate(true)
        }
    } 
      
    return{
        userLogged,
        noCreate,
        saveUser,
        updateUser,
        getOneUser,
    }

}