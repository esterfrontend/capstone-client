import AxiosConfig from "./axios";

class SchoolService extends AxiosConfig {
    constructor() {
        super('schools')
    }

    async getAllSchools() {
        const response = await this.axios.get('/schools/getAll')
        return response.data
    }
}

export default new SchoolService