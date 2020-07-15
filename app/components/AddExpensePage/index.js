/**
 *
 * AddExpensePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";

function AddExpensePage() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AddExpensePage.propTypes = {};

export default memo(AddExpensePage);
