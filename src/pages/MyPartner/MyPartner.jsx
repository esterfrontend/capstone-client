import ProfilePageLayout from "../../Components/ProfilePageLayout/ProfilePageLayout"
import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import UserDetails from "../../Components/UserDetails/UserDetails"
import { Box } from "@chakra-ui/react";
import './MyPartner.css'

const MyPartner = () => {
    const {user} = useContext(AuthContext)

    return (
        <ProfilePageLayout
            pageTitle={user.role === 'colegio' ? user.professional.name : 'Colegios asociados'}
        >
            <Box>
            { user.role === 'colegio'
                ? <UserDetails user={user.professional}/>
                : (
                    user.schools.map((school, index) => {
                        return (
                            <Box className='partner-school' key={index}>
                                <UserDetails user={school}/>
                            </Box>
                        )
                    })
                )
            }
            </Box>
        </ProfilePageLayout>
    )
        
}

export default MyPartner