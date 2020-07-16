import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the editExpense state domain
 */

const selectEditExpenseDomain = state => state.editExpense || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EditExpense
 */

const makeSelectEditExpense = () =>
  createSelector(
    selectEditExpenseDomain,
    substate => substate
  );

export default makeSelectEditExpense;
export { selectEditExpenseDomain };
