import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import MainHeading from '../../Components/MainHeading/MainHeading';
import SchoolsGrid from '../../Components/SchoolsGrid/SchoolsGrid';
import { Box } from "@chakra-ui/react";
import { useLoaderData } from 'react-router-dom';


function SchoolsPage() {
    const schools = useLoaderData()
    return (
        <PageWrapper>
            <Box as="section">
                <MainHeading>
                    Colegios inscritos
                </MainHeading>
                <SchoolsGrid schools={schools}/>
            </Box>
        </PageWrapper>
    )
}

export default SchoolsPage