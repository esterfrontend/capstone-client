import { extendTheme } from "@chakra-ui/react"

const colors = {
  brand: {
    primary: '#58928B',
    pink: '#FDE1D8',
    black: '#3C3C3C',
    primaryLight: '#bed6d3',
    pinkLight: '#FEEDE7',
    pinkUltraLight: '#FFF9F7',
  }
}

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Poppins', sans-serif`,
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