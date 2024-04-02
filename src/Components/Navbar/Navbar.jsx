import { Box, Flex } from '@chakra-ui/react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import MainNavigation from '../MainNavigation/MainNavigation'
import AuthNavigation from '../AuthNavigation/AuthNavigation'
import MobileMenu from '../MobileMenu/MobileMenu'

const Navbar = () => {

    return (<>
        <Box className='navbar-desktop' w={'100%'} zIndex={'999'}>
            <Flex as={"header"} className='container' w={'100%'} paddingTop={'30px'} paddingBottom={'30px'} alignItems={'center'} justifyContent={'space-between'} position={'relative'}>
                <Link to='/'>
                    <Logo w={'160px'} />
                </Link>

                <Flex gap={'4vw'} textAlign={'center'}>
                    <MainNavigation 
                        classname={'nabvar-desktop__item'}
                    />
                </Flex>

                <AuthNavigation gap={'20px'} textAlign={'center'} />
            </Flex>
        </Box>

        <Box className='navbar-mobile'>
            <Flex as={"header"} className='container' paddingTop={'20px'} paddingBottom={'20px'} alignItems={'center'} justifyContent={'space-between'} position={'relative'}>
                <Link to='/'>
                    <Logo w={'135px'}/>
                </Link>

                <MobileMenu/>
            </Flex>
        </Box>
    </>)
}

export default Navbar