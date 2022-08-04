const products = [
    { 
        id: '1', 
        name: 'Pizza Napolitana', 
        price: 1200, 
        category: 'pizza', 
        img:'/images/pizza.png', 
        stock: 20, 
        description:'Descripcion pizza napolitana',
        description_detalle: 'La pizza Napolitana es un tipo de pizza que se originó en la ciudad de Nápoles, Italia. Este tipo de pizza se suele preparar con ingredientes simples y frescos. Masa madre, salsa de tomate natural, queso mozzarella, albahaca fresca y aceite de oliva.' 
    },
    { id: '2', name: 'Hamburguesa Argentina', price: 1300, category: 'hamburguesa', img:'/images/hamb.jpg', stock: 16, description_detalle:'La hamburguesa americana esta compuesta por verduras frescas (tomate, lechuga, pepinillo, cebolla) y un buen corte de ternera, previamente procesado en picadora. El sabor y la textura de la carne marcan la diferencia para disfrutar de una buena hamburguesa'},
    { id: '3', name: 'Ensalada César', price: 900, category: 'ensalada', img:'/images/Ensalada-Cesar.jpg', stock: 10, description_detalle:'La ensalada César es una ensalada de lechuga romana, pollo y croûtons con jugo de limón, aceite de oliva, huevo, salsa Worcestershire, ajo, mostaza de Dijon, queso parmesano y pimienta negra.'}
]


//la siguiente funcion retorna una promesa
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500);
    })
}

//la siguiente funcion retorna 1 sólo producto, ItemDetailContainer le va a pedir a esta fn. 1 producto
export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500);
    })
}

//Filtrar por categoria (En la API los traigo con un end point)
export const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500);
    })
}
