import React, {  useState, useEffect, createContext, useContext } from "react"

export const userContext = createContext({})

export const UserProvider = ({children}) => {
    const [isLogged, setIsLogged] = useState(false)
    const [usernameStoraged, setUsernameStoraged] = useState('')

    const userLoggedLocal = localStorage.getItem('@user')
    const userLoggedSession = sessionStorage.getItem('@user')
    
    useEffect(() => {
        if(userLoggedLocal) {
            const userData = JSON.parse(userLoggedLocal)
            setIsLogged(true)
            setUsernameStoraged(userData.username)
        }

        if(userLoggedSession) {
            const userData = JSON.parse(userLoggedSession)
            setIsLogged(true)
            setUsernameStoraged(userData.username)
        }
    }, [])

    /* const apiUrl = 'https://apiUrl.com/users'
    const token = process.env.API_TOKEN */

    const signUp = async (user) => {
        localStorage.setItem(`user_${user.username}`, JSON.stringify(user))
        return true
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
    }

    const signIn = async (user) => {
        const usersStoraged = Object.keys(localStorage)
        let userFound
        usersStoraged.map(userStoraged => {
            const userData = JSON.parse(localStorage.getItem(userStoraged))
            if(userData.email == user.email && userData.password == user.password) {
                userFound = true
                const username = userData.username
                setUsernameStoraged(username)

                console.log(user.remember)
                const token = new Date()
                user.remember == true ? localStorage.setItem('@user', JSON.stringify({token: token, username: username})) :
                                        sessionStorage.setItem('@user', JSON.stringify({token: token, username: username}))
            }
        })

        if(userFound == true) {
            setIsLogged(true)
            return true
        }

        return false

        /*  await fetch(apiUrl, {
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
        }) */
    }

    const logout = () => {
        localStorage.removeItem('@user')
        sessionStorage.removeItem('@user')
        setIsLogged(false)
    }

    return (
        <userContext.Provider value={{isLogged, usernameStoraged, signUp, signIn, logout}}>
            {children}
        </userContext.Provider>
    )
}

export function useUser() {
    const context = useContext(userContext)

    return context
}