import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <table className='cart_table'>
            <thead>
                <tr>
                    <th>Cantidad</th>
                    <th>Item</th>
                    <th>Precio Unitario </th>
                    <th>Subtotal</th>
                    <th></th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th>{quantity}</th>
                    <th>{name}</th>
                    <th>${price}</th>
                    <th>${price * quantity}</th>
                    <th><button className="button_style" onClick={() => handleRemove(id)}>X</button></th>
                </tr>
            </thead>
        </table>
    )
}

export default CartItem;