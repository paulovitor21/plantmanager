import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.42.58:19000/',

});

export default api;