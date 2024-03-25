import { Flex } from '@chakra-ui/react'
import Logo from '../Logo/Logo'
import NavigationLink from '../NavigationLink/NavigationLink'
import AuthLink from '../AuthLink/AuthLink'
import { Link, useLocation } from 'react-router-dom'
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

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
            link: '/colegios'
        },
        {
            text: 'Psicólogos',
            link: '/psicologos'
        }
    ]

    const location = useLocation()

    return (
        <Flex as={"header"} className='container' paddingTop={'30px'} paddingBottom={'30px'} alignItems={'center'} justifyContent={'space-between'} position={'relative'}>
            <Link to='/'>
                <Logo />
            </Link>

            <Flex gap={'4vw'} textAlign={'center'}>
                { NAVIGATION.map(({ link, text }) => {
                    const isActiveLink = location.pathname === link
                    return (
                        <NavigationLink 
                            to={link} 
                            key={text} 
                            color={isActiveLink ? "brand.primary" : "brand.black"}
                        >
                            {text}
                        </NavigationLink>
                    )
                })} 
            </Flex>

            <Flex gap={'20px'} textAlign={'center'}>
                {user ? (
                    <>
                        <AuthLink to={"/mi-perfil"}>Mi perfil</AuthLink>
                        <AuthLink onClick={logout}>Logout</AuthLink>
                    </>
                ) : (
                    <>
                        <AuthLink to={"/inicio-sesion"}>Iniciar sesión</AuthLink>
                        <AuthLink to={"/registrarse"}>Registrarse</AuthLink>
                    </>
                )}
            </Flex>
        </Flex>
    )
}

export default Navbar