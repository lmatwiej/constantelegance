import client from './client';

const login = (email, password) => client.post('/auth', { email, password });
const loadAccount = (id) => client.get('/users/' + id);
const createAccount = (email, password, name, mobile, address, city, state, zip) => client.post('/users/', { email, password, name, mobile, address, city, state, zip });

export default {
    login,
    loadAccount,
    createAccount
}