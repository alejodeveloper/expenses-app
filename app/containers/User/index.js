/**
 *
 * User
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

import { getUserStartAction } from './actions';
import makeSelectUser from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

export function UserLogin() {
  useInjectReducer({ key: "user", reducer });
  useInjectSaga({ key: "user", saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <div className="signup">
        <form className="widget-form">
          <h1>Signup</h1>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            id="email"
            className="email"
            label="Email"
            component="input"
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            className="password"
            label="Password"
            component="input"
          />
          <button onClick={getUserStartAction}>SIGNUP</button>
        </form>
      </div>
   
    </div>
  );
}

UserLogin.propTypes = {
  dispatchLoginUser: PropTypes.func.isRequired,
  
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectUser()
});


function mapDispatchToProps(dispatch) {
  return {
    dispatchLoginUser: () => {
      dispatch(getUserStartAction());
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
)(UserLogin);
