import { useState, useContext, useEffect } from "react"
import authService from "../../services/auth.service"
import MainHeading from '../../Components/MainHeading/MainHeading';
import TextBlock from '../../Components/TextBlock/TextBlock';
import { Box, Flex, Grid, Text, useToast } from "@chakra-ui/react"
import SignupForm from "../../Components/SignupForm/SignupForm"
import FieldForm from "../../Components/FieldForm/FieldForm"
import Button from "../../Components/Button/Button"
import { ROLE_INPUTS } from "../../const/signupInputs"
import SIGNUP_INPUTS from '../../const/signupInputs'
import SubmitButton from "../../Components/SubmitButton/SubmitButton"
import { useLoaderData } from 'react-router-dom';
import ProfessionalSelector from '../../Components/ProfessionalSelector/ProfessionalSelector';
import { AuthContext } from '../../contexts/AuthContext'
import Loading from "../../Components/Loading/Loading"
import MyLocation from "../../Components/MyLocation/MyLocation";

const apiKey = process.env.REACT_APP_GOOGLEMAPS_APIKEY

const SignupPage = () => {
    const { login } = useContext(AuthContext)
    const professionals = useLoaderData()
    const [isLoading, setIsLoading] = useState(false)

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        role: '',
        name: '',
        registrationNumber: '',
        address: '',
        postalCode: '',
        province: '',
        position: {},
        contactPerson: '',
        phone: '',
        phoneSecondary: '',
        professional_id: null
    })

    const [unstructuredAddress, setUnstructuredAddress] = useState({
        address: null,
        postalCode: null,
        province: null
    });
    const [completeAddress, setCompleteAddress] = useState(null)
    const [loadMap, setLoadMap] = useState(false)
    const [errorDirection, setErrorDirection] = useState(false)

    const [roleValue, setRoleValue] = useState('')

    const toast = useToast()

    const onChange = (e) => {
        const { name, value } = e.target
        if(name === 'role') {
            setRoleValue(value)
        }
        setUserData({ ...userData, [name]: value })

        if(name === 'address' || name === 'postalCode' || name === 'province') {
            setUnstructuredAddress({...unstructuredAddress, [name]: value})
        }

    }

    const onSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        handleGeocodeAddress()

        try {
            await authService.signup(userData)
            toast({
                title: "Gracias!",
                description: "Tu cuenta ha sido creada.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        } catch (error) {
            console.log("Error ==>", error)
        } finally {
            setIsLoading(false)
        }

        await login(userData)
    }

    useEffect(() => {
        if (unstructuredAddress.address && unstructuredAddress.postalCode && unstructuredAddress.province) {
            setCompleteAddress(`${unstructuredAddress.address}, ${unstructuredAddress.postalCode}, ${unstructuredAddress.province}`);
        }
    }, [unstructuredAddress]);

    
    const handleGeocodeAddress = async () => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(completeAddress)}&key=${apiKey}`);
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                const { lat, lng } = data.results[0].geometry.location;
                setUserData({ ...userData, position: { lat, lng } })
                setLoadMap(true)
                setErrorDirection(false)
            } else {
                setErrorDirection(true)
            }
        } catch (error) {
            console.error('Error al obtener la posición desde la dirección:', error);
        }
    }

    if (isLoading) return <Loading />
    
    return (
        <>
            <MainHeading>
                Crea una cuenta
            </MainHeading>
            <TextBlock>
                <p>Desde Actúo contra el Bullying y en nombre de todos los niños y familiares que sufren cada día por el acoso escolar, queremos agradecerte que te unas a esta iniciativa, porque nuestra prioridad es la salud y felicidad de los niños. ¡Luchemos juntos contra el acoso escolar!</p> 
                <p><strong>¡Gracias por actuar!</strong></p>
            </TextBlock>
        
            <Flex as='form' onSubmit={onSubmit} direction={'column'} gap={'20px'} alignItems={'center'} maxW={'1000px'} margin={'0 auto 100px'} padding={'0 50px'}>                    
                <Box textAlign={'center'}>
                    <Text fontSize={'14px'} marginTop={'20px'} marginBottom={'5px'}>¿Qué tipo de usuario eres?</Text>
                    <FieldForm onChange={onChange} 
                        input={ROLE_INPUTS} 
                        options={ROLE_INPUTS.options}
                    />
                </Box>

                { roleValue ? (<>
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
                    </>
                ) : <></> }


                { roleValue === 'colegio' ? (<>
                    {/* GOOGLE MAPS */}
                    <Button onClick={handleGeocodeAddress}>Guardar la dirección en google maps</Button>
                    { errorDirection &&
                        <Text>No se encuentra la dirección proporcionada</Text>
                    }
                    { loadMap &&
                        <Box w={'100%'} minW={'300px'} h={'300px'}>
                            <MyLocation position={userData.position}/>
                        </Box>
                    }

                    {/* PROFESSIONALS */}
                    <Box mt={'30px'}>
                        <Text fontSize={'18px'} textAlign={'center'} mb={'30px'} >Elige psicólogo</Text>
                        <ProfessionalSelector professionals={professionals} onChange={onChange}/>
                    </Box>
                </>
                ) : <></> }

                { roleValue ? (
                    <SubmitButton text='Crear cuenta' type="submit"/>
                ) : <></> }
            </Flex>
        </>
    )
}

export default SignupPage
