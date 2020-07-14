/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

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


export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={AddExpensePage} />
          <Route exact path="/edit" component={EditExpensePage} />
          <Route exact path="/faq" component={HelpPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </div>
  );
}
