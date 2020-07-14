/**
 *
 * Asynchronously loads the component for Routers
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
