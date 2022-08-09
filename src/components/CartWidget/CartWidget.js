import './CartWidget.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <Link to='/cart' className='img_container'>
            <img className='img_cart' src='/images/cart.png' alt='cart' />{quantity}
        </Link>
    );
}

export default CartWidget;
