import CustomForm from '../../Components/CustomForm/CustomForm';
import { Box, Text } from "@chakra-ui/react"
import NumberedTitle from "../NumberedTitle/NumberedTitle"
import FieldForm from '../FieldForm/FieldForm';
// import { useEffect, useState } from 'react';
import CASE_INPUTS from '../../const/caseInputs'

const CreateCaseForm = ({onSubmit}) => {
    return ( <>
        <CustomForm onSubmit={onSubmit} buttonText="Enviar" maxW={'1000px'} margin={'0 auto'}>
            { CASE_INPUTS.map((input, index) => {
                return (
                    <Box padding={'30px'} key={index}>
                        <NumberedTitle 
                            number={index+1} 
                            title={input.title}
                        />
                        <Text fontSize={'14px'} marginTop={'20px'} marginBottom={'20px'}>{input.text}</Text>
                        <FieldForm input={input} options={input.options}/>
                    </Box>
                )
            })}
        </CustomForm>
    </>)
}

export default CreateCaseForm