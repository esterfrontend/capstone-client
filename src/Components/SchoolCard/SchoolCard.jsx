import { Box, Text } from "@chakra-ui/react"

const SchoolCard = ({school}) => {
    return (
        <Box 
            border={'1px solid'} 
            borderColor={'brand.primaryLight'}
            padding={['15px', '15px', '20px', '25px']}
        >
            <Text
                as={'h2'}
                fontSize={'1.1rem'}
                fontWeight={'bold'}
            >
                {school.name}
            </Text>
            <Text as="span" fontSize={'0.9rem'} display={'inline-block'} w={'100%'}>{school.address}</Text>
            <Text as="span" fontSize={'0.9rem'} display={'inline-block'} w={'100%'}>{school.postalCode}, {school.province}</Text>
        </Box>
    )
}

export default SchoolCard