const products = [
    { 
        id: '1', 
        name: 'Pizza Napolitana', 
        price: 1200, 
        category: 'Pizza', 
        img:'images/pizza.png', 
        stock: 20, 
        description:'Descripcion pizza napolitana',
        description_detalle: 'La pizza Napolitana es un tipo de pizza que se originó en la ciudad de Nápoles, Italia. Este tipo de pizza se suele preparar con ingredientes simples y frescos. Masa madre, salsa de tomate natural, queso mozzarella, albahaca fresca y aceite de oliva.' 
    },
    { id: '2', name: 'Pizza Rockefort', price: 1500, category: 'hamburguesa', img:'images/pizza.png', stock: 16, description:'Descripcion pizza rockefort'},
    { id: '3', name: 'Pizza Margarita', price: 1200, category: 'ensalada', img:'images/pizza.png', stock: 10, description:'Descripcion pizza margarita'}
]


//la siguiente funcion retorna una promesa
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}

//la siguiente funcion retorna 1 sólo producto, ItemDetailContainer le va a pedir a esta fn. 1 producto
export const getProduct = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products[0])
        }, 2000);
    })
}
