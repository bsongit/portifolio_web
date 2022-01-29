import {createContext} from 'react'

const contextToken = createContext({
    token: null,
    setToken: () => {}
})

export default contextToken;