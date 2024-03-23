import CustomForm from '../../Components/CustomForm/CustomForm';
import { Box, Text } from "@chakra-ui/react"
import FieldForm from '../FieldForm/FieldForm';
import SIGNUP_INPUTS from '../../const/signupInputs'

const SignupForm = ({onSubmit}) => {
    return ( <>
        <CustomForm onSubmit={onSubmit} buttonText="Enviar" maxW={'1000px'} margin={'0 auto'}>
            { SIGNUP_INPUTS.map((input, index) => {
                return (
                    <Box key={index}>
                        <Text fontSize={'14px'} marginTop={'20px'} marginBottom={'5px'}>{input.text}</Text>
                        <FieldForm input={input} options={input.options}/>
                    </Box>
                )
            })}
        </CustomForm>
    </>)
}

export default SignupForm