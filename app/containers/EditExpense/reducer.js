/*
 *
 * EditExpense reducer
 *
 */
import produce from "immer";
import { 
  EDIT_EXPENSE_SUCCESS_ACTION,
  EDIT_EXPENSE_ERROR_ACTION 
} from "./constants";

export const initialState = {
  expense: {},
  token: ""
};

/* eslint-disable default-case, no-param-reassign */
const editExpenseReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case EDIT_EXPENSE_SUCCESS_ACTION:
        return {
          ...state,
          expense: action.expense
        };
      
      case EDIT_EXPENSE_ERROR_ACTION:
        return {
          ...state,
          edit_expense_error: action.error
        };
    }
  });

export default editExpenseReducer;
