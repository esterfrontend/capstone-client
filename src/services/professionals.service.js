import AxiosConfig from "./axios";

class ProfessionalsService extends AxiosConfig {
    constructor() {
        super('professionals')
    }

    async getAllProfessionals() {
        const response = await this.axios.get('/professionals/getAll')
        return response.data
    }
}

export default new ProfessionalsService