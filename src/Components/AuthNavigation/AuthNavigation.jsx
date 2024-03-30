import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import AuthLink from '../AuthLink/AuthLink'
import { Flex } from "@chakra-ui/react"

const AuthNavigation = ({...props}) => {
    const { user, logout } = useContext(AuthContext)
    
    return (
        <Flex {...props}>
            { user ? (
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
    )
}

export default AuthNavigation