import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'auth';

export const storeUser = async (user) => {
  try {
    const userEncoded = JSON.stringify(user);
    await AsyncStorage.setItem(key, userEncoded);
  } catch (e) {
    console.log(`Error storing the token ${e}`);
  }
};

export const removeUser = async () => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    console.log(`Error removing the user ${e}`);
  }
};

export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem(key);
    if (user == null) return null;
    const decodedUser = JSON.parse(user);
    return decodedUser;
  } catch (e) {
    console.log(`Error getting the user ${e}`);
  }
};
