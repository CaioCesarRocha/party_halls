import nc from 'next-connect'
import upload from '../services/multerConfig'


const handler = nc()
  .use(upload.single('avatar'))
  .post(async (req, res) => {
    const { email } = req.body;
    const image = req.file?.filename
    
    return res.status(200).json({ newAvatar: image})
  })
  .patch(async (req, res) => {
    throw new Error('Throws me around! Error can be caught and handled.');
  });


export const config = {
    api: {
      bodyParser: false,
    },
};


export default handler;