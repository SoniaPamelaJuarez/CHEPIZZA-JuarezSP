import './Checkout.css';
import { useContext, useState } from "react";
import { CartContext } from '../../context/CartContext';
import { addDoc, collection, getDocs, Timestamp, query, where, documentId, writeBatch } from 'firebase/firestore';
import { db } from '../../services/firebase/index';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

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
            <div className='form_container'>
                <div className='form_buy'>
                    <h1>Gracias por su compra {name}!</h1>
                    <h2>Su número de orden es: #{orderNumb}</h2>
                </div>
            </div>
            
        )
    }

    const createOrder = async (e) => {
        try {
            e.preventDefault();

            if(!validateForm()) return;

            if(cart.length === 0){
                Swal.fire({
                    icon: 'error',
                    title: 'Tienes el carrito vacío',
                    text: 'Something went wrong!',
                })
                return false;
            }

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

    const validateForm = () => {
        if (name.length <= 0) {
            Swal.fire({
                icon: 'info',
                title: 'Complete el nombre',
                text: 'Something went wrong!',
            })
            return false;
        }
        if (phone.length <= 0 || isNaN(parseInt(phone))) {
            Swal.fire({
                icon: 'info',
                title: 'Complete el teléfono',
                text: 'Something went wrong!',
            })
            return false;
        }
        if (email.length <= 0 || !String(email).includes("@")) {
            Swal.fire({
                icon: 'info',
                title: 'Inserte un correo electrónico válido',
                text: 'Something went wrong!',
            })
            return false;
        }
        return true
    }


    return (
        <div className='form_container'>
            <h2>Formulario de compra</h2>
            <form className='form_buy'>
                <label>Nombre:</label>
                <input required type='text' onChange = {(i) => {setName(i.target.value)}} />
                <label>Teléfono:</label>
                <input required type='number' onChange = {(i) => {setPhone(i.target.value)}}/>
                <label>E-mail:</label>
                <input required type='text' onChange = {(i) => {setEmail(i.target.value)}}/>
            </form>
            <button type='submit' className="button_style" onClick={createOrder}>Generar Orden de compra</button>
            <Link className="button_style" to='/cart'>Regresar al carrito</Link>
        </div>
    )
}

export default Checkout;