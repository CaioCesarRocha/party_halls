import firebase from "../data/firebase/config";
import User from "../core/User";
import UserRepository from "../core/UserRepository";

export default class CollectionUser implements UserRepository {
//convertando a classe user para poder salvar no banco, e dps os dados banco convertido para user na classe
    #converter = { 
        toFirestore(user: User){
            return{
                id: user.id,
                email: user.email,
                nickname: user.nickname        
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) :User {
            const data = snapshot.data(options)
            return new User(data.id, data.email, data.nickname)
        }
    }


    async save(user: User): Promise<User>{
        if(user?.id){   
            const docRef = await this.collection().add(user)
            const doc = await docRef.get()
            console.log('RETORNO', doc.data())
            return doc.data()
        }
        return null
    }

    async update(user: User): Promise<User>{
        if(user?.id){
            await this.collection().doc(user.id).set(user)
            return user
        }     
        return null
    }

    async getOne(email: string): Promise<User>{

        if(email){
            const query = await this.collection().where("email", "==", email).get()
            try{
                const result = query.docs[0].data()
                console.log('RESULTADO', result)
                return result   
            }catch{
                return new User('', '', '')
            }
                   
            
            //return query.docs.map(doc => doc.data()))
            
            /*.then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    if(doc) return doc
                    else return null
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });*/
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