import { Box, Heading } from '@chakra-ui/layout';

const MainHeading = ({children}) => {
    return (
        <Box className="container" w={'100%'} bgColor={'brand.pinkLight'}>
            <Heading as='h1' padding={'30px'} textAlign={'center'}>
                {children}
            </Heading>
        </Box>
    )
}

export default MainHeading