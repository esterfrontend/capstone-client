import { useState } from 'react'
import PROFESSIONALS_MOCK from '../../mocks/mockProfessionals.json'
import ProfessionalsGrid from '../ProfessionalsGrid/ProfessionalsGrid'

const Professionals = () => {
    const [professionals, setProfessionals] = useState(PROFESSIONALS_MOCK)

    return (
        <>
            <h2>Profesionales disponibles:</h2>
            <ProfessionalsGrid professionals={professionals}/>
        </>
    )
}

export default Professionals