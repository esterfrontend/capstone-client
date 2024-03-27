import { Radio, RadioGroup, Stack } from "@chakra-ui/react"

const RadioButtonField = ({onChange, name, options}) => {
    return (
        <RadioGroup w={'fit-content'} margin={'0 auto'}>
            <Stack spacing={[1, 5]} direction={'row'} justifyContent={'center'}>
                {
                    options.data.map((option, index)=> {
                        return <Radio onChange={onChange} name={name} key={index} value={option.value}>{option.name}</Radio>
                    })
                }
            </Stack>
        </RadioGroup>
    )
}

export default RadioButtonField