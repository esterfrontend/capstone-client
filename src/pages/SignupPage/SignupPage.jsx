import React, { useEffect, useState } from "react"
import authService from "../../services/auth.service"
import MainHeading from '../../Components/MainHeading/MainHeading';
import TextBlock from '../../Components/TextBlock/TextBlock';
import { Box, Flex, Grid, Text, useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import SignupForm from "../../Components/SignupForm/SignupForm"
import FieldForm from "../../Components/FieldForm/FieldForm"
import { ROLE_INPUTS } from "../../const/signupInputs"
import SIGNUP_INPUTS from '../../const/signupInputs'
import SubmitButton from "../../Components/SubmitButton/SubmitButton"

const SignupPage = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        role: '',
        name: '',
        registrationNumber: '',
        address: '',
        postalCode: '',
        province: '',
        contactPerson: '',
        phone: '',
        phoneSecondary: '',
        professional: ''
    })

    const [roleValue, setRoleValue] = useState('')

    const toast = useToast()
    const navigate = useNavigate()

    const onChange = (e) => {
        const { name, value } = e.target
        if(name === 'role') {
            setRoleValue(value)
        }
        setUserData({ ...userData, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await authService.signup(userData)
            toast({
                title: "Gracias!",
                description: "Tu cuenta ha sido creada.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            navigate("/inicio-sesion")
        } catch (error) {
            console.log("Error ==>", error)
        }
    }

    return (
        <>
            <MainHeading>
                Crea una cuenta
            </MainHeading>
            <TextBlock>
                <p>Desde Actúo contra el Bullying y en nombre de todos los niños y familiares que sufren cada día por el acoso escolar, queremos agradecerte que te unas a esta iniciativa, porque nuestra prioridad es la salud y felicidad de los niños. ¡Luchemos juntos contra el acoso escolar!</p> 
                <p><strong>¡Gracias por actuar!</strong></p>
            </TextBlock>
        
            <Flex as='form' onSubmit={onSubmit} direction={'column'} gap={'20px'} alignItems={'center'} maxW={'1000px'} margin={'0 auto 50px'} padding={'0 50px'}>                    
                <Box textAlign={'center'}>
                    <Text fontSize={'14px'} marginTop={'20px'} marginBottom={'5px'}>¿Qué tipo de usuario eres?</Text>
                    <FieldForm onChange={onChange} 
                        input={ROLE_INPUTS} 
                        options={ROLE_INPUTS.options}
                    />
                </Box>

                { roleValue ? (
                    <Grid  templateColumns={[
                            "repeat(1, 1fr)",
                            "repeat(2, 1fr)",
                            "repeat(3, 1fr)",
                            "repeat(3, 1fr)",
                        ]} 
                        gap={'10px 30px'}
                    >
                        {SIGNUP_INPUTS.map((input, index) => {
                            if( input.role === roleValue || !input.role) {
                                let valueOptions = ''
                                let nameOptions = ''
                                
                                if(input.name === 'province') {
                                    valueOptions = 'name'
                                    nameOptions = 'name'
                                }

                                return (
                                    <Box key={index} w={'100%'}>
                                        <SignupForm 
                                            onChange={onChange} 
                                            input={input} 
                                            index={index} 
                                            valueOptions={valueOptions}
                                            nameOptions={nameOptions}
                                        />
                                    </Box>
                                )
                            }
                        })}
                    </Grid>
                ) : <></> }

                { roleValue === 'colegio' ? (
                    <h2>Elige psicólogo</h2>
                ) : <></> }

                { roleValue ? (
                    <SubmitButton text='Enviar' type="submit"/>
                ) : <></> }
            </Flex>
        </>
    )
}

export default SignupPage
