import { defineStyleConfig } from '@chakra-ui/react'

const Tabs = defineStyleConfig({
    variants: {
        enclosed: {
            tab: {
                border: '1px solid',
                borderColor: 'brand.primaryLight',
                borderRadius: '0',
                p: ['10px 20px','10px 20px', '10px 30px'], 

                _selected: {
                    color: 'brand.black',
                    fontWeight: '600',
                    bg: 'brand.primaryLight',
                    border: '1px solid #bed6d3',
                    _hover: {
                        bg: 'brand.primaryLight',
                    }
                },
                _hover: {
                    color: 'brand.black',
                    bg: 'brand.primaryUltraLight',
                },
            },
            tabpanel: {
                bg: 'white',
                border: '1px solid',
                borderColor: 'brand.primaryLight',
                p: ['20px','20px', '30px'], 
            },
        },
    }
})

export default Tabs