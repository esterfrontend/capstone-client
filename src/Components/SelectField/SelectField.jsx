import { Select } from "@chakra-ui/react"

const SelectField = ({onChange, name, placeholder, options, valueOptions, nameOptions}) => {
    return (
        <Select onChange={onChange} name={name} placeholder={placeholder} maxW={'450px'} w={'100%'} margin={'0 auto'}>
            <option value="">Seleciona una opción</option>
            {
                options.data.map((option, index)=> {
                    return <option key={index} value={option[valueOptions]}>{option[nameOptions]}</option>
                })
            }
        </Select>
    )
}

export default SelectField