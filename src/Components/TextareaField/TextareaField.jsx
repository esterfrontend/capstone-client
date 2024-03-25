import { Textarea } from "@chakra-ui/react"

const TextareaField = ({onChange, name, placeholder}) => {
    return (
        <Textarea onChange={onChange} maxW={'700px'} w={'100%'} minH={'120px'} margin={'0 auto'} 
            name={name} 
            placeholder={placeholder}
        />
    )
}

export default TextareaField