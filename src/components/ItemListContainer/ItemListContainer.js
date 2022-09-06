import './ItemListContainer.css';  
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../services/firebase/firestore';
import { useAsync } from '../../hooks/useAsync';

const ItemListContainer = ({ greeting, setPage }) => {

    const { categoryId } = useParams()
    const { isLoad, data, er} = useAsync(() => getProducts(categoryId), [categoryId])

        if(isLoad){
            return (
                <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            )
        }
        if(er){
            return <h1>Hubo un error</h1>
        }
        
    return (
        <div className='container'>
            <h1 className="item_greeting">{greeting}</h1>
            <ItemList products={data} setPage={setPage}/> {/*estoy pasando por props un estado*/}
        </div>
    );
}

export default ItemListContainer;