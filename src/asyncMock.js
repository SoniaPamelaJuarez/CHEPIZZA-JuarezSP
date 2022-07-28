const products = [
    { 
        id: '1', 
        name: 'Pizza Napolitana', 
        price: 100, 
        category: 'Pizza', 
        img:'images/pizza.png', 
        stock: 25, 
        description:'Descripcion pizza napolitana'
    },
    { id: '2', name: 'Pizza Rockefort', price: 150, category: 'hamburguesa', img:'images/pizza.png', stock: 16, description:'Descripcion pizza rockefort'},
    { id: '3', name: 'Pizza Margarita', price: 120, category: 'ensalada', img:'images/pizza.png', stock: 10, description:'Descripcion pizza margarita'}
]


//la siguiente funcion retorna una promesa
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}
