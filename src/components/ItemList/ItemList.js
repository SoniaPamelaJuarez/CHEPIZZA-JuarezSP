import './ItemList.css'
import Item from "../Item/Item";

const ItemList = ({ products }) => {
    return (
        <div className="container_itemList">
            {products.map(product => (
                <Item key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default ItemList;