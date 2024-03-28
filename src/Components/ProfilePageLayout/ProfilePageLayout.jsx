import { Box, Flex, Heading } from "@chakra-ui/react"
import PageWrapper from "../../Components/PageWrapper/PageWrapper"
import ProfileNavigation from "../../Components/ProfileNavigation/ProfileNavigation"

const ProfilePageLayout = ({children, pageTitle}) => {
    return (
        <PageWrapper className='container' mb={'60px'}>
            <Flex gap={'60px'} alignItems={'flex-start'}>
                <ProfileNavigation />
                <Box flex={'1'}>
                    <Heading as='h1' mb={'30px'}>{ pageTitle }</Heading>
                    {children}
                </Box>
            </Flex>
        </PageWrapper>
    )
}

export default ProfilePageLayout