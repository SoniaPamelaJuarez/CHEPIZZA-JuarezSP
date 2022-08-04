import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="container_item">
            <div className='card_container_item'>
                <img className='card_img_item' src={img} alt='pizza_img'/>
                <p className='letras_item'>{name} $ {price}</p>
                <p className='letras_item'>Stock disponible: {stock}</p>
                <Link className='link_verDetalle' to={`/detail/${id}`}>Ver detalle</Link>
            </div>
        </article>

    )
}

export default Item;