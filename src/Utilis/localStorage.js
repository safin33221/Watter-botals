const getStoredCart = () => {
    const storedCardString = localStorage.getItem('cart')
    if (storedCardString) {
        return JSON.parse(storedCardString)
    }
    return []
}

const saveCartToLs = cart => {
    const cartStringfied = JSON.stringify(cart)
    localStorage.setItem('cart', cartStringfied)
}
const addToLs = id => {
    const cart = getStoredCart();
    cart.push(id)

    saveCartToLs(cart)

}
const removeFromLs = id => {
    const cart = getStoredCart();
    const remaning = cart.filter(idx => idx !== id)
    saveCartToLs(remaning)
}

export { addToLs, getStoredCart, removeFromLs }