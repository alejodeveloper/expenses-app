/*
 *
 * EditExpense reducer
 *
 */
import produce from "immer";
import { EDIT_EXPENSE_ACTION } from "./constants";

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const editExpenseReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case EDIT_EXPENSE_ACTION:
        break;
    }
  });

export default editExpenseReducer;
