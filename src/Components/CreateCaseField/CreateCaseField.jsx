import { Box, Text } from "@chakra-ui/react"
import NumberedTitle from "../NumberedTitle/NumberedTitle"
import FieldForm from "../FieldForm/FieldForm"

const CreateCaseField = ({onChange, index, input, hidden, valueOptions, nameOptions}) => {
    return (
        <Box padding={'30px'} display={hidden===true ? 'none' : 'inline-block'}
            >
            <NumberedTitle
                number={index + 1}
                title={input.title}
            />
            <Text fontSize={'14px'} marginTop={'20px'} marginBottom={'20px'}>{input.text}</Text>
            <FieldForm input={input} options={input.options} onChange={onChange} valueOptions={valueOptions} nameOptions={nameOptions} placeholder={input.placeholder} />
        </Box>
    )
}

export default CreateCaseField