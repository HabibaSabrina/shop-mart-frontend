import { getStoredCart } from "../utilities/fakeDb"

export const addedProductsCart = async () =>{
    // fetching products
    const totalProductsData = await fetch('/datasets/products.json')
    const totalProducts = await totalProductsData.json()
    // getting stored product
    const savedCart = getStoredCart()
    let addedProductsArr = []
     
    for(const id in savedCart){
        // quantity property will be added 
        const foundProducts = totalProducts.find(product => product.id == id)
        if(foundProducts){
            const quantity = savedCart[id]
            foundProducts.quantity= quantity
            addedProductsArr.push(foundProducts)
        }
    }
    return {addedProductsArr, totalProducts}
}