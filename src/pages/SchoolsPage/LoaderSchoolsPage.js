import schoolService from '../../services/schools.service'

const LoaderSchoolsPage = async () => {
    const schools = await schoolService.getAllSchools()

    return schools
}

export default LoaderSchoolsPage