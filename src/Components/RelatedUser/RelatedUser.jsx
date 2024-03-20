import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import professionalImage from '../../resources/user-professional.svg'

const RelatedUser = ({caseDetails, ...props}) => {
    return (
        <Box {...props}>
            {/* FALTA: diferenciar por roles */}
            {/* COLEGIO */}
            <div>
                <Heading fontSize={'23px'} fontWeight={'bold'} marginBottom={'20px'}>{caseDetails.school?.name}</Heading>
                <p><strong>Contacto: </strong>{caseDetails.school.contact}</p>
                <p><strong>Teléfono: </strong>{caseDetails.school.phone}</p>
                <p><strong>Email: </strong>{caseDetails.school.email}</p>
                <p><strong>Dirección: </strong>{caseDetails.school.address}, {caseDetails.school?.postalCode}, {caseDetails.school.province}</p>
            </div>
            
            {/* PROFESIONAL */}
            <div>
                <Flex alignItems={'center'} gap={'15px'} marginBottom={'20px'}>
                    <Image
                        src={caseDetails.professional.avatar ? caseDetails.professional.avatar : professionalImage} 
                        alt={`Avatar ${caseDetails.professional.name} ${caseDetails.professional.surname}`}
                        w={'80px'}
                    />
                    
                    <Heading fontSize={'23px'} fontWeight={'bold'}>{caseDetails.professional.name}<br></br> {caseDetails.professional.surname}</Heading>
                </Flex>
                <p><strong>Teléfono: </strong>{caseDetails.professional.phone}</p>
                <p><strong>Email: </strong>{caseDetails.professional.email}</p>
                <p><strong>Dirección: </strong>{caseDetails.professional.address}, {caseDetails.professional?.postalCode}, {caseDetails.professional.province}</p>
            </div>
        </Box>
    )
}

export default RelatedUser