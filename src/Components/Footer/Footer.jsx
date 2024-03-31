import { Box, Flex, Text } from "@chakra-ui/react"
import CustomLink from "../CustomLink/CustomLink"

const Footer = () => {
    return (
        <Flex 
        className="container"
            as="footer" 
            bg={'brand.pinkLight'} 
            fontSize={'13px'} 
            paddingTop={'20px'}
            paddingBottom={'20px'}
            justifyContent={'space-between'} 
            gap={'30px'}
            flexDirection={[
                'column',
                'column',
                'row',
                'row'
            ]}
        >
            <Flex gap={'15px'}>
                <CustomLink to='/'>Aviso legal</CustomLink>
                <CustomLink to='/'>Política de privacidad</CustomLink>
            </Flex>
            <Text margin={0}>
                <Text as="span">Contacto: </Text>
                <CustomLink to='mailto:info@actuocontraelbullying.es'>info@actuocontraelbullying.es</CustomLink>
            </Text>
        </Flex>
    )
}

export default Footer