import { Box, Flex } from "@chakra-ui/react"
import { useLocation } from 'react-router-dom'
import './ProfileNavigation.css'
import CustomLink from "../CustomLink/CustomLink"

const ProfileNavigation = () => {
    const PROFILE_NAVIGATION = [
        {
            text: 'Mi perfil',
            link: '/mi-perfil'
        },
        {
            text: 'Mis casos',
            link: '/mis-casos'
        },
        {
            text: 'Psicólogo asociado',
            link: '/psicologo-asociado'
        }
    ]
    const location = useLocation()

    return (
        <Flex className={'profile-navigation'} direction={'column'} bgColor={'brand.pinkUltraLight'} padding={'5px 20px'} margin={'0px'} listStyleType={'none'} minW={'250px'}>
            { PROFILE_NAVIGATION.map(({ link, text }) => {
                const isActiveLink = location.pathname === link
             
                return (
                    <CustomLink 
                        to={link} 
                        key={text} 
                        color={isActiveLink ? "brand.primary" : "brand.black"}
                        fontWeight={isActiveLink ? "600" : "400"}
                        _hover={{
                            color: "brand.primary",
                            fontWeight: '600',
                            textDecoration:'none'
                        }}
                        display={'inline-block'} padding={'20px 10px'} borderBottom={'1px solid'} borderBottomColor={'brand.pink'}
                    >
                        {text}
                    </CustomLink>
                )
            })} 
        </Flex>
    )
}

export default ProfileNavigation