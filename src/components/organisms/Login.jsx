import React from 'react'
import { LoginForm } from '../molecules/LoginForm'

export const Login = () => {
  return (
    <div className='max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Iniciar Sesión</h2>
        <LoginForm/>
    </div>

  )
}
