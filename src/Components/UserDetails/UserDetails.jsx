import { Box, Heading, Text } from "@chakra-ui/react"
import CustomLink from "../../Components/CustomLink/CustomLink"

const UserDetails = ({user}) => {
    const {
        name,
        role,
        email,
        registrationNumber,
        address,
        postalCode,
        province,
        contactPerson,
        phone,
        phoneSecondary
    } = user

    return (<>

        {(role === 'colegio') &&
            <Box m={'30px 0'}>
                <Heading as={'h2'} fontSize={['22px', '22px', '24px']}>{name}</Heading>
            </Box>
        }

        {(registrationNumber) &&
            <Box m={'30px 0'}>
                
                <Text fontWeight={'600'}>
                    Nº de colegiado:
                </Text>
                <Text>{registrationNumber}</Text>
            </Box>
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
    </>)
}

export default UserDetails