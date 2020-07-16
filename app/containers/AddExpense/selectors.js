import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the addExpense state domain
 */

const selectAddExpenseDomain = state => state.addExpense || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddExpense
 */

const makeSelectAddExpense = () =>
  createSelector(
    selectAddExpenseDomain,
    substate => substate
  );

export default makeSelectAddExpense;
export { selectAddExpenseDomain };
