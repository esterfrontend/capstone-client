import { Box } from "@chakra-ui/react"

const PageWrapper = ({children, ...props}) => {
    return <Box {...props}>{children}</Box>
}

export default PageWrapper