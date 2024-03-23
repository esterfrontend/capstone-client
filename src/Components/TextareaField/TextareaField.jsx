import { Textarea } from "@chakra-ui/react"

const TextareaForm = ({name, placeholder}) => {
    return (
        <Textarea maxW={'700px'} w={'100%'} minH={'120px'} margin={'0 auto'} 
            name={name} 
            placeholder={placeholder}
        />
    )
}

export default TextareaForm