
export default class User {
    
    #id: string    //# server pra dizer que o atributo sera privado
    #email: string
    #nickname: string
    #avatar: string

    constructor( email: string, nickname: string, avatar: string, id: string = null ){   
        this.#email = email;
        this.#nickname = nickname;
        this.#avatar = avatar; 
        this.#id = id;   
    }

    static empty(){ //setando o user inicial como vazio
        return new User('', '', '/uploads/2bc98b08e7e3-randomUser.png')
    }

    get id(){
        return this.#id
    }

    get email(){
        return this.#email
    }

    get nickname(){
        return this.#nickname
    }

    get avatar(){
        return this.#avatar
    }


}
