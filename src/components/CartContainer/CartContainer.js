import './CartContainer.css';
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart= () => {
    const { cart, clearCart, getTotal} = useContext(CartContext)  

    const total = getTotal()

    return(
        <div className='container_lista'>
            <div className='products_title'>
                <h1>Todos tus productos seleccionados</h1>
            </div>
            { cart.map(th => <CartItem key={th.id} {...th}/>) }
            <div className='buy_total'>
            <h1>Total: ${total}</h1>
            <button className="button_style">Comprar</button>
            <button onClick={() => clearCart()} className="button_style">Borrar todo</button>
            </div>
        </div>
    )
}

export default Cart;