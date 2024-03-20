import { useState } from 'react'
import professionalsJson from '../../mockProfessionals.json'
import ProfessionalsGrid from '../ProfessionalsGrid/ProfessionalsGrid'

const Professionals = () => {
    const [professionals, setProfessionals] = useState(professionalsJson)

    return (
        <>
            <h2>Profesionales disponibles:</h2>
            <ProfessionalsGrid professionals={professionals}/>
        </>
    )
}

export default Professionals