import { Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";

const Complaint = ({caseDetails}) => {
    return (
        <Box>
            { caseDetails.victim
                ? (
                    <Box mb={'30px'}>
                        <Text><strong>Víctima</strong></Text>
                        <Text>{caseDetails.victim}</Text>
                    </Box>
                ): <></>
            }

            { caseDetails.place
                ? (
                    <Box mb={'30px'}>
                        <Text><strong>Dónde sufre acoso</strong></Text>
                        <UnorderedList>
                            {
                                caseDetails.place.atSchool
                                    ? <ListItem>En el colegio</ListItem>
                                    : <></>
                            }
                            {
                                caseDetails.place.outside
                                ? <ListItem>Fuera del colegio</ListItem>
                                : <></>
                            }
                            {
                                caseDetails.place.socialMedia
                                ? <ListItem>El las redes sociales</ListItem>
                                : <></>
                            }
                        </UnorderedList>
                    </Box>
                ): <></>
            }

            { caseDetails.how
                ? (
                    <Box mb={'30px'}>
                        <Text><strong>Cómo sufre acoso</strong></Text>
                        <Text>{caseDetails.how}</Text>
                    </Box>
                ): <></>
            }

            { caseDetails.attacker
                ? (
                    <Box mb={'30px'}>
                        <Text><strong>Atacantes</strong></Text>
                        <Text>{caseDetails.attacker}</Text>
                    </Box>
                ): <></>
            }

            { caseDetails.moreInformation
                ? (
                    <Box mb={'30px'}>
                        <Text><strong>Más información</strong></Text>
                        <Text>{caseDetails.moreInformation}</Text>
                    </Box>
                ): <></>
            }

            <Box mb={'30px'}>
                <p><strong>Informante:</strong></p>
                {(caseDetails.informant)
                    ? <p>{caseDetails.informant.anonymous === true ? 'Anónimo' : caseDetails?.informant.name}</p>
                    : <></>
                }
            </Box>
      
        </Box>
    )
}

export default Complaint