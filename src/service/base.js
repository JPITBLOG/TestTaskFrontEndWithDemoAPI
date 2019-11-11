import axios from 'axios';
export const baseUrl = 'https://fathomless-sands-84252.herokuapp.com';
const baseService = axios.create({
    baseURL:baseUrl
});
export default baseService;
