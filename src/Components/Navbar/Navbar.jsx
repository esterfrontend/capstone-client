import { Flex } from '@chakra-ui/react'
import Logo from '../Logo/Logo'
import NavigationLink from '../NavigationLink/NavigationLink'
import AuthLink from '../AuthLink/AuthLink'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const NAVIGATION = [
        {
            text: 'Yo actúo',
            link: '/nuevo-caso'
        },
        // {
        //     text: 'Cómo funciona',
        //     link: '/'
        // },
        {
            text: 'Colegios',
            link: '/'
        },
        {
            text: 'Psicólogos',
            link: '/'
        }
    ]

    return (
        <Flex as={"header"} className='container' paddingTop={'30px'} paddingBottom={'30px'} alignItems={'center'} justifyContent={'space-between'} position={'relative'}>
            <Link to='/'>
                <Logo />
            </Link>

            <Flex gap={'4vw'} textAlign={'center'}>
                { NAVIGATION.map(({ link, text }) => {
                    return (
                        <NavigationLink 
                            to={link} 
                            key={text} 
                        >
                            {text}
                        </NavigationLink>
                    )
                })} 
            </Flex>

            <Flex gap={'10px'} textAlign={'center'}>
                <AuthLink to={"/login"}>Iniciar sesión</AuthLink>
                <AuthLink to={"/signup"}>Registrarse</AuthLink>
            </Flex>
        </Flex>
    )
}

export default Navbar