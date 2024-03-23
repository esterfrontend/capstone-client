import { Checkbox, Box, Stack } from "@chakra-ui/react"

const CheckboxField = ({name, placeholder, options}) => {
    return (
        <Box colorScheme='gray' w={'fit-content'} margin={'0 auto'}
            name={name} 
            placeholder={placeholder}
        >
            <Stack spacing={[1, 5]} direction={'column'} w={'fit-content'}>
                {
                    options.data.map((option, index)=> {
                        return <Checkbox key={index} value={option.value}>{option.value}</Checkbox>
                    })
                }
            </Stack>
        </Box>
    )
}

export default CheckboxField