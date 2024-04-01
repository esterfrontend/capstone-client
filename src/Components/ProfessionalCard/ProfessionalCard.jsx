import { Box, Text } from "@chakra-ui/react"
import CustomLink from "../CustomLink/CustomLink"

const ProfessionalCard = ({professional, ...props}) => {
    return (
        <Box {...props}>
            <Text
                as={'h2'}
                fontSize={'1.1rem'}
                fontWeight={'bold'}
            >
                {professional.name}
            </Text>
            <Text as="span" fontSize={'0.9rem'} display={'inline-block'} w={'100%'}>{professional.postalCode}, {professional.province}</Text>
            
            <CustomLink to={`mailto:${professional.email}`}>
                <Text as={"span"} fontSize={'14px'} lineHeight={'13px'}>{professional.email}</Text>
            </CustomLink>
        </Box>
    )
}

export default ProfessionalCard