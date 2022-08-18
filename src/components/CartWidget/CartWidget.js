import './CartWidget.css';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { getQuantity, getTotal } = useContext(CartContext)

    const quantity = getQuantity()

    const totalQuantity = getTotal()


    return (
        <div>
            {totalQuantity >0 && <Link className='cartW_container' to='/cart'>
                <img className='img_cartW' src='/images/cart.png' alt='cart' />
                {quantity}
            </Link>}
        </div>
    );
}

export default CartWidget;
