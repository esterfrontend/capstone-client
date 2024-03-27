import CustomForm from '../../Components/CustomForm/CustomForm';
import CASE_INPUTS from '../../const/caseInputs'
import { useState } from 'react';
import CasesService from '../../services/cases.service';
import CreateCaseField from '../CreateCaseField/CreateCaseField';
import { useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { useLoaderData } from 'react-router-dom';

const CreateCaseForm = () => {

    const [caseData, setCaseData] = useState({
        school_id: '',
        victim: '',
        place: '',
        how: '',
        attacker: '',
        moreInformation: '',
        anonymous: '',
        informantName: '',
    })

    const [isAnonymous, setIsAnonymous] = useState(true)
    const [placesValues, setPlacesValuess] = useState({
        atSchool: false,
        outside: false,
        socialMedia: false
    })

    const toast = useToast()
    const navigate = useNavigate()

    const onChange = (e) => {
        let { name, value, checked } = e.target
        
        if (name === 'place') {
            setPlacesValuess({ ...placesValues, [value]: checked})
            value = placesValues
        }
        
        if(name === 'anonymous') {
            let boolIsAnonymous = (value === 'true')
            setIsAnonymous(boolIsAnonymous)
        }
        
        setCaseData({ ...caseData, [name]: value })
    }

    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            
            console.log("create", caseData)
            await CasesService.createCase(caseData)
            setCaseData({
                school_id: '',
                victim: '',
                place: '',
                how: '',
                attacker: '',
                moreInformation: '',
                anonymous: '',
                informantName: '',
            })
            toast({
                title: "Gracias por tu colaboración.",
                description: "El colegio y el psicólogo han recibido el aviso para que puedan solucionarlo lo antes posible.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            navigate("/")

        } catch (err) {
            console.error(err)
        }
    }

    const schoolsData = useLoaderData()

    const SCHOOLS_INPUT = {
        type: 'select',
        name: 'school_id',
        placeholder: 'Selecciona el colegio',
        title: '¿En qué colegio se da el caso?',
        text: 'Selecciona en el desplegable el colegio. Si no aparece en el listado, puede que el colegio no esté inscrito en el programa.',
        options: {
            data: schoolsData,
        }
    }

    return (<>
        <CustomForm onSubmit={onSubmit} buttonText="Enviar" maxW={'1000px'} margin={'0 auto'}>
            <CreateCaseField 
                onSubmit={onSubmit} 
                onChange={onChange}
                input={SCHOOLS_INPUT} 
                index={0} 
                valueOptions={'_id'}
                nameOptions={'name'}
            />
            {CASE_INPUTS.map((input, index) => {
                let hidden = true
                
                input.name === 'informantName' && isAnonymous === true
                    ? hidden = true
                    : hidden = false                

                return (
                    <CreateCaseField 
                        key={index} 
                        onSubmit={onSubmit} 
                        onChange={onChange}
                        input={input} 
                        index={index +1} 
                        hidden={hidden}
                    />
                )
            })}
        </CustomForm>
    </>)
}

export default CreateCaseForm