import './Item.css';

const Item = ({ product }) => {
    return (
        <div className="container_item">
            <div className='card_container_item'>
                <img className='card_img_item' src={product.img} alt='pizza_img'/>
                <p className='letras_item'>{product.name} $ {product.price}</p>
                <p className='letras_item'>Stock disponible: {product.stock}</p>
                <p className='letras_item'>{product.description}</p>
            </div>
        </div>

    )
}

export default Item;