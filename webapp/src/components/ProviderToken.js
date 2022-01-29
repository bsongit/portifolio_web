import React, { Children } from 'react'
import { useStorage } from '../helpers/Utils'
import ContextToken from './ContextToken'

const providerToken = ({children}) => {
    const [token,setToken] = useStorage('token');
    return (
        <ContextToken.Provider value={{
            token,
            setToken
        }}>
            {children}
        </ContextToken.Provider>
    )
}

export default providerToken;