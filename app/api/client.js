import { create } from 'apisauce';
// import settings from '../config/settings';

const apiClient = create({
    baseURL: 'http://192.168.1.134:9000/api'
});

export default apiClient;