import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import MainHeading from '../../Components/MainHeading/MainHeading';
import SchoolsGrid from '../../Components/SchoolsGrid/SchoolsGrid';
import { Box, Flex } from "@chakra-ui/react";
import { useLoaderData } from 'react-router-dom';
import SignUpLinkBox from '../../Components/SignUpLinkBox/SignUpLinkBox';

import MyMap from '../../Components/MyMap/MyMap'
import ReactWrapperMap from '../../Components/ReactWrapperMap/ReactWrapperMap';

function SchoolsPage() {
    const schools = useLoaderData()

    return (
        <PageWrapper>
            <Box as="section">
                <MainHeading>
                    Colegios inscritos
                </MainHeading>
                <Flex position={'relative'}>
                    <Box position={'sticky'} w={'400px'}>
                        {/* <MyMap/> */}
                        {/* El mapa carga pero tiene altura 0 */}
                        <ReactWrapperMap/>
                    </Box>
                    <SchoolsGrid schools={schools}/>
                </Flex>
            </Box>
            <SignUpLinkBox/>
        </PageWrapper>
    )
}

export default SchoolsPage