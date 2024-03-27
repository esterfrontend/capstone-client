import casesService from '../../services/cases.service'

const LoaderCaseDetailsPage = async ({params}) => {
    const ocurrence = await casesService.getOneCase(params.case_id)

    return ocurrence
}

export default LoaderCaseDetailsPage