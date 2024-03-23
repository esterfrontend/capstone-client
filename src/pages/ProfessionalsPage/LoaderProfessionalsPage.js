import professionalsService from '../../services/professionals.service'

const LoaderProfessionalsPage = async () => {
    const professionals = await professionalsService.getAllProfessionals()

    return professionals
}

export default LoaderProfessionalsPage