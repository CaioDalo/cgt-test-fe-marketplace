import React, {  useState, useEffect, createContext, useContext } from "react"

export const cartContext = createContext([])

export const CartProvider = ({children}) => {

    const [products, setProducts] = useState([])

    if(products.length > 0) {
        sessionStorage.setItem('cart', JSON.stringify(products))
    }
    
    useEffect(() => {
        const productsStoraged = JSON.parse(sessionStorage.getItem('cart'))
        if(productsStoraged) 
            setProducts(productsStoraged)
    }, [])

    const addProduct = (product) => {
        setProducts([...products, product])
    }

    const updateProduct = (product) => {
        let updateFromProducts

        const newQuantity = product.quantity

        if(product.quantity !== 0) {
                updateFromProducts = products.map((productCart) => productCart.name === product.name ? ({
                ...productCart,
                quantity: newQuantity
            }) : productCart);
            setProducts(updateFromProducts);
        } else {
            if(products.length > 1) {
                updateFromProducts = products.filter(productCart => productCart.name !== product.name)
            } else {
                updateFromProducts = []
                sessionStorage.setItem('cart', JSON.stringify(updateFromProducts))
            }
        }

        setProducts(updateFromProducts)
    }

    const removeProduct = (id) => {
        let removedIdfromProducts
        
        if(products.length > 1) {
            removedIdfromProducts = products.filter(product => product.id !== id)
        } else {
            removedIdfromProducts = []
            sessionStorage.setItem('cart', JSON.stringify(removedIdfromProducts))
        }

        setProducts(removedIdfromProducts)
    }

    return (
        <cartContext.Provider value={{products, addProduct, removeProduct, updateProduct}}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(cartContext)

    return context
}