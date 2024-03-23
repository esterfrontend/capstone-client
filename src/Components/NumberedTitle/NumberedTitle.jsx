import { Flex, Text } from "@chakra-ui/react"

const NumberedTitle = ({number, title}) => {
    if (!title) {
        return ;
    }
    return (
        <Flex fontSize={'16px'} justifyContent={'center'} alignItems={'center'} gap={'8px'} marginBottom={'10px'}>
            <Flex 
                minW={'34px'}
                minH={'34px'}
                bgColor={'brand.pinkLight'} 
                borderRadius={'50px'} 
                alignItems={'center'} 
                justifyContent={'center'}
            >
                <Text as={'span'} color={'brand.primary'} fontWeight={'bold'}>
                    {number}
                </Text>
            </Flex>
            <Text as={'h2'} fontWeight={'600'}>
                {title}
            </Text>
        </Flex>
    )
}

export default NumberedTitle