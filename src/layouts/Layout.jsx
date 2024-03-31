import Navbar from "../Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext"
import Footer from "../Components/Footer/Footer"
import { Box, Flex } from "@chakra-ui/react"

const Layout = () => {
    return (
        <AuthProvider>
            <Flex minH={'100vh'} flexDir={'column'}>
                <Navbar />
                <Box flex={'1'}>
                    <Outlet />
                </Box>
                <Footer />
            </Flex>
        </AuthProvider>
    )
}

export default Layout
