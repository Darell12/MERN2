import axios from 'axios';

//CLIENTE AXIOS
const clienteAxiosLog = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_Login}/api`
    
})

export default clienteAxiosLog