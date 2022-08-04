import '../Item/Item.css';
import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';

const ItemDetail = ({ name, img, price, stock, description_detalle }) => {

    const handleOnAdd = (quantity) => {
        alert(`Agregaste ${quantity} productos`);
    }

    return (
        <div className="container_itemDetail">
            <div className='card_container_item row'>
                <img className='card_img_item' src={img} alt='pizza_img'/>
                <div>
                <Counter initial={1} stock={stock} onAdd={handleOnAdd}/>
                <p className='letras_item'>{name} ${price}</p>
                <p className='letras_item'>Stock disponible: {stock}</p>
                <p className='letras_item'>{description_detalle}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;