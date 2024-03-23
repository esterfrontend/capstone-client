import { extendTheme } from "@chakra-ui/react"
import Button from './components/button'
import colors from './colors'

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Button,
  },
  styles: {
    global: {
      body: { 
        color: 'brand.black',
        fontSize: '15px',
        overscrollBehavior: "none" 
      },
      p: {
        marginBottom: '10px'
      }
    },
  }
})