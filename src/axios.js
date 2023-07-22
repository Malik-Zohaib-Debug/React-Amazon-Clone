import axios from "axios";

const instance = axios.create({
    baseUrl: 'http://127.0.0.1:5001/clone-fc822/us-central1/api'
})

export default instance;