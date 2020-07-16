/*
 *
 * AddExpense reducer
 *
 */
import produce from "immer";

import { 
  ADD_EXPENSE_SUCCESS_ACTION,
  ADD_EXPENSE_ERROR_ACTION 

} from "./constants";

export const initialState = {
  expense: {},
  token: ""
};

/* eslint-disable default-case, no-param-reassign */
const addExpenseReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case ADD_EXPENSE_SUCCESS_ACTION:
        return {
          ...state,
          expense: action.expense
        };
      
      case ADD_EXPENSE_ERROR_ACTION:
        return {
          ...state,
          add_expense_error: action.error
        };
    }
  });

export default addExpenseReducer;
