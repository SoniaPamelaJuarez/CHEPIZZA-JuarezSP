import './ItemListContainer.css';
import Counter from '../ItemCount/ItemCount';

const ItemListContainer = (props) => {

    const handleOnAdd = (quantity) => {
        alert(`Agregaste ${quantity} productos`);
    }
    return (
        <div>
            <h1 className="item_greeting">{props.greeting}</h1>
            <div className='card_container'>
                <img className='card_img' src='images/pizza.png' alt='pizza'/>
                <Counter initial={1} stock={10} onAdd={handleOnAdd}/>
            </div>
        </div>
    );
}

export default ItemListContainer;