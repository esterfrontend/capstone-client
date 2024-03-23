import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import MainHeading from '../../Components/MainHeading/MainHeading';
import SchoolsGrid from '../../Components/SchoolsGrid/SchoolsGrid';
import { Box } from "@chakra-ui/react";
import { useLoaderData } from 'react-router-dom';
import ProfessionalsGrid from '../../Components/ProfessionalsGrid/ProfessionalsGrid';


function ProfessionalsPage() {
    const professionals = useLoaderData()

    console.log(professionals)
    return (
        <PageWrapper>
            <Box as="section">
                <MainHeading>
                    Psicólogos inscritos
                </MainHeading>
                <ProfessionalsGrid professionals={professionals}/>
            </Box>
        </PageWrapper>
    )
}

export default ProfessionalsPage