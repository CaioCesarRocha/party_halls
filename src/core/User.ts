
export default class User {
    
    #id: string    //# server pra dizer que o atributo sera privado
    #email: string
    #nickname: string

    constructor(id: string = null, email: string, nickname: string, ){
        this.#id = id;
        this.#email = email;
        this.#nickname = nickname;      
    }

    static empty(){ //setando o user inicial como vazio
        return new User(null,'', '')
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

}
