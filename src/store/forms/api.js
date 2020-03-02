import AsyncStorage from '@react-native-community/async-storage';
import * as mock from '../../mock';

export const createUser = async user => {
  try {
    // Fake call api
    await mock.createUserMock(user);
  } catch (ex) {
    throw new Error(ex.message);
  }
};

export const logInUser = async values => {
  try {
    // Fake call api
    const token = await mock.logInUserMock(values);
    await AsyncStorage.setItem('token', token);
  } catch (ex) {
    throw new Error(ex.message);
  }
};
