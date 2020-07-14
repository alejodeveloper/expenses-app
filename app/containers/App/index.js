/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

const AddExpensePage = () => (
  <div>
    Add expenses here
  </div>
);

const EditExpensePage = () => (
  <div>
    Edit expenses here
  </div>
);

const HelpPage = () => (
  <div>
    Help page here
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify APP</h1>
    <NavLink exact to="/" activeClassName="is-active"> Home </NavLink>
    <NavLink exact to="/create" activeClassName="is-active"> Create expense </NavLink>
    <NavLink exact to="/edit" activeClassName="is-active"> Edit expense </NavLink>
    <NavLink exact to="/faq" activeClassName="is-active"> FAQ </NavLink>
  </header>
);


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/create" component={AddExpensePage} />
            <Route exact path="/edit" component={EditExpensePage} />
            <Route exact path="/faq" component={HelpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}
