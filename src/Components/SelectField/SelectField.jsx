import { Select } from "@chakra-ui/react"

const SelectForm = ({options}) => {
    return (
        <Select name='' placeholder='' maxW={'450px'} w={'100%'} margin={'0 auto'}>
            {
                options.data.map((option, index)=> {
                    return <option key={index} value={option._id}>{option.name} ({option.province})</option>
                })
            }
        </Select>
    )
}

export default SelectForm