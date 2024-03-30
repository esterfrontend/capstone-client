import Navbar from "../Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"
import Footer from "../Components/Footer/Footer"

const Layout = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </AuthProvider>
    )
}

export default Layout
