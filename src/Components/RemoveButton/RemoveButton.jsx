import { Text } from "@chakra-ui/react"
import CustomLink from "../CustomLink/CustomLink"

const RemoveButton = ({onClick, children}) => {
    return (
        <CustomLink 
            display={'inline-block'}
            onClick={onClick}
            color={'white'}
            bgColor={'red.500'}
            textDecoration={'none'}
            padding={'10px 20px'}
            textTransform={'uppercase'}
            fontWeight={'bold'}
            _hover={{textDecoration:'none', bgColor:'red.800'}}
        >
            <Text as={"span"}>{children}</Text>
        </CustomLink>
    )
}

export default RemoveButton