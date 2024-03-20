import { Box } from "@chakra-ui/react";

const CaseDetails = ({caseDetails, ...props}) => {
    return (
        <Box {...props}>
            <p><strong>Estado:</strong> {caseDetails.state}</p>
            <div>
                <p><strong>Víctima</strong></p>
                <p>{caseDetails.victim}</p>
            </div>
            <div>
                <p><strong>Dónde sufre acoso</strong></p>
                <p>{caseDetails.place}</p>
            </div>
            <div>
                <p><strong>Cómo sufre acoso</strong></p>
                <p>{caseDetails.how}</p>
            </div>
            <div>
                <p><strong>Atacantes</strong></p>
                <p>{caseDetails.attacker}</p>
            </div>
            <div>
                <p><strong>Más información</strong></p>
                <p>{caseDetails.moreInformation}</p>
            </div>
            <div>
                <p><strong>Informante</strong></p>
                <p>{caseDetails.informant.anonymous === true ? 'Anónimo' : `${caseDetails?.informant.name}, ${caseDetails?.informant.relation}, ${caseDetails?.informant.contact}`}</p>
            </div>
        </Box>
    )
}

export default CaseDetails