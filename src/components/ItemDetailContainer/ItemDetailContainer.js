import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css';
import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/firebase/firestore";
import { useAsync } from "../../hooks/useAsync";

const ItemDetailContainer = ({ addItem }) => {

    const { productId } = useParams() //el hook useParams retorna un objeto

    const { data, isLoad, er } = useAsync(() => getProductsById(productId), [productId])

    if (isLoad) {
        return (
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )
    }
    if(er){
        return <h1>Hubo un error</h1>
    }


    return (
        <div className="ItemDetail_container_1">
            <ItemDetail {...data} addItem={addItem}/>
        </div>
    )
}

export default ItemDetailContainer;