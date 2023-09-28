import { getStoredCart } from "../utilities/fakeDb"

export const addedProductsCart = async () =>{
    const totalProductsData = await fetch('/products.json')
    const totalProducts = await totalProductsData.json()
    const savedCart = getStoredCart()
    let addedProductsArr = []
    for(const id in savedCart){
        const foundProducts = totalProducts.find(product => product.id == id)
        if(foundProducts){
            const quantity = savedCart[id]
            foundProducts.quantity= quantity
            addedProductsArr.push(foundProducts)
        }
    }
    return {addedProductsArr, totalProducts}
}