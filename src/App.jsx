import React from 'react'
import { AuthProvider } from './context/AuthContext'
import { AppRouter } from './router/Router'
import { BrowserRouter } from 'react-router-dom'
import { TableProvider } from './context/TableContext'


const App = () => {
  return (

    <BrowserRouter>
      <AuthProvider>
        <TableProvider>
        <AppRouter />
        </TableProvider>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default App