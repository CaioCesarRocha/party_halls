import multer from 'multer';
import crypto from 'crypto'; //gerar um hash aleatorio de dados

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'public/uploads')
        },//aonde os arquivos vao parar quando subidos
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex'); // tamanho 6, sendo convertido para hexadecimal
            const fileName = `${hash}-${file?.originalname}`; //mescla o hash com o nome, para ainda identificar o arquivo
            callback(null, fileName);
        }     
    }),
})


export default upload;
