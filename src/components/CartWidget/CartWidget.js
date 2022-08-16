import './CartWidget.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { getQuantity, getTotal } = useContext(CartContext)

    const quantity = getQuantity()

    const totalQuantity = getTotal()

    if (totalQuantity === 0) {
        return 
    }

    return (
        <Link to='/cart' className='img_container'>
            <img className='img_cart' src='/images/cart.png' alt='cart' />
            {quantity}
        </Link>
    );
}

export default CartWidget;
