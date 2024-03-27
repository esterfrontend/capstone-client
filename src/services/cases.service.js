import AxiosConfig from "./axios";

class CasesService extends AxiosConfig {
    constructor() {
        super('cases')
    }

    async getAllCases() {
        const token = this.getToken()
        const response = await this.axios.get('/cases/getAll',
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    }

    async getOneCase(case_id) {
        const token = this.getToken()
        const response = await this.axios.get(`/cases/getOne/${case_id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
    }

    async createCase(data) {
        const response = await this.axios.post('/cases/create', data)
        return response.data
    }
}

export default new CasesService