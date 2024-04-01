import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import MainHeading from '../../Components/MainHeading/MainHeading';
import SchoolsGrid from '../../Components/SchoolsGrid/SchoolsGrid';
import { Box, Flex } from "@chakra-ui/react";
import { useLoaderData } from 'react-router-dom';
import SignUpLinkBox from '../../Components/SignUpLinkBox/SignUpLinkBox';
import MyMap from '../../Components/MyMap/MyMap';

function SchoolsPage() {
    const schools = useLoaderData()

    return (
        <PageWrapper>
            <Box as="section">
                <MainHeading>
                    Colegios inscritos
                </MainHeading>
                <Flex flexDirection={["column", "column", "row"]}>
                    <Box w={['100%', '100%', '50%', '40%']} h={['300px', '300px', 'auto']}>
                        <MyMap/>
                    </Box>
                    <SchoolsGrid schools={schools}/>
                </Flex>
            </Box>
            <SignUpLinkBox/>
        </PageWrapper>
    )
}

export default SchoolsPage