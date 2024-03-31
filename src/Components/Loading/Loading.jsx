import { Flex, Spinner } from "@chakra-ui/react"

const Loading = () => {
    return (
        <Flex
            height={"80vh"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Spinner />
        </Flex>
    )
}

export default Loading
