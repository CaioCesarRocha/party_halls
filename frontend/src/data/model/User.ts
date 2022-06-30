export default interface User {
    uid: string
    email: string,
    name: string,
    token: string,
    provider: string, //para saber se logou por email&senha ou pelo google
    imgUrl: string,
}