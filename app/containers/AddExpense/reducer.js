/*
 *
 * AddExpense reducer
 *
 */
import produce from "immer";
import { ADD_EXPENSE_ACTION } from "./constants";

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const addExpenseReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case ADD_EXPENSE_ACTION:
        break;
    }
  });

export default addExpenseReducer;
