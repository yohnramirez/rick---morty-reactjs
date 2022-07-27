import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App'

const colors = {
  brand: {
    100: '#143F6B',
    200: '#F55353',
    300: '#FEB139',
    400: '#F6F54D',
    500: '#EEEEEE'
  }
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS='true'>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
