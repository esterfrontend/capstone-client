import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import ProfilePageLayout from "../../Components/ProfilePageLayout/ProfilePageLayout"
import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react"
import CustomLink from "../../Components/CustomLink/CustomLink"
import Button from "../../Components/Button/Button"
import CustomModal from "../../Components/CustomModal/CustomModal"
import UserDetails from "../../Components/UserDetails/UserDetails"
import RemoveButton from "../../Components/RemoveButton/RemoveButton"

const ProfilePage = () => {
    const { user, removeUser } = useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {role, name} = user

    return (
        <ProfilePageLayout pageTitle={role === 'colegio' ? 'Colegio ' + name : name}>

            <UserDetails user={user}/>

            <RemoveButton onClick={onOpen}>
                Eliminar cuenta
            </RemoveButton>

            <CustomModal 
                isOpen={isOpen} 
                onClose={onClose}
                title={'¿Estás seguro de querer eliminar la cuenta?'}    
            >
                <Box mb={'30px'}>
                    <Text>
                        Al eliminar esta cuenta dejarás de recibir avisos sobre casos de bullying en los que puedas ayudar. 
                    </Text>
                    <Text>
                        Si realmente deseas eliminarla, agradeceríamos que nos hicieras saber el motivo a través del siguiente email: 
                    </Text>
                    <CustomLink to='mailto:actuocontraelbullying@gmail.com'>actuocontraelbullying@gmail.com</CustomLink>
                </Box>         
                <Flex gap={'20px'} justify={'flex-end'} mb={'20px'}>
                    <Button onClick={onClose}>
                        Cancelar
                    </Button>
                
                    <RemoveButton onClick={removeUser}>
                        Eliminar cuenta
                    </RemoveButton>
                </Flex>
            </CustomModal>
            

        </ProfilePageLayout>
    )
}

export default ProfilePage