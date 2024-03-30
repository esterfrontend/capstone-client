import { Flex, Grid } from "@chakra-ui/react"
import CustomModal from "../CustomModal/CustomModal"
import UserInputs from "../UserInputs/UserInputs"
import Button from "../Button/Button"
import EDITUSER_INPUTS from "../../const/editUserInputs"

const EditUserModal = ({role, user, isOpen, onClose, onChange, editUserFn }) => {
    return (
        <CustomModal
            isOpen={isOpen}
            onClose={onClose}
            title={'Edita tu usuario'}
        >
            {role ? (
                <Grid templateColumns={[
                    "repeat(1, 1fr)",
                    "repeat(1, 1fr)",
                    "repeat(2, 1fr)",
                    "repeat(2, 1fr)",
                ]}
                    gap={'10px 30px'}
                    mb={'30px'}
                >
                    { EDITUSER_INPUTS.map((input, index) => {
                        return (
                            <UserInputs 
                                onChange={onChange}
                                key={index} 
                                input={input} 
                                index={index} 
                                role={role} 
                                placeholder={user[input.name]} 
                                defaultValue={user[input.name]}
                            />
                        )
                    })
                    }

                </Grid>
            ) : <></>}

            <Flex gap={'20px'} justify={'flex-end'} mb={'20px'}>
                <Button onClick={editUserFn}>
                    Guardar
                </Button>
            </Flex>
        </CustomModal>
    )
}

export default EditUserModal