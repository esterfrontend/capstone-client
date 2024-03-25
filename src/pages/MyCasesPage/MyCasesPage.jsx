import ProfilePageLayout from "../../Components/ProfilePageLayout/ProfilePageLayout"
import { useState } from "react"
import { useLoaderData } from 'react-router-dom';
import CasesGrid from "../../Components/CasesGrid/CasesGrid"

const MyCasesPage = () => {
    const cases = useLoaderData()

    return (
        <ProfilePageLayout pageTitle={'Título'}>
            <CasesGrid cases={cases}/>
        </ProfilePageLayout>
    )
}

export default MyCasesPage