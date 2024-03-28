import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import ProfilePageLayout from "../../Components/ProfilePageLayout/ProfilePageLayout"
import { Box, Text, Flex, useDisclosure } from "@chakra-ui/react"
import CustomLink from "../../Components/CustomLink/CustomLink"
import Button from "../../Components/Button/Button"
import CustomModal from "../../Components/CustomModal/CustomModal"

const ProfilePage = () => {
    const { user, removeUser } = useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const {
        role,
        email,
        name,
        registrationNumber,
        address,
        postalCode,
        province,
        contactPerson,
        phone,
        phoneSecondary
    } = user

    return (
        <ProfilePageLayout pageTitle={role === 'colegio' ? 'Colegio ' + name : name}>

            {(registrationNumber)
                ? (
                    <Box m={'30px 0'}>
                        <Text fontWeight={'600'}>
                            Nº de colegiado:
                        </Text>
                        <Text>{registrationNumber}</Text>
                    </Box>
                ) : <></>
            }

            <Box m={'30px 0'}>
                <Text fontWeight={'600'}>
                    Dirección:
                </Text>
                <Text>{address}</Text>
                <Text>{postalCode}, {province}</Text>
            </Box>

            <Box m={'30px 0'}>
                <Text fontWeight={'600'}>
                    Email:
                </Text>
                <CustomLink to={`mailto:${email}`}>
                    {email}
                </CustomLink>
            </Box>

            <Box m={'30px 0'}>
                <Text fontWeight={'600'}>
                    Teléfono:
                </Text>
                <CustomLink to={`tel:${phone}`}>
                    {phone}
                </CustomLink>
                {phoneSecondary
                    ? (<>
                        <Text as="span"> / </Text>
                        <CustomLink to={`tel:${phoneSecondary}`}>
                            {phoneSecondary}
                        </CustomLink>
                    </>
                    ) : <></>
                }
            </Box>

            {(contactPerson)
                ? (
                    <Box m={'30px 0'}>
                        <Text fontWeight={'600'}>
                            Persona de contacto:
                        </Text>
                        <Text>
                            {contactPerson}
                        </Text>
                    </Box>
                ) : <></>
            }

            <Button onClick={onOpen}>
                Eliminar cuenta
            </Button>

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
                    
                    <Button onClick={removeUser}>
                        Eliminar cuenta
                    </Button>
                </Flex>
            </CustomModal>
            

        </ProfilePageLayout>
    )
}

export default ProfilePage