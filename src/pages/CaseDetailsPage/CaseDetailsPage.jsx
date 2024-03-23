import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import { useState } from 'react'
import CASE_MOCK from '../../mocks/mockCase.json'
import { Flex } from "@chakra-ui/react";
import GoBackLink from "../../Components/GoBackLink/GoBackLink";
import CaseDetails from "../../Components/CaseDetails/CaseDetails";
import RelatedUser from "../../Components/RelatedUser/RelatedUser";

function CaseDetailsPage() {

    const [caseDetails, setcaseDetails] = useState(CASE_MOCK)

    return (
        <PageWrapper className="container" marginTop={'20px'}>

            <GoBackLink to="/" />

            <Flex gap={'70px'}>
                <CaseDetails
                    as='main' 
                    caseDetails={caseDetails} 
                    marginTop={'30px'} 
                    marginBottom={'60px'}
                />
                
                <RelatedUser 
                    as='aside'
                    caseDetails={caseDetails} 
                    w={'30%'} 
                    minWidth={'350px'} 
                    position={'relative'} 
                    padding={'25px'} 
                    bgColor={'brand.pinkUltraLight'}
                />
            </Flex>
        </PageWrapper>
    );
}

export default CaseDetailsPage;