import { Box, Flex, Heading } from "@chakra-ui/react"
import PageWrapper from "../../Components/PageWrapper/PageWrapper"
import ProfileNavigation from "../../Components/ProfileNavigation/ProfileNavigation"

const ProfilePageLayout = ({children, pageTitle}) => {
    return (
        <PageWrapper className='container' mb={'60px'}>
            <Flex gap={['40px', '40px', '60px']} alignItems={'flex-start'} flexDirection={['column', 'column', 'row']}>
                <ProfileNavigation />
                <Box flex={'1'} w={'100%'}>
                    <Heading as='h1' fontSize={['25px', '30px']} mb={'30px'}>{ pageTitle }</Heading>
                    {children}
                </Box>
            </Flex>
        </PageWrapper>
    )
}

export default ProfilePageLayout