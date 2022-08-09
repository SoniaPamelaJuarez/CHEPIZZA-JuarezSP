import { createContext, useState } from "react";


export const CartContext = createContext(); //Tengo que compartirlo con toda la aplicacion, puedo compartir un solo valor (a traves de props)

//Creo una funcion: es un componente de alto orden, porque tiene componentes children insertados por props

export const CartContextProvider = ({ children }) =>{
    const [cart, setCart] = useState([]);

    const addItem = (productToAdd) => {

        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const productUpdated = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return productUpdated
                }else{
                    return prod
                }
            })

            setCart(cartUpdated)
        }
    }

    const getQuantity = () =>{
        let accu = 0
        cart.forEach(prod => {
            accu  += prod.quantity
        })
        return accu
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutItem = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutItem)
    }

    const clearCart = () => {
        setCart([])
    }

    // const getProductQuantity = (id) => {
    //     const product = cart.find(prod => prod.id === id)
    //     return product?.quantity
    // }
    console.log(cart)

    return(
        <CartContext.Provider value={{ cart, addItem, isInCart, removeItem, clearCart, getQuantity }}>
        {children}
        </CartContext.Provider>
    )
}





