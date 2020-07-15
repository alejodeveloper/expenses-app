/**
 *
 * EditExpensePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";

function EditExpensePage(props) {
  console.log(props)
  return (
    <div>
      <FormattedMessage {...messages.header} /> {props.match.params.id}
    </div>
  );
}

EditExpensePage.propTypes = {};

export default memo(EditExpensePage);
