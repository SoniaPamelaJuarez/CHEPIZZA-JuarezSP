import { useState, useEffect } from "react"
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ addItem }) => {
    
    const [product, setProduct] = useState ();
    const [loading, setLoading] = useState(true);
    
    const { productId } = useParams () //el hook useParams retorna un objeto
    
    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
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