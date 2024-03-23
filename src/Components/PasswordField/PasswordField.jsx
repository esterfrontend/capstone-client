import { useState } from 'react'
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"

const PasswordField = ({ name, placeholder }) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup maxW={'300px'} w={'100%'} margin={'0 auto'}>
            <Input
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                name={name}
                placeholder={placeholder}
            />
            <InputRightElement width='4.5rem'>
                <Button variant={'empty'} h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}

export default PasswordField