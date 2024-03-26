import { Text } from "@chakra-ui/react"
import CustomLink from "../CustomLink/CustomLink"

const AuthLink = ({ onClick, children, to }) => {
    return (
        <CustomLink 
            onClick={onClick}
            to={to}
            fontSize={"14px"}
            color={'brand.primary'}
            fontWeight={'500'}
        >
            <Text as={"span"}>{children}</Text>
        </CustomLink>
    )
}

export default AuthLink