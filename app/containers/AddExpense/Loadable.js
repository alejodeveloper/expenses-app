/**
 *
 * Asynchronously loads the component for AddExpense
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
