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
    return await mock.logInUserMock(values);
  } catch (ex) {
    throw new Error(ex.message);
  }
};
