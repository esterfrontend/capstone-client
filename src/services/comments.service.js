import AxiosConfig from "./axios";

class CommentsService extends AxiosConfig {
    constructor() {
        super('comments')
    }

    async getAllComments(case_id) {
        const token = this.getToken()

        const response = await this.axios.get(`/comments/getAll/${case_id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    }

    async createComment(data) {
        const token = this.getToken()
        const response = await this.axios.post('/comments/create', 
            data, 
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    }
}

export default new CommentsService