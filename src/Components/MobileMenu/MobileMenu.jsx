import React from "react"
import { Button, Box, useDisclosure, Drawer, DrawerBody, DrawerOverlay,  DrawerContent, DrawerCloseButton } from '@chakra-ui/react'
import MainNavigation from '../MainNavigation/MainNavigation'
import AuthNavigation from '../AuthNavigation/AuthNavigation'


const MobileMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <Box>
            <Button ref={btnRef} onClick={onOpen} variant={'empty'}>
                Open
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
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