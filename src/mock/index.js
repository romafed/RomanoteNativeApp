import { AsyncStorage } from 'react-native';

export const createUserMock = async user => {
  try {
    const exist = await AsyncStorage.getItem(user.email);
    if (exist) throw new Error('User is already exist');
    await AsyncStorage.setItem(user.email, JSON.stringify(user));
  } catch (ex) {
    throw new Error(ex);
  }
};

export const logInUserMock = async ({ email, password }) => {
  try {
    const exist = await AsyncStorage.getItem(email);
    if (!exist) throw new Error('Email or password is incorrect');

    const user = JSON.parse(exist);
    const match = user.password === password;
    if (!match) throw new Error('Email or password is incorrect');

    delete user.password;
    return JSON.stringify(user);
  } catch (ex) {
    throw new Error('ex');
  }
};
