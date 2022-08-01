import { useState, useEffect } from "react"
import { getProduct } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';

const ItemDetalContainer = () => {
    
    const [product, setProduct] = useState ([]);
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        getProduct().then(response => {
            setProduct(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
        })
    }, []);

    if (loading) {
        return <h1> </h1>
    }

    return (
        <div className="ItemDetail_container">
            <ItemDetail product = {product}/>
        </div>
    )
}

export default ItemDetalContainer;