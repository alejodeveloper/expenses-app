/**
 *
 * Routers
 *
 */

import React, { memo } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { useInjectReducer } from "utils/injectReducer";
import makeSelectRouters from "./selectors";
import reducer from "./reducer";

import HelpPage from "../../components/HelpPage/Loadable";
import AddExpensePage from "../../components/AddExpensePage/Loadable";
import EditExpensePage from "../../components/EditExpensePage/Loadable";
import Header from "../../components/Header/Loadable";
import NotFoundPage from '../NotFoundPage/Loadable';
import HomePage from '../HomePage/Loadable';

import GlobalStyle from '../../global-styles';



export function Routers() {
  useInjectReducer({ key: "routers", reducer });

  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/create" component={AddExpensePage} />
            <Route exact path="/edit/:id" component={EditExpensePage} />
            <Route exact path="/faq" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}

Routers.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  routers: makeSelectRouters()
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
)(Routers);
