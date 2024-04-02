import { defineStyleConfig } from '@chakra-ui/react'

const Select = defineStyleConfig({
    variants: {
        outline: {
            _focus: {
                outline: 'none',
                ring: 'none',
                borderColor: 'brand.primary',
            },
        }
    },
})

export default Select