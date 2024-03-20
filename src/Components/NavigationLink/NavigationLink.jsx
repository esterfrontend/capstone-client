import CustomLink from "../CustomLink/CustomLink"
import { Text } from "@chakra-ui/react"

const NavigationLink = ({ children, ...props }) => {
    return (
        <CustomLink
            {...props} 
            fontSize={"15px"} 
            fontWeight={'bold'} 
            textTransform={'uppercase'}
            position={'relative'}
            _hover={{
                color:"brand.primary"
            }}
        >
            <Text as={"span"}>{children}</Text>
        </CustomLink>
    )
}

export default NavigationLink