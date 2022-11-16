import axios from 'axios';

//CLIENTE AXIOS
const clienteAxios = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api`
})

export default clienteAxios