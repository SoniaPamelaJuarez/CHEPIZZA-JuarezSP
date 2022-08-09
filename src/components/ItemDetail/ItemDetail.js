import '../Item/Item.css';
import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, price, stock, description_detalle }) => {

    const [quantity, setQuantity] = useState (0);

    const { addItem } = useContext(CartContext)

    // const quantityAdded = getProductQuantity(id)

    const handleOnAdd = (quantity) => {
        console.log('Agregaste al carrito')
        console.log(quantity)
        setQuantity(quantity)
        addItem({id, name, price, quantity})
    }

    return (
        <div className="container_itemDetail">
            <div className='card_container_item row'>
                <img className='card_img_item' src={img} alt='pizza_img'/>
                <div>
                {quantity > 0 ? <Link className='link_comprar' to='/cart'>Finalizar Compra</Link> :<Counter initial={0} stock={stock} onAdd={handleOnAdd}/>}
                <p className='letras_item'>{name} ${price}</p>
                <p className='letras_item'>Stock disponible: {stock}</p>
                <p className='letras_item'>{description_detalle}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;