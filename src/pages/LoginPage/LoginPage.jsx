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
        <Flex className='container' marginTop={'50px'}>
            <Box
                w={'50%'}
                padding={'40px'}
                textAlign={'center'}
            >
                <Heading as={'h1'} fontSize={'1.5rem'} marginBottom={'30px'}>Inicia sesión</Heading>
                <SimpleForm
                    maxW={'300px'}
                    margin={'0 auto'}
                    onChange={onChange}
                    onSubmit={onSubmit}
                    inputs={LOGIN_INPUTS}
                    buttonText={'Entra'}
                />
            </Box>
            <Flex
                w={'50%'}
                padding={'40px'}
                textAlign={'center'}
                bgColor={'brand.pinkUltraLight'}
                borderLeft={'2px solid'}
                borderLeftColor={'brand.pink'}
                direction={'column'}
                gap={'20px'}
                alignItems={'center'}
            >
                <Heading as={'h2'} fontSize={'1.5rem'} marginBottom={'30px'}>Crea una cuenta</Heading>
                <Text>Si eres un <strong>colegio</strong> o <strong>psicólogo</strong>, únete a nosotros y ayúdanos a <strong>luchar contra el bullying</strong>. Ayudar a los niños que sufren acoso está en nuestras manos.</Text>
                <Button to='/registrarse'>Crea una cuenta</Button>
            </Flex>
        </Flex>
    )
}

export default LoginPage