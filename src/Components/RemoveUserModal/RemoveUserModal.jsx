import { Box, Flex, Text } from "@chakra-ui/react"
import CustomModal from "../CustomModal/CustomModal"
import CustomLink from "../CustomLink/CustomLink"
import Button from "../Button/Button"
import RemoveButton from "../RemoveButton/RemoveButton"

const RemoveUserModal = ({isOpen, onClose, removeUser}) => {
    return (
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
            <Flex gap={'20px'} justify={'flex-end'} mb={'20px'} flexDirection={['column', 'row']}>
                <Button onClick={onClose}>
                    Cancelar
                </Button>
            
                <RemoveButton onClick={removeUser}>
                    Eliminar cuenta
                </RemoveButton>
            </Flex>
        </CustomModal>
    )
}

export default RemoveUserModal