import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const ItemDetailContainer = ({ addItem }) => {
    
    const [product, setProduct] = useState ();
    const [loading, setLoading] = useState(true);
    
    const { productId } = useParams () //el hook useParams retorna un objeto
    
    useEffect(() => {

        getDoc(doc(db, 'products', productId )).then(res => {
            const values = res.data()

            const product = { id:res.id, ...values}

            setProduct(product)
        }).catch(e => {
            console.log(e)
        }).finally(() => {
            setLoading(false)
        })        



        // getProductById(productId).then(response => {
        //     setProduct(response)
        // }).catch(error => {
        //     console.log(error)
        // }).finally(() => {
        //     setLoading(false)
        // })
    }, [productId]);

    if (loading) {
        return <h1>Cargando detalle del producto...</h1>
    }


    return (
        <div className="ItemDetail_container">
            <ItemDetail {...product} addItem={addItem}/>
        </div>
    )
}

export default ItemDetailContainer;