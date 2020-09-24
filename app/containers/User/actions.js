/*
 *
 * User actions
 *
 */

import { 
  SET_LOGGED_IN,
  UNSET_LOGGED_IN,
  GET_USER_START,
  GET_USER_SUCCESS,
  GET_USER_ERROR
} from "./constants";

export function setLoggedInAction() {
  return {
    type: SET_LOGGED_IN
  };
}


export function unsetLoggedInAction() {
  return {
    type: UNSET_LOGGED_IN
  };
}

export function getUserStartAction() {
  return {
    type: GET_USER_START
  };
}

export function getUserSuccessAction(payload) {
  return {
    type: GET_USER_SUCCESS,
    payload
  };
}

export function getUserErrorAction(payload) {
  return {
    type: GET_USER_ERROR,
    payload
  };
}

