import './ItemListContainer.css';  
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase/index';

const ItemListContainer = ({ greeting, setPage }) => {

    const [products, setProducts] = useState([]); //inicia con un array vacio
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        //Para filtrar por categorias uso query y where
        const collectionRef = !categoryId 
        ? collection(db, 'products')
        : query(collection(db, 'products'), where ('category', '==', categoryId))

        //traigo los datos de mi base de datos de la coleccion products y retorna una promesa
        getDocs(collectionRef).then(res => {
            // console.log(res)
            const products = res.docs.map (doc => {
                const values = doc.data()
                // console.log(values)
                return {id:doc.id, ...values}
            })
            console.log(products)
            setProducts(products)
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            setLoading(false)
        })
    }, [categoryId]) //vuelve a ejecutar la funcion cuando hay un cambio de estado (en params.categoryId)

        if(loading){
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