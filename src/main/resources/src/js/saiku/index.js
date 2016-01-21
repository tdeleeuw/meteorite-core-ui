// webpack loaders
import '../../../index.html';
import '../../../dist/saiku/saiku.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { createHistory } from 'history';
import Login from './components/saiku/Login';

var routes = (
  <Router history={createHistory()}>
    <Route path="/" component={Login} />
  </Router>
);

ReactDOM.render(routes, document.querySelector('#main'));
