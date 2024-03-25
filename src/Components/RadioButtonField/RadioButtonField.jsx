import { Radio, RadioGroup, Stack } from "@chakra-ui/react"

const RadioButtonField = ({onChange, name, placeholder, options}) => {
    return (
        <RadioGroup onChange={onChange} colorScheme='gray' w={'fit-content'} margin={'0 auto'}
            name={name} 
            placeholder={placeholder} 
        >
            <Stack spacing={[1, 5]} direction={'row'} justifyContent={'center'}>
                {
                    options.data.map((option, index)=> {
                        return <Radio key={index} value={option.value}>{option.name}</Radio>
                    })
                }
            </Stack>
        </RadioGroup>
    )
}

export default RadioButtonField