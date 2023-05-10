import {SET_NAME, SET_BIRTHDATE, SET_PHONE_NUMBER, CLEAR_USER_INFO} from '../actions/userInfoActions'

const initialState = {
  name: "",
  birthDate: "",
  phoneNumber: "",
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_BIRTHDATE:
      return {
        ...state,
        birthDate: action.payload,
      };
    case SET_PHONE_NUMBER:
      return {
        ...state,
        phoneNumber: action.payload,
      };
    case CLEAR_USER_INFO:
      return initialState;
    default:
      return state;
  }
};
