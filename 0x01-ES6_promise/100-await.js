import uploadPhoto from './utils.js';
import createUser from './utils.js';

async function asyncUploadUser() {
    try {
        // Await both promises simultaneously
        const photo = await uploadPhoto();
        const user = await createUser();
        
        // Return the resolved responses in the object
        return {
            photo: photo,
            user: user
        };
    } catch (error) {
        // Return null values for both if there is an error
        return {
            photo: null,
            user: null
        };
    }
}

export default asyncUploadUser;

