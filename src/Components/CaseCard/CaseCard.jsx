import { Box, Text } from "@chakra-ui/react"
import CustomLink from "../CustomLink/CustomLink"


const CaseCard = ({ocurrence}) => {
    return (
        <CustomLink to={'/mis-casos/caso'} 
            display={'inline-block'} border={'1px solid'} borderColor={'brand.primaryLight'}
            _hover={{
                bgColor: 'brand.primaryUltraLight'
            }}
        >
            <Box padding={'20px'}>
                <p>Estado: {ocurrence.state}</p>
                <Text noOfLines={[2, 2, 3, 3]}>
                    {ocurrence.victim}
                </Text>
            </Box>
        </CustomLink>
    )
}

export default CaseCard