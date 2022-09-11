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
        <cartContext.Provider value={{products, addProduct, removeProduct}}>
            {children}
        </cartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(cartContext)

    return context
}