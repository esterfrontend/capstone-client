import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import CustomLink from '../CustomLink/CustomLink'

const professionalImage = 'https://res.cloudinary.com/dsywb80za/image/upload/v1711458341/user-professional_wyyxkf.svg'

const RelatedUser = ({caseDetails, ...props}) => {
    const { user } = useContext(AuthContext)

    return (
        <Box {...props}>
            <Box position={'fixed'} w={'100%'} maxW={'350px'} p={'25px'}>
                {user.role === 'colegio' 
                ?(
                    <div>
                        <Flex alignItems={'center'} gap={'15px'} marginBottom={'20px'}>
                            <Image
                                src={caseDetails.professional.avatar ? caseDetails.professional.avatar : professionalImage} 
                                alt={`Avatar ${caseDetails.professional.name} ${caseDetails.professional.surname}`}
                                w={'80px'}
                            />
                            
                            <Heading fontSize={'23px'} fontWeight={'bold'}>{caseDetails.professional.name}<br></br> {caseDetails.professional.surname}</Heading>
                        </Flex>
                        <Text><strong>Teléfono: </strong>
                            <CustomLink to='tel:{caseDetails.professional.phone}'>
                                {caseDetails.professional.phone}
                            </CustomLink>
                        </Text>
                        <Text><strong>Email: </strong>
                            <CustomLink to='tmailtoel:{caseDetails.professional.email}'>
                                {caseDetails.professional.email}
                            </CustomLink>
                        </Text>
                        <Text><strong>Dirección: </strong>{caseDetails.professional.address}, {caseDetails.professional?.postalCode}, {caseDetails.professional.province}</Text>
                        <Text><strong>Nº de colegiado: </strong>{caseDetails.professional.registrationNumber}</Text>
                    </div>
                ):(
                    <div>
                        <Heading fontSize={'23px'} fontWeight={'bold'} marginBottom={'20px'}>Colegio {caseDetails.school?.name}</Heading>
                        <Text><strong>Persona de contacto: </strong>{caseDetails.school.contactPerson}</Text>
                        <Text><strong>Teléfono: </strong>
                            <CustomLink to='tel:{caseDetails.professional.phone}'>
                                {caseDetails.school.phone}
                            </CustomLink>
                            /
                            <CustomLink to='tel:{caseDetails.professional.phoneSecondary}'>
                                {caseDetails.school.phoneSecondary}
                            </CustomLink>
                        </Text>
                        <Text><strong>Email: </strong>
                            <CustomLink to='tmailtoel:{caseDetails.professional.email}'>
                                {caseDetails.school.email}
                            </CustomLink>
                        </Text>
                        <Text><strong>Dirección: </strong>{caseDetails.school.address}, {caseDetails.school?.postalCode}, {caseDetails.school.province}</Text>
                    </div>
                )}
            </Box>
        </Box>
    )
}

export default RelatedUser