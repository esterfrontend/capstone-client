import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import SimpleForm from '../../Components/SimpleForm/SimpleForm'
import LOGIN_INPUTS from '../../const/loginInputs'
import Button from '../../Components/Button/Button'
import { useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext'

const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const onChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await login(userData)
    }

    return (
        <Flex className='container' margin={'50px 0 80px'} flexDirection={['column', 'column', 'row']} alignItems={'center'}>
            <Box
                w={['100%', '80%', '50%']}
                padding={['20px', '30px', '40px']}
                textAlign={'center'}
            >
                <Heading as={'h1'} fontSize={'1.5rem'} marginBottom={'30px'}>Inicia sesión</Heading>
                <SimpleForm
                    maxW={'300px'}
                    margin={'0 auto'}
                    onChange={onChange}
                    onSubmit={onSubmit}
                    inputs={LOGIN_INPUTS}
                    alignItems={'center'}
                    buttonText={'Entra'}
                />
            </Box>
            <Flex
                w={['100%', '80%', '50%']}
                padding={'40px'}
                textAlign={'center'}
                bgColor={'brand.pinkUltraLight'}
                borderLeftWidth={['0', '0', '2px']}
                borderLeftStyle={'solid'}
                borderLeftColor={'brand.pink'}
                direction={'column'}
                gap={'20px'}
                alignItems={'center'}
            >
                <Heading as={'h2'} fontSize={'1.5rem'} marginBottom={['10px', '10px', '20px']}>Crea una cuenta</Heading>
                <Text>Si eres un <strong>colegio</strong> o <strong>psicólogo</strong>, únete a nosotros y ayúdanos a <strong>luchar contra el bullying</strong>. Ayudar a los niños que sufren acoso está en nuestras manos.</Text>
                <Button to='/registrarse'>Crea una cuenta</Button>
            </Flex>
        </Flex>
    )
}

export default LoginPage