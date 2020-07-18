/*
 *
 * HomePage reducer
 *
 */
import produce from "immer";

import { 
  GET_EXPENSES_SUCCESS_ACTION, 
  GET_EXPENSES_ERROR_ACTION,
  GET_EXPENSES_ACTION

} from "./constants";

export const initialState = {
  expenses: [],
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTk0OTU0NjAzLCJqdGkiOiJkMTM4YzQ3NmVmNjI0ZmUxOTljZmY2NjI0YWMyNWY2MCIsInVzZXJfaWQiOjJ9.wTPyQ6D60YsgQRykYo7BlwhA7-v9sH3uQqbWa_WOgfc'
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
      
      case GET_EXPENSES_ACTION:
        return {
          ...state
        };   

      default:
        return state;
    }
  });

export default homePageReducer;
