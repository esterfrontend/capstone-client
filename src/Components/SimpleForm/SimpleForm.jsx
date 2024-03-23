import { Box, FormLabel } from "@chakra-ui/react"
import CustomForm from "../../Components/CustomForm/CustomForm"
import FieldForm from "../FieldForm/FieldForm"

const SimpleForm = ({inputs, onChange, onSubmit, ...props}) => {
    return (
        <CustomForm {...props} onSubmit={onSubmit}>
            { 
                inputs.map((input, index) => (
                    <Box key={index} w={'100%'}>
                        <FormLabel>{input.label}</FormLabel>
                        <FieldForm onChange={onChange} key={index} input={input}/>
                    </Box>
                ))
            }
        </CustomForm>
    )
}

export default SimpleForm