import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import authService from "../services/auth.service"
import userService from "../services/user.service"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const setToken = (token) => {
        localStorage.setItem("token", token)
    }

    const getToken = () => {
        return localStorage.getItem("token")
    }

    const getProfile = async () => {
        try {
            const token = getToken()
            if (token) {
                const loggedUser = await authService.getProfile(token)
                setUser(loggedUser)
            }
        } catch (error) {
            console.log("Error => ", error)
        } finally {
            setIsLoading(false)
        }
    }

    const logout = (e) => {
        if (e) e.preventDefault()
        localStorage.removeItem("token")
        setUser(null)
        navigate("/inicio-sesion")
    }

    const login = async (userData) => {
        try {
            const { token } = await authService.login(userData)
            setToken(token)
            await getProfile()
            navigate("/mi-perfil")
        } catch (error) {
            console.log("Error ==> ", error)
        }
    }

    const removeUser = async () => {
        try {
            const token = getToken()
            if (token) {
                await userService.removeUser(token)
            }
            setUser(null)
            navigate("/inicio-sesion")
        } catch (error) {
            console.log("Error => ", error)
        }
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <AuthContext.Provider value={{ user, logout, login, isLoading, removeUser }}>
            {children}
        </AuthContext.Provider>
    )
}