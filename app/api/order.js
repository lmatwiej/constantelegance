import client from './client';

const createOrder = (id, service, packageId, status, location, date, time) => client.post('/orders/' + id, { service, "package": packageId, status, location, date, time })

export default {
    createOrder,
}