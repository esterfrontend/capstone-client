import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import AuthLink from '../AuthLink/AuthLink'
import { Box, Flex } from "@chakra-ui/react"
import './AuthNavigation.css'
import CustomLink from "../CustomLink/CustomLink"

const AuthNavigation = ({...props}) => {
    const { user, logout } = useContext(AuthContext)
    
    return (
        <Flex {...props}>
            { user ? (
                <>
                    <Box position={'relative'} className="dropdown-menu">
                        <AuthLink to={"/mi-perfil"}>Mi perfil</AuthLink>
                        <Flex className="dropdown-menu__list" 
                            position={'absolute'}
                            top={'22px'}
                            right={'0'} 
                            width={'max-content'}
                            flexDirection={'column'}
                            textAlign={'left'}
                            bgColor={'white'}
                            border={'2px solid'}
                            borderColor={'brand.pinkLight'}
                        >
                            <CustomLink variant={'empty'} to={"/mi-perfil"}>Mi perfil</CustomLink>
                            <CustomLink variant={'empty'} to={"/mis-casos"}>Mis casos</CustomLink>
                            {user.role === 'colegio' &&
                                <CustomLink variant={'empty'} to={"/psicologo-asociado"}>Psicólogo asociado</CustomLink>
                            }
                            {user.role === 'profesional' &&
                                <CustomLink variant={'empty'} to={"/colegios-asociados"}>Colegios asociados</CustomLink>
                            }
                        </Flex>
                    </Box>
                    <AuthLink onClick={logout}>Logout</AuthLink>
                </>
            ) : (
                <>
                    <AuthLink to={"/inicio-sesion"}>Iniciar sesión</AuthLink>
                    <AuthLink to={"/registrarse"}>Registrarse</AuthLink>
                </>
            )}
        </Flex>
    )
}

export default AuthNavigation