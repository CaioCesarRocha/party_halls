import multer from 'multer';
import multerConfig from '../services/multer'


export default function handler(req, res){
    const upload = multer(multerConfig);
    const image = upload.single(req.body)
    console.log('image', image.filename)
    console.log('BODY', req.file?.filename)
    res.status(200).json([

    ])
}