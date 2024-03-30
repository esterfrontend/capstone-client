import { Box, Text } from "@chakra-ui/react"
import FieldForm from '../FieldForm/FieldForm';

const SignupForm = ({ input, index, ...props}) => {
    return (
        <Box key={index}>
            <Text fontSize={'14px'} marginTop={'20px'} marginBottom={'5px'}>{input.text}</Text>
            <FieldForm {...props} input={input} options={input.options} />
        </Box>
    )
}

export default SignupForm