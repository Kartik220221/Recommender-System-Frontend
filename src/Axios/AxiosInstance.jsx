import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL:'https://recommender-system-backend-lmnf.onrender.com',
    withCredentials:true,
    headers:{
        'Content-Type':'application/json'
    }
})
