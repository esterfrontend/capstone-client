import AxiosConfig from "./axios";

class AuthService extends AxiosConfig {
    constructor() {
        super('auth')
    }

    async signup(data) {
        const response = await this.axios.post('/auth/signup', data)
        return response.data
    }

    async login(data) {
        const response = await this.axios.post('/auth/login', data)
        return response.data
    }

    async getProfile(token) {
        const response = await this.axios.post("/auth/getProfile",
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

export default new AuthService