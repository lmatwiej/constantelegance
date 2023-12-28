import client from './client';

const updateContact = (id, email, mobile) => client.put('/users/contact/' + id, { email, mobile });
const updateLocation = (id, address, city, state, zip) => client.put('/users/location/' + id, { address, city, state, zip });

export default {
    updateContact,
    updateLocation
}