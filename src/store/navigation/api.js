import AsyncStorage from '@react-native-community/async-storage';

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (ex) {
    return null;
  }
};

export const setToken = async token => {
  try {
    await AsyncStorage.setItem('token', token);
    return token;
  } catch (ex) {
    throw new Error(ex);
  }
};
