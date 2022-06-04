import firebase from '../firebase/config'
import { createContext, useEffect, useState } from "react";
import route from 'next/router';
import Cookies from 'js-cookie';

import User from '../model/User';


interface AuthContextProps{
    user?: User,
    loading?: boolean,
    loginNormal?: (email: string, password:string) => Promise<void>,
    registerUser?: (email: string, password:string) => Promise<void>,
    loginGoogle?: () => Promise<void>,
    logoutGoogle?: () => Promise<void>,
}

const AuthContext= createContext<AuthContextProps>({
    
})

//deixando os dados da forma como a gente quer receber
async function normalizeUser(userFirebase: firebase.User): Promise<User>{
    const token = await userFirebase.getIdToken() // espera pegar o token
    return {
        uid: userFirebase.uid,
        name: userFirebase.displayName,
        email: userFirebase.email,
        token,
        provider: userFirebase.providerData[0].providerId,
        imgUrl: userFirebase.photoURL
    }
}

// salvando os dados do usuário em um cookie para nao perde-los no refresh da page...
function handleCookie(logged: boolean){
    if(logged){
        Cookies.set('admin-party-halls-cod3r-auth', logged, {
            expires: 7 // os dados vão durar 7 dias
        })
    }
    else{
        Cookies.remove('admin-party-halls-cod3r-auth') // se tiver deslogado, exclui os dados
    }
}


export function AuthProvider(props){
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(null)

    async function configSession(userFirebase){
        
        if(userFirebase?.email){
            const userLogged = await normalizeUser(userFirebase)
            await setUser(userLogged) 
            handleCookie(true)
            setLoading(false)
            return userLogged.email //será usado para detectar quando o usuario mudou
        }else{
            setUser(null)
            handleCookie(false)
            setLoading(false)
            return false
        }
    }

    //login normal with email and password
    async function loginNormal(email, password){ 
        try{
            setLoading(true)
            const resp = await firebase.auth()
                .signInWithEmailAndPassword(email, password)

            await configSession(resp.user)
            route.push('/') 
        } finally {
            setLoading(false)
        }           
    }

    //função para registrar novo user com email e senha
    async function registerUser(email, password){ 
        try{
            setLoading(true)
            const resp = await firebase.auth()
                .createUserWithEmailAndPassword(email, password)

            await configSession(resp.user)
            
            route.push('/') 
        } finally {
            setLoading(false)
        }           
    }



    async function loginGoogle(){ 
        try{
            setLoading(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )

            await configSession(resp.user)
            route.push('/') 
        } finally {
            setLoading(false)
        }           
    }

    async function logoutGoogle(){
        try{
            setLoading(true)
            await firebase.auth().signOut();
            await configSession(null) // limpa as info do user
        } finally{
            setLoading(false)
        }        
    }


    useEffect(() =>{
        //esse metodo vai checar se ja existe um usuário mudou, em relaçaõ ao q estava logado antes
        //se tiver mudado ele chama a config session para passar os dados dnv(do user q logou a 1 vez)
        if(Cookies.get('admin-party-halls-cod3r-auth')){ //ter ctz q ja logou em algum momento
            const cancel = firebase.auth().onIdTokenChanged(configSession)
            return () => cancel() //quando componente for desmontado ele para de observar se mudou id /\
        }else{
            setLoading(false)
        }      
    }, [])


    return (
        <AuthContext.Provider value={{
            user,
            loading,
            loginNormal,
            registerUser,
            loginGoogle,
            logoutGoogle
        }}>
            {props.children}
        </AuthContext.Provider  >
    )
}



export default AuthContext;
