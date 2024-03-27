import { Box } from "@chakra-ui/react";

const CaseDetails = ({caseDetails, ...props}) => {
    return (
        <Box {...props}>
            <p><strong>Estado:</strong> {caseDetails.state}</p>

            { caseDetails.victim
                ? (
                <div>
                    <p><strong>Víctima</strong></p>
                    <p>{caseDetails.victim}</p>
                </div>
                ): <></>
            }

            { caseDetails.place
                ? (
                <div>
                    <p><strong>Dónde sufre acoso</strong></p>
                    {
                        caseDetails.place.atSchool
                            ? <p>En el colegio</p>
                            : <></>
                    }
                    {
                        caseDetails.place.outside
                            ? <p>Fuera del colegio</p>
                            : <></>
                    }
                    {
                        caseDetails.place.socialMedia
                            ? <p>El las redes sociales</p>
                            : <></>
                    }
                </div>
                ): <></>
            }

            { caseDetails.how
                ? (
                <div>
                    <p><strong>Cómo sufre acoso</strong></p>
                    <p>{caseDetails.how}</p>
                </div>
                ): <></>
            }

            { caseDetails.attacker
                ? (
                <div>
                    <p><strong>Atacantes</strong></p>
                    <p>{caseDetails.attacker}</p>
                </div>
                ): <></>
            }

            { caseDetails.moreInformation
                ? (
                <div>
                    <p><strong>Más información</strong></p>
                    <p>{caseDetails.moreInformation}</p>
                </div>
                ): <></>
            }

            <div>
                <p><strong>Informante</strong></p>
                <p>{caseDetails.informant.anonymous === true ? 'Anónimo' : caseDetails?.informant.name}</p>
            </div>
        </Box>
    )
}

export default CaseDetails