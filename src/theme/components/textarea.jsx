import { defineStyleConfig } from '@chakra-ui/react'

const Textarea = defineStyleConfig({
    variants: {
        outline: {
            _focus: {
                ring: 'none',
                borderColor: 'brand.primary',
            },
        }
    },
})

export default Textarea