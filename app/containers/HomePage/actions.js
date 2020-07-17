/*
 *
 * HomePage actions
 *
 */

import { 
  GET_EXPENSES_ACTION, 
  GET_EXPENSES_SUCCESS_ACTION, 
  GET_EXPENSES_ERROR_ACTION

} from "./constants";

export function getExpensesSuccessAction() {
  return {
    type: GET_EXPENSES_SUCCESS_ACTION
  };
}

export function getExpensesErrorAction() {
  return {
    type: GET_EXPENSES_ERROR_ACTION
  };
}

export function getExpensesAction() {
  return {
    type: GET_EXPENSES_ACTION,
    token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk0OTU0NjAzLCJqdGkiOiJkMTM4YzQ3NmVmNjI0ZmUxOTljZmY2NjI0YWMyNWY2MCIsInVzZXJfaWQiOjJ9.wTPyQ6D60YsgQRykYo7BlwhA7-v9sH3uQqbWa_WOgfc'
  };
}
