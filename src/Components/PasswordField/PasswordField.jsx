import { useState } from 'react'
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import HideIcon from '../HideIcon/HideIcon'
import ShowIcon from '../ShowIcon/ShowIcon'

const PasswordField = ({ onChange, name, placeholder }) => {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
        <InputGroup maxW={'300px'} w={'100%'} margin={'0 auto'}>
            <Input onChange={onChange}
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                name={name}
                placeholder={placeholder}
            />
            <InputRightElement width='4.5rem'>
                <Button variant={'empty'} h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? <HideIcon/> : <ShowIcon/>}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}

export default PasswordField