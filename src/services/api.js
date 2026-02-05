import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-usuarios-1-o9rv.onrender.com'
})

export default api
