import { Box, Heading, Text } from '@chakra-ui/react'
import SomeUsersGrid from '../SomeUsersGrid/SomeUsersGrid'
import Button from '../Button/Button'

const SomeUsers = ({schools}) => {
    return (
        <Box padding={'80px 50px'} textAlign={'center'} marginBottom={'40px'}>
            <Heading>Algunos de los colegios inscritos</Heading>
            <Text m={'30px 0'}>Si eres un colegio y quieres ayudar a los alumnos que sufren acoso escolar en tu colegio, incríbete en la plataforma y actúa contra el bullying. Elije un psicólogo para que te acompañe en este camino y déjate guiar por él.</Text>
            <SomeUsersGrid schools={schools}/>
            <Button to='/registrarse'>Únete a nosotros</Button>
        </Box>
    )
}

export default SomeUsers