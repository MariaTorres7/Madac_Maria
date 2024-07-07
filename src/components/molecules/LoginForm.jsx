import React, { useState } from 'react'
import { useAuth } from '../../context/AuthContext'
import { Input } from '../atoms/Input'
import { Button } from '../atoms/Button'
import validateEmail from '../../utils/validateEmail'


export const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth()
    
    const iniciarSesion = (e) => {
        
        e.preventDefault()

        if (!validateEmail(email)) {
            alert('Por favor, introduce un email valido')
        }
        login(email, password)
    }

  return (
    <>
    <form onSubmit={iniciarSesion} className='space-y-4'>
        <div>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <Input
            type="email"
            placeholder="Ingrese su correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <Input
            type="text"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        
        <div>
            <Button
            children= "Login"
            onClick={iniciarSesion}
            />
        </div>

    </form>
    </>
  )
}
