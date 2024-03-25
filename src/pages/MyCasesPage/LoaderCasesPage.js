import casesService from '../../services/cases.service'

const LoaderCasesPage = async () => {
    const cases = await casesService.getAllCases()

    return cases
}

export default LoaderCasesPage