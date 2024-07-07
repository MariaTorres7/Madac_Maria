import React, { createContext, useState, useContext} from 'react'
import axiosClient from '../services/axiosClient'
import { useNavigate } from 'react-router-dom'


const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()

    
    const login = async (email, password) => {

        try {
            const response = await axiosClient.post('/validacion', {correo_electronico:email, password})
            const { token, user } = response.data
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
            
            if (response.data) {
                navigate("/")
            }
            else {
                navigate("/login")
            }
        } catch (error) {
            console.log(error)
        }
        
    }

    const value = {
        login
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


