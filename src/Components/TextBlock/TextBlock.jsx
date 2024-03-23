import { Box } from "@chakra-ui/react"

const TextBlock = ({children}) => {
    return (
        <Box 
            className="container" 
            textAlign={'center'} 
            paddingTop={'40px'} 
            paddingBottom={'40px'} 
            borderBottom={'2px solid'}
            borderBottomColor={'brand.pinkLight'}
            marginBottom={'30px'}
        >
            {children}
        </Box>
    )
}

export default TextBlock