import { Text } from "@chakra-ui/react"
import BackArrowIcon from "../BackArrowIcon/BackArrowIcon"
import CustomLink from "../CustomLink/CustomLink"

const GoBackLink = ({to}) => {
    return (
        <CustomLink 
            to={to}
            position={'relative'}
            display={'inline-flex'}
            gap={'5px'}
            alignItems={'center'}
            fontSize={'13px'}
            marginBottom={'20px'}
            _before={{
                content:'""',
                bgColor:'brand.pinkLight',
                w:'0',
                h:'100%',
                position:'absolute',
                top:'0',
                left:'0',
                zIndex:'-1',
                transition:'width 0.1s ease-in'
            }}
            _hover={{
                _before:{
                    w:'100%'
                }
            }}
        >
            <BackArrowIcon 
                w={'18px'} 
                padding={'5px 0px'} 
                boxSizing={'content-box'}
            />
            <Text as={'span'} >
                Volver
            </Text>
        </CustomLink>
    )
}

export default GoBackLink