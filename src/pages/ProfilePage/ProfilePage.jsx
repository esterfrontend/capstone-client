import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"
import ProfilePageLayout from "../../Components/ProfilePageLayout/ProfilePageLayout"

const ProfilePage = () => {
    const { user } = useContext(AuthContext)
    
    const { 
        email, 
        name, 
        registrationNumber,
        address, 
        postalCode, 
        province, 
        contactPerson, 
        phone, 
        phoneSecondary 
    } = user

    return (
        <ProfilePageLayout pageTitle={'Mis datos'}>
            {(name) ? <p>Nombre: {name}</p>: ''}
            <p>Dirección: {address}, {postalCode}, {province}</p>
            <p>Email: {email}</p>
            <p>Teléfono: {phone} / {phoneSecondary}</p>
            <div>
                <p>Persona de contacto:</p>
                <p>{contactPerson}</p>
            </div>

        </ProfilePageLayout>
    )
}

export default ProfilePage