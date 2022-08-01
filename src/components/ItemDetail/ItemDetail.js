import '../Item/Item.css';
import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';

const ItemDetail = ({ product }) => {

    const handleOnAdd = (quantity) => {
        alert(`Agregaste ${quantity} productos`);
    }

    return (
        <div className="container_itemDetail">
            <div className='card_container_item row'>
                <img className='card_img_item' src={product.img} alt='pizza_img'/>
                <div>
                <Counter initial={1} stock={product.stock} onAdd={handleOnAdd}/>
                <p className='letras_item'>{product.name} ${product.price}</p>
                <p className='letras_item'>Stock disponible: {product.stock}</p>
                <p className='letras_item'>{product.description_detalle}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;