import './ItemListContainer.css';
import Counter from '../ItemCount/ItemCount';
import { getProducts } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {

    const handleOnAdd = (quantity) => {
        alert(`Agregaste ${quantity} productos`);
    }

    const [products, setProducts] = useState([]); //inicia con un array vacio
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    // const productsTransforms = products.map(product => (
    //     <li>{product.name}</li>
    // ))

    if (loading) {
        return <h1>Cargando los productos...</h1>
    }

    return (
        <div className='container'>
            <h1 className="item_greeting">{greeting}</h1>
            <ItemList products={products}/> {/*estoy pasando por props un estado*/}
            <div className='card_container'>
                <img className='card_img' src='images/pizza.png' alt='pizza'/>
                <Counter initial={1} stock={10} onAdd={handleOnAdd}/>
            </div>
        </div>
    );
}

export default ItemListContainer;