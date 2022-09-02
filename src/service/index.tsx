import axios from "axios";

const http = axios.create(
    {baseURL: 'http://localhost:8080/'}
)

/*http.interceptors.request.use(async config  => {
    const token = 'sadasd';
    if(config !== null) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})*/

export default http;