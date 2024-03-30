import AxiosConfig from "./axios";

class UserService extends AxiosConfig {
    constructor() {
        super('user')
    }

    async editUser(data) {
        const token = this.getToken()
        const response = await this.axios.put("/user/editUser/", 
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        )
        return response.data
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