import AxiosConfig from "./axios";

class UserService extends AxiosConfig {
    constructor() {
        super('user')
    }

    async removeUser(token) {
        const response = await this.axios.delete("/user/remove",
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        )
        return response.data
    }
}

export default new UserService