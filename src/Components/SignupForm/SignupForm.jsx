import { Box, Text } from "@chakra-ui/react"
import FieldForm from '../FieldForm/FieldForm';

const SignupForm = ({onChange, input, index, valueOptions, nameOptions}) => {
    return (
        <Box key={index}>
            <Text fontSize={'14px'} marginTop={'20px'} marginBottom={'5px'}>{input.text}</Text>
            <FieldForm onChange={onChange} input={input} options={input.options} valueOptions={valueOptions} nameOptions={nameOptions}/>
        </Box>
    )
}

export default SignupForm