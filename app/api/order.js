import client from './client';

const createOrder = (id, date, time, type, location, packageId) => client.post('/orders/' + id, { date, time, type, location, packageId });

export default {
    createOrder,
}