import * as SecureStore from 'expo-secure-store';
import authAPI from '../api/auth';

const key = "AuthToken"

const storeToken = async authToken => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log("Error storing the auth token ", error);
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log("Error getting the auth token ", error);
    }
}

const getUser = async () => {
    const token = await getToken();
    if (!token) return false;

    const account = await authAPI.loadAccount(token);
    if (!account.ok) return false;

    return account.data;
}

const removeToken = async () => {
    try {
        return await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing the auth token ", error);
    }
}

export default { getUser, removeToken, storeToken }