export default function handler(req, res){
    res.status(200).json([
        {   
            id: 0, 
            description: 'Salão corporativo',
            image: '/Images/intern/salão_corporativo_2.jpeg',
        },
        {   
            id: 1, 
            description: 'Salão corporativo 2',
            image: '/Images/intern/salão_corporativo.jpeg',
        },
        {   
            id: 2, 
            description: 'Salão - Pista da dança',
            image: '/Images/intern/salao_pista.jpg',
        },
        {   
            id: 3, 
            description: 'Mesa Preparada - Casamento',
            image: '/Images/intern/mesa_casamento.jpg',
        },
        {   
            id: 4, 
            description: 'Mesa Preparada - Infantil',
            image: '/Images/intern/mesa_festa_Infantil.jpg',
        },
    ])
}