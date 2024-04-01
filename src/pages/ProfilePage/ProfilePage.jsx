import React, { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import ProfilePageLayout from "../../Components/ProfilePageLayout/ProfilePageLayout"
import { Flex, useDisclosure } from "@chakra-ui/react"
import Button from "../../Components/Button/Button"
import UserDetails from "../../Components/UserDetails/UserDetails"
import RemoveButton from "../../Components/RemoveButton/RemoveButton"
import userService from "../../services/user.service"
import { useToast } from "@chakra-ui/react"
import RemoveUserModal from "../../Components/RemoveUserModal/RemoveUserModal"
import EditUserModal from "../../Components/EditUserModal/EditUserModal"


const ProfilePage = () => {
    const { user, removeUser } = useContext(AuthContext)
    const { isOpen: isOpenEditModal, onOpen: onOpenEditModal, onClose: onCloseEditModal } = useDisclosure()
    const { isOpen: isOpenRemoveModal, onOpen: onOpenRemoveModal, onClose: onCloseRemoveModal } = useDisclosure()
    const toast = useToast()
    const [editedUser, setEditedUser] = useState(user)
    const [newUser, setNewUser] = useState(user)

    const { role, name } = user

    useEffect(() => {
        setNewUser(user);
    }, [user]);

    const onChange = (e) => {
        const { name, value } = e.target
        setEditedUser({ ...editedUser, [name]: value })
    }

    const editUser = async () => {
        try {
            await userService.editUser(
                editedUser
            )

            setNewUser(editedUser)

            onCloseEditModal()

            toast({
                title: "El usuario ha sido modificado.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
        } catch (err) {
            console.error(err)
            toast({
                title: "Ha ocurrido un error.",
                description: "El usuario no ha podido modificarse correctamente.",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
    }


    return (
        <ProfilePageLayout pageTitle={role === 'colegio' ? 'Colegio ' + name : name}>

            <UserDetails user={newUser} />

            <Flex gap={'30px'} flexDirection={['column', 'row']} alignItems={'flex-start'}>
                <Button onClick={onOpenEditModal}>
                    Editar cuenta
                </Button>

                <RemoveButton onClick={onOpenRemoveModal}>
                    Eliminar cuenta
                </RemoveButton>
            </Flex>

            <EditUserModal role={role} user={user} isOpen={isOpenEditModal} onClose={onCloseEditModal} onChange={onChange} editUserFn={editUser} />
            <RemoveUserModal isOpen={isOpenRemoveModal} onClose={onCloseRemoveModal} removeUser={removeUser} />

        </ProfilePageLayout>
    )
}

export default ProfilePage