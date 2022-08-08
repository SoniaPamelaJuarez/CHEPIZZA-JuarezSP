import '../Item/Item.css';
import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ name, img, price, stock, description_detalle }) => {

    const [quantity, setQuantity] = useState (0);

    const handleOnAdd = (quantity) => {
        console.log('Agregaste al carrito: ', quantity);
        setQuantity(quantity)
    }

    return (
        <div className="container_itemDetail">
            <div className='card_container_item row'>
                <img className='card_img_item' src={img} alt='pizza_img'/>
                <div>
                {quantity > 0 ? <Link className='link_comprar' to='/cart'>Ir al carrito</Link> :<Counter initial={1} stock={stock} onAdd={handleOnAdd}/>}
                <p className='letras_item'>{name} ${price}</p>
                <p className='letras_item'>Stock disponible: {stock}</p>
                <p className='letras_item'>{description_detalle}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;