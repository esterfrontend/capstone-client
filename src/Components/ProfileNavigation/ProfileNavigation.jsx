import { Flex } from "@chakra-ui/react"
import { useLocation } from 'react-router-dom'
import './ProfileNavigation.css'
import CustomLink from "../CustomLink/CustomLink"
import React, { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

const ProfileNavigation = () => {
    const { user } = useContext(AuthContext)
    
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
            link: '/psicologo-asociado',
            roleHidden: 'profesional'
        },
        {
            text: 'Colegios asociados',
            link: '/colegios-asociados',
            roleHidden: 'colegio'
        }
    ]
    const location = useLocation()

    
    return (
        <Flex className={'profile-navigation'} direction={'column'} bgColor={'brand.pinkUltraLight'} padding={'5px 20px'} margin={'0px'} listStyleType={'none'} minW={'250px'} w={['100%', '100%', 'auto']}>
            { PROFILE_NAVIGATION.map(({ link, text, roleHidden }, index) => {
                const isActiveLink = location.pathname === link

                return user.role === roleHidden
                    ? <React.Fragment key={link}></React.Fragment>
                    : (
                        <CustomLink 
                            to={link} 
                            key={index} 
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