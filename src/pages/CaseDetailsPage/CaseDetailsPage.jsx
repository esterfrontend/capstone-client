import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import { Flex } from "@chakra-ui/react";
import GoBackLink from "../../Components/GoBackLink/GoBackLink";
import CaseDetails from "../../Components/CaseDetails/CaseDetails";
import RelatedUser from "../../Components/RelatedUser/RelatedUser";
import { useLoaderData } from 'react-router-dom'

function CaseDetailsPage() {
    const { ocurrence, comments } = useLoaderData()

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