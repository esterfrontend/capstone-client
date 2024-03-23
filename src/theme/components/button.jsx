import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: '0px'
  },
  variants: {
    solid: {
      bg: 'brand.primary',
      color: 'white',
      _hover: {
        bg:'brand.primaryDark'
    }
    },
    empty: {
        bg: 'transparent',
        color: 'brand.black'
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
})

export default Button