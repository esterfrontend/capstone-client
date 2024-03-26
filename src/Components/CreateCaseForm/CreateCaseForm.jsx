import CustomForm from '../../Components/CustomForm/CustomForm';
import CASE_INPUTS from '../../const/caseInputs'
import { useState } from 'react';
import CasesService from '../../services/cases.service';
import CreateCaseField from '../CreateCaseField/CreateCaseField';
import { useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

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
    const [placesValues, setPlacesValuess] = useState('')

    const toast = useToast()
    const navigate = useNavigate()

    const onChange = (e) => {
        const { name, value } = e.target
        
        if (name === 'place') {
            console.log('checked', e.target.checked)
            setPlacesValuess(value + ' - ' + placesValues)
        }
        
        if(name === 'anonymous') {
            let boolIsAnonymous = (value === 'true')
            setIsAnonymous(boolIsAnonymous)
        }
        
        setCaseData({ ...caseData, [name]: value })
    }
    
    console.log(placesValues)


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

    return (<>
        <CustomForm onSubmit={onSubmit} buttonText="Enviar" maxW={'1000px'} margin={'0 auto'}>
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
                        index={index} 
                        hidden={hidden}
                    />
                )
            })}

            {/* {isAnonymous 
                ? <CreateCaseField onSubmit={onSubmit} input={input} index={index}/>
                : <></>
            } */}
        </CustomForm>
    </>)
}

export default CreateCaseForm