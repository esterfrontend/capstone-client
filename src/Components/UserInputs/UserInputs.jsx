import { Box } from "@chakra-ui/react"
import SignupForm from "../SignupForm/SignupForm"

const UserInputs = ({input, index, role, ...props}) => {
    if (input.role === role || !input.role) {
        let valueOptions = ''
        let nameOptions = ''

        if (input.name === 'province') {
            valueOptions = 'name'
            nameOptions = 'name'
        }

        return (
            <Box w={'100%'}>
                <SignupForm
                    {...props}
                    input={input}
                    index={index}
                    valueOptions={valueOptions}
                    nameOptions={nameOptions}
                />
            </Box>
        )
    }

    return <></>
}

export default UserInputs