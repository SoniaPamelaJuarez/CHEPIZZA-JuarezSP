import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <h1 className="item_greeting">{props.greeting}</h1>
    );
}

export default ItemListContainer;