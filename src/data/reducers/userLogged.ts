

export type UserLogged = {
    id: string,
    email: string, 
    nickname: string,
    avatar: string
}

export type userLoggedState = {
    user: UserLogged
}

export type ActionType = {
    type: string
    payload?: {
        newUser?: UserLogged,
    }
}

export const userLoggedInitialState: userLoggedState = {
    user: { id: '', email: '', nickname: '', avatar: ''}
};

export const UserLoggedReducer = (stateUserLogged: userLoggedState, action: ActionType) => {
    switch(action.type){ 
        case 'NEW':
            if(action.payload?.newUser) {// só passa daqui se existir um name e img]
                const userLogged = {...stateUserLogged}
                const newUser = action.payload?.newUser

                userLogged.user.id = newUser.id
                userLogged.user.email = newUser.email
                userLogged.user.nickname = newUser.nickname
                userLogged.user.avatar = newUser.avatar  

                return userLogged;             
            }       
        break;
    }
    return stateUserLogged;
}
