import axios from "axios"

export const makeRequest = axios.create({
    baseURL: "http://localhost5000/QS-Project-04/",
    withCredentials: true,
});