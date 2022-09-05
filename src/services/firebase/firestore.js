import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore';
import { db } from '.';
import { createProductModifierFromFS } from '../../adapters/productModifier';

export const getProducts = (categoryId) => {
    //Para filtrar por categorias uso query y where
    const collectionRef = !categoryId 
    ? collection(db, 'products')
    : query(collection(db, 'products'), where ('category', '==', categoryId))
    //traigo los datos de mi base de datos de la coleccion products y retorna una promesa
    return getDocs(collectionRef).then(res => {
        const products = res.docs.map (doc => {
            return createProductModifierFromFS(doc)
        })
        return products
    }).catch(er => {
        return er
    })
};

export const getProductsById = (productId) => {

    return getDoc(doc(db, 'products', productId )).then(res => {
        const values = res.data()

        const product = { id:res.id, ...values}

        return product
    }).catch(er => {
        return er
    })
}