/**
 *
 * Header
 *
 */

import React, { memo } from "react";
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from "react-intl";
import messages from "./messages";

function Header() {
  return (
    <header>
    <h1>Expensify APP</h1>
    <NavLink exact to="/" activeClassName="is-active">
      <FormattedMessage {...messages.home} />
    </NavLink>
    <NavLink exact to="/create" activeClassName="is-active">
      <FormattedMessage {...messages.create} />
    </NavLink>
    <NavLink exact to="/edit" activeClassName="is-active">
      <FormattedMessage {...messages.edit} />
    </NavLink>
    <NavLink exact to="/faq" activeClassName="is-active">
      <FormattedMessage {...messages.faq} />
    </NavLink>
  </header>
  );
}

Header.propTypes = {};

export default memo(Header);
