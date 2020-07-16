/**
 *
 * Asynchronously loads the component for EditExpense
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
