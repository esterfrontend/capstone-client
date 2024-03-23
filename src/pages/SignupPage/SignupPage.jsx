import React, { useEffect, useState } from "react"
import authService from "../../services/auth.service"
import { useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import CustomForm from "../../Components/CustomForm/CustomForm"
import SignupForm from "../../Components/SignupForm/SignupForm"

const SignupPage = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        role: '',
        name: '',
        registrationNumber: '',
        address: '',
        postalCode: '',
        province: '',
        contactPerson: '',
        phone: '',
        phoneSecondary: '',
        professional: null
    })

    const toast = useToast()
    const navigate = useNavigate()

    const onChange = (e) => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        try {
            await authService.signup(userData)
            toast({
                title: "Gracias!",
                description: "Tu cuenta ha sido creada.",
                status: "success",
                duration: 5000,
                isClosable: true,
            })
            navigate("/inicio-sesion")
        } catch (error) {
            console.log("Error ==>", error)
        }
    }

    return (
        <SignupForm 
            onChange={onChange}
            onSubmit={onSubmit}
            buttonText="Crear cuenta"
        />
    )
}

export default SignupPage
