import { Box, Flex, Input, Text } from "@chakra-ui/react"

const CustomForm = ({onSubmit, children}) => {

    return (
        <Flex>
            <Box textAlign={'center'}>
                <form onSubmit={onSubmit}>
                    {children}
                </form>
            </Box>
        </Flex>
    )
}

export default CustomForm