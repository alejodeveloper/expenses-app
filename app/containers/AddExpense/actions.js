/*
 *
 * AddExpense actions
 *
 */

import { 
  ADD_EXPENSE_SUCCESS_ACTION,
  ADD_EXPENSE_ERROR_ACTION 

} from "./constants";

export function addExpenseSuccessAction() {
  return {
    type: ADD_EXPENSE_SUCCESS_ACTION
  };
}

export function addExpenseErrorAction() {
  return {
    type: ADD_EXPENSE_ERROR_ACTION
  };
}
