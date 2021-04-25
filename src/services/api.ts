import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/paulovitor21/api-plantmanager',

});

export default api;