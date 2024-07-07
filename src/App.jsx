import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { AppRouter } from './router/Router'
import { BrowserRouter} from 'react-router-dom'


const App = () => {
  return (

    <BrowserRouter>
       <AuthProvider>
    <AppRouter/>
    </AuthProvider>
    </BrowserRouter>
 
  )
}

export default App