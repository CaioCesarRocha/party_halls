import User from "./User";

export default interface UserRepository{
    save(user: User): Promise<User>
    update(user: User): Promise<User>
    getOne(email: string): Promise<User>
    delete(user: User): Promise<void>
}