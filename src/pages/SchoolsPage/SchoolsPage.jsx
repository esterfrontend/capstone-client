import PageWrapper from '../../Components/PageWrapper/PageWrapper';
import MainHeading from '../../Components/MainHeading/MainHeading';
import SchoolsGrid from '../../Components/SchoolsGrid/SchoolsGrid';
import { Box, Flex } from "@chakra-ui/react";
import { useLoaderData } from 'react-router-dom';
import SignUpLinkBox from '../../Components/SignUpLinkBox/SignUpLinkBox';
import MyMap from '../../Components/MyMap/MyMap';
import './SchoolsPage.css'

function SchoolsPage() {
    const schools = useLoaderData()

    return (
        <PageWrapper>
            <Box as="section">
                <MainHeading>
                    Colegios inscritos
                </MainHeading>
                <Flex flexDirection={["column", "column", "row"]}>
                    <Box className={'schools__container-map'} w={['100%', '100%', '40%', '40%', '35%']} h={['300px', '300px', 'auto']}>
                        <MyMap schools={schools}/>
                    </Box>
                    <SchoolsGrid schools={schools} flex={'1'}/>
                </Flex>
            </Box>
            <SignUpLinkBox/>
        </PageWrapper>
    )
}

export default SchoolsPage