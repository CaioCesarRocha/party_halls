export default function handler(req, res){
    res.status(200).json([
        {id: 0, image: 'https://picsum.photos/300/300'},
        {id: 1, image: 'https://i.pinimg.com/564x/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg'},
        {id: 2, image: 'https://picsum.photos/300/300'},
        {id: 3, image: 'https://veja.abril.com.br/wp-content/uploads/2019/12/amazonia-floresta-coraccca7ao.jpg.jpg'},
        {id: 4, image: 'https://picsum.photos/300/300'},
        {id: 5, image: 'https://picsum.photos/300/300'},
        {id: 6, image: 'https://picsum.photos/300/300'},
        {id: 7, image: 'https://picsum.photos/300/300'},
    ])
}