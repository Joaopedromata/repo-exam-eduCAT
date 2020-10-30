import axios from 'axios'

const api = axios.create({
    baseURL: 'https://educat-exam.herokuapp.com/'
})

export default api