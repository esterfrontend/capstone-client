import { Box } from "@chakra-ui/react"
import Navbar from "../Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout
