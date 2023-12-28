import client from './client';

const updateWardrobe = (id, new_packages) => client.post('/wardrobes/' + id, { new_packages });

export default {
    updateWardrobe,
}