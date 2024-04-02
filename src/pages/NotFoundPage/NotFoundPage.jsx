import { Flex, Text } from "@chakra-ui/react"
import React from "react"

const NotFoundPage = () => {
  return (
    <Flex
      height={"calc(100vh - 322px)"}
      flexDir={"column"}
      gap={"12px"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text fontWeight={"bold"} fontSize={"30px"}>
        Erorr 404
      </Text>
      <Text fontWeight={"bold"} fontSize={"20px"}>
        La página que buscas no existe.
      </Text>
    </Flex>
  )
}

export default NotFoundPage
