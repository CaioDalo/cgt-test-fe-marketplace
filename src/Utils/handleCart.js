import React, {  useState, createContext } from "react"

export const AuthContext = createContext({})

export const AuthProvider = (props) => {

    const products = [
            {
                name: 'Product C',
                value: 20.00
            },
        ]

    /* console.log(products) */

    /*  const [items, setItems] = useState([])

    setItems(...items, props)

    console.log('entrou') */

    return (
        <AuthContext.Provider value={{products}}>
            {props.children}
        </AuthContext.Provider>
    )
}