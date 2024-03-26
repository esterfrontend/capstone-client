import axios from 'axios'

class AxiosConfig {
    constructor() {
        this.axios = axios.create({
            baseURL: `http://localhost:3000/api/`
        })
    }

    getToken() {
        return localStorage.getItem("token")
    }
}

export default AxiosConfig