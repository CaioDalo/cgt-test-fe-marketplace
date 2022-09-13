import React, {  useState, createContext, useContext } from "react"

export const userContext = createContext({})

export const UserProvider = ({children}) => {
    const [logged, setLogged] = useState(false)

    const apiUrl = 'https://apiUrl.com/users'
    const token = process.env.API_TOKEN

    const signUp = async (user) => {
        console.log('entrou')
        localStorage.setItem('user', JSON.stringify(user))
        /* const request = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                token: token,
                'content-type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(user)
        })

        return request.status === 200 ? true : false */
        return true
    }

    const signIn = async (user) => {
        await fetch(apiUrl, {
            method: 'GET',
            headers: {
                token: token,
                'content-type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 200) {
                localStorage.setItem('user', data.user.token)
                setLogged(true)
            }
        })

    }

    const logout = () => {
        if(logged === true) {
            localStorage.removeItem('user')
            setLogged(false)
        }
    }

    return (
        <userContext.Provider value={{signUp, signIn, logout}}>
            {children}
        </userContext.Provider>
    )
}

export function useUser() {
    const context = useContext(userContext)

    return context
}