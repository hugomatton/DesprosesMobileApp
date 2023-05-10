// actions.js

// action types
export const SET_NAME = 'UPDATE_NAME';
export const SET_BIRTHDATE = 'UPDATE_BIRTHDATE';
export const SET_PHONE_NUMBER = 'UPDATE_PHONE_NUMBER';
export const CLEAR_USER_INFO = 'CLEAR_USER_INFO';


// action creators
export const updateName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};

export const updateBirthDate = (birthDate) => {
  return {
    type: SET_BIRTHDATE,
    payload: birthDate,
  };
};

export const updatePhoneNumber = (phoneNumber) => {
  return {
    type: SET_PHONE_NUMBER,
    payload: phoneNumber,
  };
};
