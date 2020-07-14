import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the routers state domain
 */

const selectRoutersDomain = state => state.routers || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Routers
 */

const makeSelectRouters = () =>
  createSelector(
    selectRoutersDomain,
    substate => substate
  );

export default makeSelectRouters;
export { selectRoutersDomain };
