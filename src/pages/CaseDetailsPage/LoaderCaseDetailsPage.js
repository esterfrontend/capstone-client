import casesService from '../../services/cases.service'
import commentsService from '../../services/comments.service'

const LoaderCaseDetailsPage = async ({params}) => {
    const ocurrence = await casesService.getOneCase(params.case_id)
    const comments = await commentsService.getAllComments(params.case_id)

    return {ocurrence, comments}
}

export default LoaderCaseDetailsPage