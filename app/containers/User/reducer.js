/*
 *
 * User reducer
 *
 */
import produce from "immer";


import {
  SET_LOGGED_IN,
  UNSET_LOGGED_IN,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
} from './constants';


export const initialState = {
  isLoggedIn: false,
  loaderVisible: false,
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const userReducer = (state = initialState, action) =>
  produce(state => {
    switch (action.type) {
      
      case SET_LOGGED_IN:
        return {
          ...state,
          isLoggedIn: true,
      };
      
      case UNSET_LOGGED_IN:
        return {
          ...state,
          isLoggedIn: false,
      };
      
      case GET_USER_START:
        return {
          ...state,
          loaderVisible: true,
      };
      
      case GET_USER_SUCCESS:
        return {
          ...state,
          loaderVisible: false,
          age: action.payload.age,
          countryCode: action.payload.countryCode,
          username: action.payload.username,
      };

      case GET_USER_ERROR:
      return {
          ...state,
          loaderVisible: false,
          noGeocheckScreens: action.payload,
      };

      default:
        return state;
    }
  });

export default userReducer;
