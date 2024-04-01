import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, Text, Select} from "@chakra-ui/react";
import Complaint from "../Complaint/Complaint";
import casesService from "../../services/cases.service";
import commentsService from "../../services/comments.service";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext"
import SimpleForm from "../SimpleForm/SimpleForm";
import STATUS_VALUES from '../../const/statusValues'
import { useToast } from "@chakra-ui/react"
import Comments from "../Comments/Comments";

const CaseDetails = ({caseDetails, comments, ...props}) => {
    const { user } = useContext(AuthContext)
    const toast = useToast()
    const [commentText, setCommentText] = useState(null)


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

    const onChangeComment = (e) => {
        setCommentText(e.target.value)
    }

    const onSubmitComment = async (e) => {
        e.preventDefault()

        const newComment = {
            text: commentText,
            case_id: case_id
        }

        try {
            await commentsService.createComment(newComment)

            toast({
                title: "Tu comentario ha sido añadido.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        } catch (err) {
            console.error(err)
            toast({
                title: "Ha ocurrido un error.",
                description: "El comentario no ha podido añadirse correctamente.",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
    }
    
    return (
        <Box {...props} flex={'1'}>
            <Box w={['100%', '100%', '100%', '80%']} mb={'50px'}>
                <Text fontSize={'20px'} fontWeight={'600'}>Estado</Text>
                <Text>Modifica el estado del caso conforme se vayan realizando avances. Este estado también puede ser modificado por el {user.role === 'colegio' ? 'psicólogo' : 'colegio'} asociado.</Text>

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

            <Box w={['100%', '100%', '100%', '80%']} mb={'100px'}>
                <Text fontSize={'20px'} fontWeight={'600'}>Añade un comentario sobre el caso</Text>
                <Text>Ten en cuenta que los comentarios no se pueden editar ni eliminar. </Text>

                <SimpleForm
                    alignItems={'flex-start'}
                    onChange={onChangeComment}
                    onSubmit={onSubmitComment}
                    inputs={COMMENTS_INPUT}
                    buttonText={'Guardar comentario'}
                />
            </Box>

            <Tabs variant='enclosed'>
                <TabList>
                    <Tab>Denuncia</Tab>
                    <Tab>Comentarios</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Complaint caseDetails={caseDetails}/>
                    </TabPanel>
                    <TabPanel>
                        <Comments comments={comments} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default CaseDetails