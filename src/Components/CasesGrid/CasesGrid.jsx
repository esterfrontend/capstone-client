import { Flex } from "@chakra-ui/react"
import CaseCard from "../CaseCard/CaseCard"

const CasesGrid = ({cases}) => {
    return (
        <Flex direction={'column'} gap={'30px'}>
            { cases.map((ocurrence, index) => {
                return (
                    <CaseCard ocurrence={ocurrence} key={index}/>
                )
            })}
        </Flex>
    )
}

export default CasesGrid