import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import MainHeading from '../../Components/MainHeading/MainHeading';
import { Box } from "@chakra-ui/react";
import { useLoaderData } from 'react-router-dom';
import ProfessionalsGrid from '../../Components/ProfessionalsGrid/ProfessionalsGrid';
import SignUpLinkBox from '../../Components/SignUpLinkBox/SignUpLinkBox';


function ProfessionalsPage() {
    const professionals = useLoaderData()

    return (
        <PageWrapper>
            <Box as="section">
                <MainHeading>
                    Psicólogos inscritos
                </MainHeading>
                <ProfessionalsGrid professionals={professionals}/>
            </Box>
            <SignUpLinkBox/>
        </PageWrapper>
    )
}

export default ProfessionalsPage