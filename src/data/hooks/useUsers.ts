import { useState } from 'react';

import User from '../../core/User';
import UserRepository from "../../core/UserRepository";
import CollectionUser from '../../db/CollectionUser';


export default function useUsers(){
    const repo: UserRepository = new CollectionUser()
    const [userLogged, setUserLogged] = useState<User>(User.empty())
    

    async function saveUser(user: User){
        await repo.save(user)
    }

    async function updateUser(user: User){
        await repo.update(user)
    }
    
    async function getOneUser(user: User){
        await repo.getOne(user).then(setUserLogged)
    } 
      
    return{
        userLogged,
        setUserLogged,
        saveUser,
        updateUser,
        getOneUser,
    }

}