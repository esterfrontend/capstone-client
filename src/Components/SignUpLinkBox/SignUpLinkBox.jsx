import { Box, Heading, Text } from "@chakra-ui/react"
import Button from "../Button/Button"


const SignUpLinkBox = () => {
    return (
        <Box as="section" borderTop={'2px solid'} borderColor={'brand.pink'} marginBottom={'50px'} padding={'50px'}>
            <Box maxW={'1000px'} textAlign={'center'} margin={'0 auto'}>
                <Heading as='h2' marginBottom={'30px'}>¿Quieres inscribirte?</Heading>
                <Text marginBottom={'30px'}>Si quieres ayudar a los niños que sufren acoso escolar, inscríbete en nuestra plataforma. ¡Te necesitamos!</Text>
                <Button to='/registrarse'>Crea una cuenta</Button>
            </Box>
        </Box>
    )
}

export default SignUpLinkBox