import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Button from '../Button/Button';
import img from '../../resources/main-illustration.svg'

const MainBanner = () => {
    return (
        <Flex className="container" 
            bgColor={'brand.pinkUltraLight'} 
            bgImage={img}
            bgPosition={'bottom right'}
            bgRepeat={'no-repeat'}
            bgSize={'50%'}
            padding={'180px 50px 80px 80px'}
            minH={'100vh'}
            marginTop={'-100px'}
            alignItems={'center'}
        >
            <Box w={'60%'}>
                <Heading as={'h1'} fontSize={'50px'}>¿Eres víctima o testigo de un caso de bullying?</Heading>
                <Box margin={'30px 0 40px 0'}>
                    <Text>¡Ayúdanos a frenar el bullying! </Text>
                    <Text>Nuestra prioridad es la seguridad y el bienestar de todos, así que no te preocupes, si lo deseas, el aviso puede ser totalmente anónimo. Ni el colegio, ni los agresores, ni la víctima sabrá quién a dado el aviso.</Text>
                    <Text>El mundo cambia con tu ejemplo.</Text>
                </Box>
                <Button to='/nuevo-caso'>Avísanos de un caso</Button>
            </Box>
        </Flex>
    )
}

export default MainBanner
