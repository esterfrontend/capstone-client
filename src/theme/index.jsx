import { extendTheme } from "@chakra-ui/react"
import Button from './components/button'
import Tabs from './components/tabs'
import Checkbox from './components/checkbox'
import Radio from './components/radio'
import Input from './components/input'
import Textarea from './components/textarea'
import Select from './components/select'
import colors from './colors'

export const theme = extendTheme({
  colors,
  fonts: {
    heading: `'Oswald', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Button,
    Tabs,
    Checkbox,
    Radio,
    Input,
    Textarea,
    Select
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