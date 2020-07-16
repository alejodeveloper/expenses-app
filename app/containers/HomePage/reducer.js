/*
 *
 * HomePage reducer
 *
 */
import produce from "immer";

import { 
  GET_EXPENSES_SUCCESS_ACTION, 
  GET_EXPENSES_ERROR_ACTION

} from "./constants";

export const initialState = {
  expenses: [],
  token: ""
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case GET_EXPENSES_SUCCESS_ACTION:
        return {
          ...state,
          expenses: action.expenses
        };
      
      case GET_EXPENSES_ERROR_ACTION:
        return {
          ...state,
          get_expenses_error: action.error
        };
      
      default:
        return state;
    }
  });

export default homePageReducer;
