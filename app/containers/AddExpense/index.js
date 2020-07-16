/**
 *
 * AddExpense
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectSaga } from "utils/injectSaga";
import { useInjectReducer } from "utils/injectReducer";
import makeSelectAddExpense from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

export function AddExpense() {
  useInjectReducer({ key: "addExpense", reducer });
  useInjectSaga({ key: "addExpense", saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AddExpense.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  addExpense: makeSelectAddExpense()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(AddExpense);
