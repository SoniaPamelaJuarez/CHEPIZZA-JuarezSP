import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting, setPage }) => {

    const [products, setProducts] = useState([]); //inicia con un array vacio
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {

        // const asyncFunction = categoryId ? getProductsByCategory : getProducts; //cambio nombre de referencia de las funciones 

        // asyncFunction(categoryId).then(response => {
        //     setProducts(response)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false)
        // })

        if(categoryId){
            getProductsByCategory(categoryId).then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }else{
            getProducts().then(response => {
                setProducts(response)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
        }, [categoryId]); //vuelve a ejecutr la funcion cuando hay un cambio de estado (en params.categoryId)
        


    if (loading) {
        return <h1>Cargando los productos...</h1>
    }

    return (
        <div className='container'>
            <h1 className="item_greeting">{greeting}</h1>
            <ItemList products={products} setPage={setPage}/> {/*estoy pasando por props un estado*/}
        </div>
    );
}

export default ItemListContainer;