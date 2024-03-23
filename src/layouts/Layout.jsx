import Navbar from "../Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"

const Layout = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Outlet />
        </AuthProvider>
    )
}

export default Layout
