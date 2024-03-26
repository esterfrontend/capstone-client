import { Checkbox, Box, Stack } from "@chakra-ui/react"

const CheckboxField = ({onChange, name, options}) => {
    return (
        <Box onChange={onChange} w={'fit-content'} margin={'0 auto'}>
            <Stack spacing={[1, 5]} direction={'column'} w={'fit-content'}>
                {
                    options.data.map((option, index)=> {
                        return <Checkbox name={name} key={index} value={option.value}>{option.text}</Checkbox>
                    })
                }
            </Stack>
        </Box>
    )
}

export default CheckboxField