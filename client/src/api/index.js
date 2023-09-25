import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true,
})

export const login = (data) => {
    return axiosInstance.post('/login', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded'}})
}

export const register = (data) => {
    return axiosInstance.post('/register', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded'}})
}

export const profile = () => {
    return axiosInstance.get('/profile')
}