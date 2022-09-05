export const createProductModifierFromFS = (doc) => {
    const data = doc.data()

    const productModifier = {
        id: doc.id,
        name: data.name,
        img: data.img,
        price: data.price,
        category: data.category,
        stock: data.stock,
        description_detalle: data.description_detalle
    }
    return productModifier;
}

