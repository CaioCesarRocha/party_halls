
export default class User {
    
    #id: string    //# server pra dizer que o atributo sera privado
    #email: string
    #nickname: string

    constructor( email: string, nickname: string, id: string = null ){   
        this.#email = email;
        this.#nickname = nickname; 
        this.#id = id;   
    }

    static empty(){ //setando o user inicial como vazio
        return new User('', '',)
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
