import axios from "axios";

const http = axios.create(
    {baseURL: 'http://localhost:8080/'}
)

//http.defaults.headers.common['Authorization'] = 'eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJqb2dvIGRlIGZpbG1lc…kyMn0.FETN2Gi9nprcwEetZkNLvg-s8a6j3CfQv1yKizObrZ0';

export default http;