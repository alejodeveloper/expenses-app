/**
 *
 * EditExpense
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
import makeSelectEditExpense from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

export function EditExpense() {
  useInjectReducer({ key: "editExpense", reducer });
  useInjectSaga({ key: "editExpense", saga });

  return (
    <div>
      <p>HIIIII</p>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

EditExpense.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  editExpense: makeSelectEditExpense()
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
)(EditExpense);
