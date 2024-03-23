import { Box, Text } from "@chakra-ui/react"
import CustomLink from "../CustomLink/CustomLink"

const ProfessionalCard = ({professional}) => {
    console.log(professional)
    return (
        <Box 
            border={'2px solid'} 
            borderRadius={'10px'}
            borderColor={'brand.primaryLight'}
            padding={'10px'}
        >
            <Text
                as={'h2'}
                fontSize={'1.1rem'}
                fontWeight={'bold'}
            >
                {professional.name}
            </Text>
            <Text as="span" fontSize={'0.9rem'} display={'inline-block'} w={'100%'}>{professional.address}</Text>
            <Text as="span" fontSize={'0.9rem'} display={'inline-block'} w={'100%'}>{professional.postalCode}, {professional.province}</Text>
            
            <CustomLink to={`mailto:${professional.email}`}>
                <Text as={"span"}>{professional.email}</Text>
            </CustomLink>
        </Box>
    )
}

export default ProfessionalCard