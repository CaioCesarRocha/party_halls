import { useEffect, useState, useContext } from 'react';

import User from '../../core/User';
import UserRepository from "../../core/UserRepository";
import CollectionUser from '../../db/CollectionUser';
import {ContextUserLogged} from '../context/userLoggedContext'


export default function useUsers(){
    const repo: UserRepository = new CollectionUser()
    const [userLogged, setUserLogged] = useState<User>(User.empty())
    const {stateUserLogged, dispatch} = useContext(ContextUserLogged);
   

    async function setNewUser(user: User){
        dispatch({
            type: 'NEW',
            payload:{
                newUser:{
                  id: user?.id ?? '',
                  email: user?.email ?? '',
                  nickname: user?.nickname ?? '',
                  avatar: user?.avatar ?? ''
                }
            }
        })
    }

    async function saveUser(user: User){
        await repo.save(user)
    }

    async function updateUser(user: User){
        await repo.update(user).then(response =>{ setNewUser(response) })
    }
    
    async function getOneUser(user: User){
        await repo.getOne(user).then(response =>{ setNewUser(response) })
        
    } 
      
    return{
        userLogged,
        setUserLogged,
        saveUser,
        updateUser,
        getOneUser,
    }

}