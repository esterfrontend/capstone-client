import { Input } from "@chakra-ui/react"

const InputForm = ({name, placeholder}) => {
    return (
        <Input maxW={'300px'} w={'100%'} margin={'0 auto'} 
            name={name} 
            placeholder={placeholder}
        />
    )
}

export default InputForm