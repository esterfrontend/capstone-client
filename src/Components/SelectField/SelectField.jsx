import { Select } from "@chakra-ui/react"

const SelectForm = ({onChange, name, placeholder, options}) => {
    return (
        <Select onChange={onChange} name={name} placeholder={placeholder} maxW={'450px'} w={'100%'} margin={'0 auto'}>
            <option value="">Seleciona una opción</option>
            {
                options.data.map((option, index)=> {
                    return <option key={index} value={option._id}>{option.name} ({option.province})</option>
                })
            }
        </Select>
    )
}

export default SelectForm