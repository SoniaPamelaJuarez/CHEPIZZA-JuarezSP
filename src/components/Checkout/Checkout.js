import './Checkout.css';
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, getDocs, Timestamp, updateDoc, query, where, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase/index';
import Swal from 'sweetalert2';

const Checkout = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [purchased, setPurchased] = useState(0);
    const [orderNumb, setOrderNumb] = useState();

    const { cart, clearCart, getTotal} = useContext(CartContext)

    const total = getTotal()

    if(purchased === 1){
        return(
            <div>
                <h1>Gracias por su compra {name}!</h1>
                <h2>Su número de orden es: #{orderNumb}</h2>
            </div>
        )
    }

    const createOrder = async () => {
        try {
            const objectOrder = {
                buyer:{name: name, phone: phone, email: email},
                items:cart,
                total,
                date: Timestamp.fromDate(new Date())
            } 

            const ids = cart.map(item => item.id)

            const itemsRef = collection(db, 'products') 

            const itemsAddedFromDb = await getDocs(query(itemsRef, where(documentId(),'in',ids)))

            const { docs } = itemsAddedFromDb

            const withoutStock = []

            const batch = writeBatch(db)

            docs.forEach(doc => {
                const docData = doc.data()
                const dbStock = docData.stock

                const itemAdded = cart.find (item => item.id === doc.id)
                const itemQuantity = itemAdded?.quantity

                if(dbStock >= itemQuantity){
                    batch.update(doc.ref, {stock: dbStock-itemQuantity})
                }else{
                    withoutStock.push({ id: doc.id, ...docData })
                }
            })

            if(withoutStock.length === 0){
                const orderRef = collection(db,'orders')
                const createdOrder = await addDoc(orderRef, objectOrder)
                batch.commit()
                const OrderN = createdOrder.id
                setOrderNumb(OrderN)
                setPurchased(1)
                clearCart()
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops... Algo salió mal :(',
                    text: 'Uno de los prodcutos que intenta comprar está fuera de stock',
                    })
            }
        }catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='form_container'>
            <h2>Formulario de compra</h2>
            <form className='form_buy'>
                <label>Nombre:</label>
                <input type='text' onChange = {(i) => {setName(i.target.value)}} />
                <label>Teléfono:</label>
                <input type='number' onChange = {(i) => {setPhone(i.target.value)}}/>
                <label>E-mail:</label>
                <input type='text' onChange = {(i) => {setEmail(i.target.value)}}/>

            </form>
            <button type='submit' className="button_style" onClick={createOrder}>Generar Orden de compra</button>
        </div>
    )
}

export default Checkout;