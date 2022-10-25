import products from "../../products.json";



export const getProductById = (id) => {
    const num = String(id)
    return products.find(product => product.id === num )
}