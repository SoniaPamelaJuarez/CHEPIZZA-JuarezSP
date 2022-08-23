import './CartContainer.css';
import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart= () => {
    const { cart, clearCart, getTotal} = useContext(CartContext)

    const total = getTotal()
    

    return(
        <div className='container_lista'>
            <div className='products_title'>
                {total>0 ? <h1>Todos tus productos seleccionados</h1> : <h1>¡Todavía no tenes nada en el carrito! </h1>}
            </div>
            { cart.map(item => <CartItem key={item.id} {...item}/>) }
            <div className='buy_total'>
            <h1>Total: ${total}</h1>
            <Link to='/checkout'className="button_style">Checkout</Link>
            <button onClick={() => clearCart()} className="button_style">Limpiar carrito</button>
            </div>
        </div>
    )
}

export default Cart;