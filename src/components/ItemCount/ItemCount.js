import './ItemCount.css';
import {useState} from 'react';

const Counter = ({stock, initial=1, onAdd}) => {

    //hook de estado
    const [quantity, setQuantity] = useState(initial);

    const increment = () =>{
        if(quantity < stock) {
            setQuantity(quantity+1);
        }
    }

    const decrement = () =>{
        if(quantity > 1) {
            setQuantity(quantity-1);
        }
    }

    return(
        <div className='container_father'>
            <div className='count_container'>
                <button className='count_button' onClick={decrement}>-</button>
                <p>{quantity}</p>
                <button className='count_button' onClick={increment}>+</button>
            </div>
            <button onClick={() => onAdd(quantity)} className='cart_button'>Agregar al <img className='img_cart' src='/images/cart.png' alt='cart'/></button>
        </div>
    );
}

export default Counter;