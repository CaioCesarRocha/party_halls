import firebase from "../data/firebase/config";
import User from "../core/User";
import UserRepository from "../core/UserRepository";


export default class CollectionUser implements UserRepository {
//convertando a classe user para poder salvar no banco, e dps os dados banco convertido para user na classe
    #converter = { 
        toFirestore(user: User){
            return{
                email: user.email,
                nickname: user.nickname        
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) :User {
            const data = snapshot.data(options)
            return new User(data.email, data.nickname, snapshot.id)
        }
    }


    async save(user: User): Promise<User>{
        const docRef = await this.collection().add(user)
        const doc = await docRef.get()
        return doc.data()   
    }

    async update(user: User): Promise<User>{
        await this.collection().doc(user.id).set(user)
        return user 
    }


    async getOne(user: User): Promise<User>{   
        if(user?.email){
            const query = await this.collection().where("email", "==", user.email).get()
            try{
                const result = query.docs[0].data()
                return result   
            }catch{
                const newUser = new User(user?.email, user?.nickname)
                return newUser
            }
        }
        return null
    }

    async delete(user: User): Promise<void>{
        return this.collection().doc(user.id).delete()
    }

    //setando a colleção q sera utilizada e ja passando o parametro do conversor
    private collection(){
        return firebase.firestore().collection('Users').withConverter(this.#converter)
    }

}