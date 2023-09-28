const addToDb = id => {
    let productCart = getStoredCart()
    const checking = productCart[id]
    if (checking) {
        productCart[id]++;
    }
    else {
        productCart[id] = 1
    }
    localStorage.setItem('product-cart', JSON.stringify(productCart))

}
// get stored data from local storage cart
const getStoredCart = () => {
    let productCart = {};
    // get previous data from local storage
    const storedCart = localStorage.getItem('product-cart')
    if (storedCart) {
        productCart = JSON.parse(storedCart)
        
    }
    return productCart

}
export { addToDb, getStoredCart }