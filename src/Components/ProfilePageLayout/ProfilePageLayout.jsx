import { Box, Flex, Heading } from "@chakra-ui/react"
import PageWrapper from "../../Components/PageWrapper/PageWrapper"
import ProfileNavigation from "../../Components/ProfileNavigation/ProfileNavigation"

const ProfilePageLayout = ({children, pageTitle}) => {
    return (
        <PageWrapper className='container'>
            <Flex gap={'60px'}>
                <ProfileNavigation />
                <Box>
                    <Heading as='h1'>{ pageTitle }</Heading>
                    {children}
                </Box>
            </Flex>
        </PageWrapper>
    )
}

export default ProfilePageLayout