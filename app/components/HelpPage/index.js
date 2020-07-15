/**
 *
 * HelpPage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";

function HelpPage() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

HelpPage.propTypes = {};

export default memo(HelpPage);
