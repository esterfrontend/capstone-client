import React from "react"
import { Button, Box, useDisclosure, Drawer, DrawerBody, DrawerOverlay,  DrawerContent } from '@chakra-ui/react'
import MainNavigation from '../MainNavigation/MainNavigation'
import AuthNavigation from '../AuthNavigation/AuthNavigation'
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon'
import CloseMenuIcon from "../CloseMenuIcon/CloseMenuIcon"


const MobileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box>
            <Button ref={btnRef} onClick={onOpen} variant={'empty'}>
                <HamburgerIcon/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent position={'relative'}>
                    <Button onClick={onClose} variant={'empty'} position={'absolute'} top={'20px'} right={'30px'} width={'fit-content'}>
                        <CloseMenuIcon />
                    </Button>
                    <DrawerBody onClick={onClose} padding={'60px 30px'}>
                        <MainNavigation 
                            classname={'nabvar-mobile__item'}
                            borderBottom={'1px solid'}
                            borderColor={'brand.pink'}
                        />

                        <AuthNavigation 
                            mt={'20px'}
                            pt={'30px'}
                            direction={'column'}
                            gap={'10px'}
                            borderTop={'2px solid '}
                            borderColor={'brand.pink'}
                        />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default MobileMenu