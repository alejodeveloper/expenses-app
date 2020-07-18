/**
 *
 * HomePage
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
import { makeSelectHomePage } from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import { getExpensesAction } from "./actions";

export function HomePage({ getExpenses }) {
  useInjectReducer({ key: "homePage", reducer });
  useInjectSaga({ key: "homePage", saga });

  return (
    <div>
      <button onClick={getExpenses}>Random</button>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

HomePage.propTypes = {
  getExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage()
});

function mapDispatchToProps(dispatch) {
  return {
    getExpenses: () => {
      dispatch(getExpensesAction());
    }
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withConnect,
  memo
)(HomePage);
