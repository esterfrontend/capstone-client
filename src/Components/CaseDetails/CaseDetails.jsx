import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Text, Select} from "@chakra-ui/react";
import Complaint from "../Complaint/Complaint";
import casesService from "../../services/cases.service";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext"
import SimpleForm from "../SimpleForm/SimpleForm";
import STATUS_VALUES from '../../const/statusValues'
import { useToast } from "@chakra-ui/react"

const CaseDetails = ({caseDetails, ...props}) => {
    const { user } = useContext(AuthContext)
    const toast = useToast()

    const { _id: case_id } = caseDetails

    const COMMENTS_INPUT = [
        {
            type: 'textarea',
            name: 'comments',
            placeholder: 'Escribe aquí tu comentario',
        }
    ]

    const onChangeStatus = async (e) => {
        const newStatus = e.target.value

        try {
            await casesService.editcase(
                case_id,
                {status: newStatus}
            )

            toast({
                title: "El estado de este caso ha sido modificado.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        } catch (err) {
            console.error(err)
            toast({
                title: "Ha ocurrido un error.",
                description: "El estado no ha podido modificarse correctamente.",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
        
    }

    const onChange = (e) => {

    }

    const onSubmit = async (e) => {

    }
    
    return (
        <Box {...props} flex={'1'}>
            <Box w={'80%'} mb={'50px'}>
                <Text fontSize={'20px'} fontWeight={'600'}>Estado</Text>
                <Text>Modifica el estado del caso conforme se vayan realizando avances. Este estado también puede ser modificado por el {user.role === 'colegio' ? 'psicólogo' : 'colegio'} asociado.</Text>
                { user.role === 'colegio' ? (
                    <Text>Recuerda que debe ser el psicólogo quien marque las pautas durante todo el proceso.</Text> 
                ) : <></>}

                <Select onChange={onChangeStatus} maxW={'250px'}
                    defaultValue={caseDetails.status}
                >
                    {
                        STATUS_VALUES.map((option, index)=> {
                            return <option key={index} value={option.value}>{option.name}</option>
                        })
                    }
                </Select>
            </Box>

            <Box w={'80%'} mb={'100px'}>
                <Text fontSize={'20px'} fontWeight={'600'}>Añade un comentario sobre el caso</Text>

                <SimpleForm
                    alignItems={'flex-start'}
                    onChange={onChange}
                    onSubmit={onSubmit}
                    inputs={COMMENTS_INPUT}
                    buttonText={'Guardar comentario'}
                />
            </Box>

            <Tabs variant='unstyled'>
                <TabList>
                    <Tab padding={'10px 30px'} _selected={{ fontWeight: '600', bg: 'brand.primaryLight' }}>Denuncia</Tab>
                    <Tab padding={'10px 30px'} _selected={{ fontWeight: '600', bg: 'brand.primaryLight' }}>Comentarios</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel border={'1px solid'} padding={'30px'} borderColor={'brand.primaryLight'}>
                        <Complaint caseDetails={caseDetails}/>
                    </TabPanel>
                    <TabPanel border={'1px solid'} padding={'30px'} borderColor={'brand.primaryLight'}>
                        <p>Todavía no hay ningún comentario!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default CaseDetails