/*
 *
 * HomePage actions
 *
 */

import { 
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
