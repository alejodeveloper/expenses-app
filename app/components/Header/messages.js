/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from "react-intl";

export const scope = "app.components.Header";

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: "This is the Header component!"
  },
  home: {
    id: `${scope}.home`,
    defaultMessage: "Home"
  },
  edit: {
    id: `${scope}.edit`,
    defaultMessage: "Edit expense"
  },
  create: {
    id: `${scope}.create`,
    defaultMessage: "Create expense"
  },
  faq: {
    id: `${scope}.faq`,
    defaultMessage: "FAQ"
  }
});
