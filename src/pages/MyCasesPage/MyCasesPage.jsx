import ProfilePageLayout from "../../Components/ProfilePageLayout/ProfilePageLayout"
import { useContext, useEffect, useState } from "react"
import { useLoaderData } from 'react-router-dom';
import CasesGrid from "../../Components/CasesGrid/CasesGrid"
import { Box, Text } from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext"
import casesService from "../../services/cases.service"

const MyCasesPage = () => {
    const {user} = useContext(AuthContext)
    const [cases, setCases] = useState([])

    const getAllCases = async () => {
        const allCases = await casesService.getAllCases()
        setCases(allCases)
    }
    
    useEffect(() => {
        getAllCases()
    }, [])

    return (
        <ProfilePageLayout pageTitle={'Mis casos'}>
            {
            user.cases.length === 0
                ? (<Box marginTop={'30px'}>
                    {
                        user.role === 'colegio'
                            ? (<>
                                    <Text>¡Enhorabuena! Tu colegio no tiene ningun aviso.</Text>
                                    <Text>Recuerda promover el uso de esta herramienta en tu colegio y ponerte en contacto con tu psicólogo asociado para realizar formaciones y charlas informativas a profesores, padres y alumnos.</Text>
                            </>) 
                            : (<>
                                    <Text>Todavía no tienes ningún caso asignado.</Text>
                                    <Text>Si dispones de colegios asociados, recuerda ponerte en contacto con ellos para promover el uso de esta herramienta y realizar formaciones y charlas informativas a profesores, padres y alumnos.</Text>
                            </>)
                    }
                </Box>)
                : (
                    <CasesGrid cases={cases}/>
                )
            }
        </ProfilePageLayout>
    )
        
}

export default MyCasesPage