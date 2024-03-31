import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import { Flex } from "@chakra-ui/react";
import GoBackLink from "../../Components/GoBackLink/GoBackLink";
import CaseDetails from "../../Components/CaseDetails/CaseDetails";
import RelatedUser from "../../Components/RelatedUser/RelatedUser";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import casesService from '../../services/cases.service'
import commentsService from '../../services/comments.service'

function CaseDetailsPage() {
    const [ocurrence, setOcurrence] = useState({
        professional: {
            avatar:'',
            anonymous: '',
        },
        school: {
            contactPerson:'',
            phone: ''
        }

    })
    const [comments, setComments] = useState([])

    const {case_id} = useParams()

    const getOcurrenceData = async () => {
        const oneOcurrence = await casesService.getOneCase(case_id)
        const allComments = await commentsService.getAllComments(case_id)
        setOcurrence(oneOcurrence)
        setComments(allComments)
    }

    useEffect(() => {
        getOcurrenceData()
    }, [])

    return (
        <PageWrapper className="container" marginTop={'20px'}>

            <GoBackLink to="/mis-casos" />

            <Flex gap={'70px'} justifyContent={'space-between'}>
                <CaseDetails
                    as='main' 
                    caseDetails={ocurrence} 
                    comments={comments}
                    marginTop={'30px'} 
                    marginBottom={'60px'}
                />
                
                <RelatedUser 
                    as='aside'
                    caseDetails={ocurrence} 
                    w={'30%'} 
                    minWidth={'350px'} 
                    position={'relative'}
                    bgColor={'brand.pinkUltraLight'}
                />
            </Flex>
        </PageWrapper>
    );
}

export default CaseDetailsPage;