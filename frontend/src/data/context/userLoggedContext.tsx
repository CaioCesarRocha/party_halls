import { createContext, useReducer } from "react";
import {userLoggedState, userLoggedInitialState, ActionType, UserLoggedReducer} from '../reducers/userLogged'

type initialStateType = {
    userLogged: userLoggedState
}

type ContextType = {
    stateUserLogged: initialStateType,
    dispatch: React.Dispatch<any>,
}

const initialState = {
    userLogged: userLoggedInitialState
}


export const ContextUserLogged =  createContext<ContextType>({
    stateUserLogged: initialState,
    dispatch: () => null
});


const mainReducer = (stateUserLogged:initialStateType, action: ActionType) => ({
    userLogged: UserLoggedReducer(stateUserLogged.userLogged, action),   
});

export const ContextUserLoggedProvider = ({ children }) =>{
    const [stateUserLogged, dispatch] = useReducer(mainReducer, initialState)
    return (
        <ContextUserLogged.Provider value={{stateUserLogged, dispatch}}>
            {children}
        </ContextUserLogged.Provider>
    );
}