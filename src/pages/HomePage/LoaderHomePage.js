import schoolService from '../../services/schools.service'

const LoaderHomePage = async () => {
    const schools = await schoolService.getAllSchools()

    return schools
}

export default LoaderHomePage