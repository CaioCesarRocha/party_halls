export default function handler(req, res){
    res.status(200).json([
        {   
            id: 0, 
            description: 'Entrada Salão Principal',
            image: '/Images/extern/entrada_salão_principal.jpg',
        },
        {   
            id: 1, 
            description: 'Entrada Lateral',
            image: '/Images/extern/entrada_lateral.jpg',
        },
        {   
            id: 2, 
            description: 'Salão - Hall Principal',
            image: '/Images/extern/hall_principal.jpg',
        },
        {   
            id: 3, 
            description: 'Entrada - Foto Casal',
            image: '/Images/extern/entrada_casal.jpg',
        },
        {   
            id: 4, 
            description: 'Sala Externa - Espaço Infantil',
            image: '/Images/extern/espaço_infantil_externo.jpg',
        },
    ])
}