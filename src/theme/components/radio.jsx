import { defineStyleConfig } from '@chakra-ui/react'

const Radio = defineStyleConfig({
    baseStyle: {
        control: {
            _checked: {
                borderColor: 'brand.primary',
                bg: 'brand.primary',
                _hover: {
                    borderColor: 'brand.primary',
                    bg: 'brand.primary'
                }
            },
            _hover: {
                borderColor: 'brand.primaryLight',
                bg: 'brand.primaryLight'
            }
        },
    },

})

export default Radio