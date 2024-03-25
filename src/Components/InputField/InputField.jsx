import { Input } from "@chakra-ui/react"

const InputForm = ({onChange, name, placeholder}) => {
    return (
        <Input onChange={onChange} maxW={'300px'} w={'100%'} margin={'0 auto'} 
            name={name} 
            placeholder={placeholder}
        />
    )
}

export default InputForm