import axios from 'axios'

const BASE_URL = "https://localhost:3000/product/data"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})