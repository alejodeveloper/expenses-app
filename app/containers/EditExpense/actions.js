/*
 *
 * EditExpense actions
 *
 */

import { 
  EDIT_EXPENSE_SUCCESS_ACTION,
  EDIT_EXPENSE_ERROR_ACTION 
} from "./constants";

export function editExpenseSuccessAction() {
  return {
    type: EDIT_EXPENSE_SUCCESS_ACTION
  };
}

export function editExpenseErrorAction() {
  return {
    type: EDIT_EXPENSE_ERROR_ACTION
  };
}