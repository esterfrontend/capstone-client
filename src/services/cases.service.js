import AxiosConfig from "./axios";

class CasesService extends AxiosConfig {
    constructor() {
        super('cases')
    }

    async getAllCases(token) {
        const response = await this.axios.get('/cases/getAll',
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    }
}

export default new CasesService