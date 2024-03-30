import { Box, Text } from "@chakra-ui/react"
import CustomLink from "../CustomLink/CustomLink"
import STATUS_VALUES from '../../const/statusValues'
import {formatDate} from '../../utils'

const CaseCard = ({ocurrence}) => {
    const {name: status} = STATUS_VALUES.find((item) => {
        return item.value === ocurrence.status
    })

    const formatedDate = formatDate(ocurrence.createdAt, true)

    return (
        <CustomLink to={`/mis-casos/${ocurrence._id}`} 
            display={'inline-block'} border={'1px solid'} borderColor={'brand.primaryLight'}
            _hover={{
                bgColor: 'brand.primaryUltraLight'
            }}
        >
            <Box padding={'20px'}>
                <p>Estado: {status}</p>
                <Text noOfLines={[2, 2, 3, 3]}>
                    {ocurrence.victim}
                </Text>
                <Text fontSize={'13px'}>
                    Fecha de apertura: {formatedDate}
                </Text>
            </Box>
        </CustomLink>
    )
}

export default CaseCard