import { Box, Flex } from "@chakra-ui/react"
import SubmitButton from "../SubmitButton/SubmitButton"

const CustomForm = ({buttonText, onSubmit, children, ...props}) => {
    return (
        <Box {...props}>
            <Box textAlign={'center'}>
                <Flex as='form' onSubmit={onSubmit} direction={'column'} gap={'20px'} alignItems={'center'}>
                    {children}
                    <SubmitButton text={buttonText} type="submit"/>
                </Flex>
            </Box>
        </Box>
    )
}

export default CustomForm