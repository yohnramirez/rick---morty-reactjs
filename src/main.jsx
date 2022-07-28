import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const colors = {
  brand: {
    black: '#202329',
    red: '#F55353',
    orange: '#FF9800',
    white: '#EEEEEE',
    gray: '#3C3E44',
    green: '#55CC44',
    softGray: '#9E9E9E'
  }
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS='true'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
