import client from './client';

const login = (email, password) => client.post('/auth', { email, password });
const loadAccount = (id) => client.get('/users/' + id);

export default {
    login,
    loadAccount
}