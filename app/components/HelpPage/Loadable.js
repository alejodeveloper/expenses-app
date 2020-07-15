/**
 *
 * Asynchronously loads the component for HelpPage
 *
 */

import loadable from "utils/loadable";

export default loadable(() => import("./index"));
