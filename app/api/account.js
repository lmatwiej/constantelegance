import client from './client';

const updateContact = (id, email, mobile) => client.put('/users/contact/' + id, { email, mobile });
const updateLocation = (id, address, city, state, zip) => client.put('/users/location/' + id, { address, city, state, zip });
const addAddress = (id, label, address, city, state, zip) => client.post('/users/location/' + id, { label, address, city, state, zip });

export default {
    updateContact,
    updateLocation,
    addAddress
}