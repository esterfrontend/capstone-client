import { Text } from "@chakra-ui/react"
import CustomLink from "../CustomLink/CustomLink"

const Button = ({ children, to }) => {
    return (
        <CustomLink 
            to={to}
            color={'white'}
            bgColor={'brand.primary'}
            textDecoration={'none'}
            padding={'10px 20px'}
            textTransform={'uppercase'}
            fontWeight={'bold'}
            _hover={{textDecoration:'none'}}
        >
            <Text as={"span"}>{children}</Text>
        </CustomLink>
    )
}

export default Button